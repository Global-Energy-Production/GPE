import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://energycoin.com"

  // Criar entradas de sitemap apenas para inglês
  const entries = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/whitepaper`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/github`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/x`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dexscreener`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/mexc`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tradingview`,
      lastModified: new Date(),
    },
  ]

  return entries
}

