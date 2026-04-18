import { NextRequest, NextResponse } from 'next/server';

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN || '',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to get Spotify access token');
  }

  const data = await response.json();
  return data.access_token;
}

export async function GET(request: NextRequest) {
  try {
    const accessToken = await getAccessToken();

    // Try to get currently playing track first
    const currentlyPlayingResponse = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    let track = null;

    if (currentlyPlayingResponse.ok) {
      const data = await currentlyPlayingResponse.json();
      if (data?.item) {
        track = {
          name: data.item.name,
          artist: data.item.artists[0].name,
          album: data.item.album.name,
          image: data.item.album.images[0]?.url,
          uri: data.item.uri,
          isPlaying: data.is_playing,
          progress: data.progress_ms,
          duration: data.item.duration_ms,
        };
      }
    }

    // If nothing is playing, get recently played
    if (!track) {
      const recentResponse = await fetch(
        'https://api.spotify.com/v1/me/player/recently-played?limit=1',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (recentResponse.ok) {
        const data = await recentResponse.json();
        if (data?.items?.[0]) {
          const item = data.items[0].track;
          track = {
            name: item.name,
            artist: item.artists[0].name,
            album: item.album.name,
            image: item.album.images[0]?.url,
            uri: item.uri,
            isPlaying: false,
            progress: 0,
            duration: item.duration_ms,
          };
        }
      }
    }

    return NextResponse.json(track || { error: 'No track found' });
  } catch (error) {
    console.error('Spotify API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Spotify data' },
      { status: 500 }
    );
  }
}
