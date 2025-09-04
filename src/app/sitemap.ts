import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rajapandeeswaran.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://rajapandeeswaran.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rajapandeeswaran.vercel.app/skills',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url:'https://rajapandeeswaran.vercel.app/myResume',
        lastModified: new Date(),
        changeFrequency:"yearly",
        priority:0.4
    },
    {
        url:'https://rajapandeeswaran.vercel.app/projects',
         lastModified: new Date(),
        changeFrequency:"yearly",
        priority:0.4
    },
    {
        url:'https://rajapandeeswaran.vercel.app/experience',
         lastModified: new Date(),
        changeFrequency:"yearly",
        priority:0.4
    }
  ]
}