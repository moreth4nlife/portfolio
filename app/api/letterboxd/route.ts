import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function getLetterboxdTop4(username: string) {
  try {
    const response = await fetch(`https://letterboxd.com/${username}/`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    const html = await response.text();
    const $ = cheerio.load(html);

    const top4: any[] = [];

    // Try multiple selector patterns for flexibility
    const selectors = [
      '.profile-favorite-films .poster-container',
      '.profile-favorite-films li',
      '[data-list-item] .poster-container',
      'li.poster-container',
    ];

    for (const selector of selectors) {
      const items = $(selector);
      if (items.length > 0) {
        console.log(`Found ${items.length} items with selector: ${selector}`);
        items.each((i, el) => {
          if (i < 4) {
            const img = $(el).find('img');
            const anchor = $(el).find('a');

            const title = img.attr('alt') || img.attr('title');
            const poster = img.attr('src');
            const href = anchor.attr('href');

            if (title && poster && href) {
              top4.push({
                title,
                poster,
                link: href.startsWith('http') ? href : `https://letterboxd.com${href}`
              });
            }
          }
        });
        break;
      }
    }

    console.log(`Scraped ${top4.length} films from ${username}`);
    return top4;
  } catch (error) {
    console.error(`Error fetching Letterboxd data for ${username}:`, error);
    return [];
  }
}

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
    const username = process.env.LETTERBOXD_USERNAME;

    if (!username) {
      console.log('No LETTERBOXD_USERNAME set, using mock data');
      return NextResponse.json(MOCK_FILMS);
    }

    console.log(`Fetching Letterboxd data for username: ${username}`);
    const films = await getLetterboxdTop4(username);

    // If scraping returns empty, fall back to mock data
    if (!films || films.length === 0) {
      console.log('No films scraped, falling back to mock data');
      return NextResponse.json(MOCK_FILMS);
    }

    // Transform scraped data to match expected format
    const transformedFilms = films.map((film: any) => ({
      title: film.title,
      poster: film.poster,
      link: film.link,
      rating: 4, // Cheerio scraping can't easily get ratings
      year: new Date().getFullYear(),
    }));

    console.log(`Returning ${transformedFilms.length} real films`);
    return NextResponse.json(transformedFilms);
  } catch (error) {
    console.error('Letterboxd API error:', error);
    // Return mock data on error
    return NextResponse.json(MOCK_FILMS);
  }
}
