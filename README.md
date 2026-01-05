# Blue Stone Custom Homes Website

A modern, high-end website for Blue Stone Custom Homes built with Next.js and Tailwind CSS.

**Live Site:** https://custom-home-builder-app-dqbiesgg.devinapps.com

## Quick Start

```bash
npm install      # Install dependencies
npm run dev      # Run development server
npm run build    # Build for production
```

## How to Update Content

All website content is stored in a single file for easy editing: **`src/data/content.ts`**

### Updating Text Content

**Site Configuration (phone, email, etc.):**
```typescript
export const siteConfig = {
  phone: "701-540-3129",
  email: "bluestonehomesnd@gmail.com",
  serviceArea: "Fargo, ND and surrounding areas",
};
```

**Stats (Years, Homes Built, Rating):**
```typescript
export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Homes Built" },
  { value: "5.0", label: "Star Rating" },
];
```

**Testimonials:**
```typescript
export const testimonials = [
  {
    quote: "Blue Stone Custom Homes exceeded our expectations...",
    author: "The Johnson Family",
    location: "West Fargo, ND",
  },
];
```

## How to Add New Projects

### Step 1: Add Project Images

Create a folder in `public/images/projects/your-project-name/` and add your photos.

### Step 2: Add Project Data

In `src/data/content.ts`, add to the `projects` array:

```typescript
{
  id: "your-project-name",
  title: "Your Project Title",
  location: "City, ND",
  sqft: "3,000",
  bedrooms: 4,
  bathrooms: 3,
  description: "A beautiful custom home...",
  features: ["Custom Kitchen", "Open Floor Plan"],
  images: [
    "/images/projects/your-project-name/exterior.jpg",
    "/images/projects/your-project-name/kitchen.jpg",
  ],
  featured: true,  // Show on homepage
},
```

### Step 3: Rebuild

```bash
npm run build
```

## How to Update Photos

| Photo Type | Location |
|------------|----------|
| Logo | `public/images/logo.png` |
| Project Photos | `public/images/projects/[project-name]/` |
| Team Photos | `public/images/team/` |

## Folder Structure

```
src/data/content.ts    # ALL EDITABLE CONTENT
public/images/         # All images
src/app/               # Page components
src/components/        # Reusable components
```

## Contact Form

The contact form opens the visitor's email client with form data pre-filled. To change the destination email, update `siteConfig.email` in `content.ts`.

## Tech Stack

Next.js 16, TypeScript, Tailwind CSS, Lucide React icons
