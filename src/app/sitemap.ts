import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://myprofile-lovat-tau.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://myprofile-lovat-tau.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://myprofile-lovat-tau.vercel.app/skills',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url:'https://myprofile-lovat-tau.vercel.app/myResume',
        lastModified: new Date(),
        changeFrequency:"yearly",
        priority:0.4
    },
    {
        url:'https://myprofile-lovat-tau.vercel.app/projects',
         lastModified: new Date(),
        changeFrequency:"yearly",
        priority:0.4
    },
    {
        url:'https://myprofile-lovat-tau.vercel.app/experience',
         lastModified: new Date(),
        changeFrequency:"yearly",
        priority:0.4
    }
  ]
}