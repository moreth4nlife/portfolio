import { client, urlFor } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const projects = await client.fetch(
      `*[_type == "project"] | order(order asc) {
        _id,
        title,
        shortDescription,
        fullDescription,
        technologies,
        image,
        caseStudy,
        link,
        featured,
        order
      }`
    )

    const projectsWithImages = projects.map((project: any) => ({
      ...project,
      imageUrl: project.image ? urlFor(project.image).url() : null,
    }))

    return NextResponse.json(projectsWithImages)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}
