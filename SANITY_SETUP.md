# Sanity CMS Setup Guide

Your portfolio is now configured to use Sanity CMS for dynamic content management. Follow these steps to get it running.

## Step 1: Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io)
2. Sign up or log in to your account
3. Click "Create new project"
4. Choose:
   - Project name: "Portfolio CMS" (or your preference)
   - Use the default dataset name "production"
   - Select a region close to you
5. Once created, note your **Project ID** (you'll need this)

## Step 2: Get Your API Token

1. In your Sanity project, go to **Settings** → **API**
2. Under "Tokens", click "Add API Token"
3. Name it "Portfolio Next.js"
4. Set permissions to:
   - ✓ Read
   - ✓ Write
   - ✓ Manage
5. Copy the token value

## Step 3: Update Environment Variables

Open `.env.local` and replace the placeholder values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_actual_api_token
```

## Step 4: Start the Sanity Studio

```bash
npm run dev

# In a new terminal:
npx sanity@latest manage
```

This will open your Sanity Studio where you can create and manage content.

## Step 5: Add Your First Content

### Experience

1. In Sanity Studio, go to **Experience**
2. Click "Create" and add your job entries:
   - Company: "25Friday"
   - Role: "Frontend Engineer"
   - Start Date: "2025-01-01"
   - End Date: (leave empty for current)
   - isCurrent: true
   - Skills: ["React", "TypeScript", "Next.js"]

Repeat for each past job.

### Projects

1. Go to **Project** in the studio
2. Click "Create" and add your projects:
   - Title: "Project Name"
   - Short Description: "One-line description"
   - Full Description: "Detailed description"
   - Technologies: ["React", "TypeScript", "Tailwind"]
   - Image: Upload a cover image (will be optimized automatically)
   - Case Study: Detailed breakdown of the project
   - Link: Project URL
   - Featured: true/false
   - Order: 1, 2, 3... (for sorting)

## Step 6: Test the Integration

1. Restart your Next.js dev server: `npm run dev`
2. Visit your portfolio homepage
3. You should see your Sanity content loading in:
   - **Experience Cell**: Your jobs from Sanity
   - **Projects Cell**: Your projects from Sanity

## Troubleshooting

### "NEXT_PUBLIC_SANITY_PROJECT_ID is not set"
- Make sure `.env.local` has the correct project ID
- Restart the dev server after changing `.env.local`

### Projects showing default fallback data
- Check that you've created at least one project in Sanity Studio
- Verify the API route `/api/projects` returns data (check Network tab in DevTools)

### Images not showing
- Ensure you've uploaded an image in the project document
- Check that the image optimization is working (inspect the image URL)

### API Token errors
- Verify your token has "Read" and "Write" permissions
- Make sure the token isn't expired

## Next Steps

Once Experience & Projects are working:

1. **Expand to more content**: Update SkillsCell, ContactCell, etc. to use Sanity
2. **Add preview mode**: Implement real-time preview in your Next.js app
3. **Set up webhooks**: Auto-trigger builds when content changes in Sanity

## CLI Commands

```bash
# Open Sanity Studio
npx sanity@latest manage

# Deploy studio to Sanity-hosted URL
npm run build && npx sanity@latest deploy

# View your dataset in Sanity
npx sanity@latest dataset
```

## File Structure

```
/sanity
  /schemaTypes
    - experience.ts
    - project.ts
    - index.ts
  /lib
    - client.ts
  sanity.config.ts
  sanity.cli.ts
/app/api
  /experience
    - route.ts
  /projects
    - route.ts
```

---

**Sanity Free Tier Limits:**
- 1 million API requests/month
- 5 projects
- 100GB asset storage
- Perfect for a personal portfolio!

For production, consider upgrading to a paid plan.
