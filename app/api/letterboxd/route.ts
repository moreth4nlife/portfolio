import { NextRequest, NextResponse } from 'next/server';

// This is a mock implementation since Letterboxd doesn't have an official API
// You can either:
// 1. Manually update this list
// 2. Use a web scraping service
// 3. Integrate with a Letterboxd unofficial API

const MOCK_FILMS = [
  {
    title: 'La La Land',
    rating: 4.5,
    year: 2016,
    director: 'Damien Chazelle',
    image: 'https://a.ltrbxd.com/resized/sm/film-poster/4/2/0/1/1/3/420113-la-la-land-0-250-0-375-crop.jpg',
  },
  {
    title: 'Drive',
    rating: 5,
    year: 2011,
    director: 'Nicolas Winding Refn',
    image: 'https://a.ltrbxd.com/resized/sm/film-poster/5/0/7/5/5075-drive-0-250-0-375-crop.jpg',
  },
  {
    title: 'The Grand Budapest Hotel',
    rating: 4.5,
    year: 2014,
    director: 'Wes Anderson',
    image: 'https://a.ltrbxd.com/resized/sm/film-poster/1/5/6/5/8/7/156587-the-grand-budapest-hotel-0-250-0-375-crop.jpg',
  },
  {
    title: 'There Will Be Blood',
    rating: 5,
    year: 2007,
    director: 'Paul Thomas Anderson',
    image: 'https://a.ltrbxd.com/resized/sm/film-poster/2/5/2/7/2527-there-will-be-blood-0-250-0-375-crop.jpg',
  },
];

export async function GET(request: NextRequest) {
  try {
    // Return mock data
    // To integrate with real Letterboxd data, you would need to:
    // 1. Use an unofficial Letterboxd API like letterboxd-api
    // 2. Or set up web scraping
    // 3. Or manually maintain the list

    return NextResponse.json(MOCK_FILMS);
  } catch (error) {
    console.error('Letterboxd API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Letterboxd data' },
      { status: 500 }
    );
  }
}
