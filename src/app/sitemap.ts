import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('.')[0] + 'Z' // removes milliseconds

  return [
    {
      url: 'https://rajapandeeswaran.vercel.app/',
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: 'https://rajapandeeswaran.vercel.app/about',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rajapandeeswaran.vercel.app/skills',
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
        url:'https://rajapandeeswaran.vercel.app/projects',
         lastModified: today,
        changeFrequency:"yearly",
        priority:0.6
    },
    {
        url:'https://rajapandeeswaran.vercel.app/myResume',
        lastModified: today,
        changeFrequency:"yearly",
        priority:0.5
    },
    {
        url:'https://rajapandeeswaran.vercel.app/experience',
         lastModified: today,
        changeFrequency:"yearly",
        priority:0.5
    }
  ]
}