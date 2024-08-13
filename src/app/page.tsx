import { Metadata } from "next"

import LandingPage from "@/components/landing-page"

export const metadata: Metadata = {
  title: "Karunaada Cafe - Brewing Karnataka’s Heritage",
  description:
    "Step into Karunaada Cafe, where the rich legacy of Karnataka’s coffee culture dances harmoniously with the comforting embrace of chai.",
  keywords:
    "Karnataka café, chai and coffee Karnataka, best café in Karnataka, Karunaada Cafe tea and coffee, South Indian café, Karnataka café experience, Coffee and chai in Karnataka, South Indian beverages, Traditional filter coffee, Masala chai in Karnataka, Karnataka’s best café, Chai and coffee culture, Southern hospitality café",
}

export default function Home() {
  return <LandingPage />
}
