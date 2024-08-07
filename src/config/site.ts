import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "KarunaadaCafe",
  author: "Harjot Singh",
  description: "KarunaadaCafe is a cafe that serves delicious cuisine. It is based in Karnataka, India.",
  keywords: ["KarunaadaCafe", "Cafe", "Cuisine", "Karnataka", "India", "Harjot Singh"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://harjot.pro",
  },
  links: {
    github: "https://github.com/HarjjotSinghh",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
