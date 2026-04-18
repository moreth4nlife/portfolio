import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const experiences = await client.fetch(
      `*[_type == "experience"] | order(endDate desc, startDate desc) {
        _id,
        company,
        role,
        startDate,
        endDate,
        isCurrent,
        description,
        skills,
        location
      }`
    )

    return NextResponse.json(experiences)
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return NextResponse.json(
      { error: 'Failed to fetch experiences' },
      { status: 500 }
    )
  }
}
