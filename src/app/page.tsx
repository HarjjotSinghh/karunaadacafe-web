"use client"

import { openAsBlob } from "fs"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Linkedin,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react"
import { RxHamburgerMenu } from "react-icons/rx"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"

export const coords = [
  { left: 192, top: 16 },
  { left: 240, top: 36 },
  { left: 185, top: 76 },
  { left: 250, top: -24 },
  { left: 230, top: 115 },
  { left: 129, top: 90 },
  { left: 140, top: 160 },
  { left: 215, top: 175 },
  { left: 170, top: 200 },
  { left: 140, top: 250 },
  { left: 180, top: 315 },
  { left: 190, top: 254 },
  { left: 110, top: 200 },
  { left: 65, top: 230 },
  { left: 140, top: 360 },
  { left: 195, top: 450 },
  { left: 235, top: 410 },
  { left: 270, top: 360 },
  { left: 325, top: 420 },
  { left: 315, top: 370 },
  { left: 280, top: 425 },
  { left: 180, top: 520 },
  { left: 130, top: 505 },
  { left: 144, top: 454 },
  { left: 90, top: 465 },
  { left: 60, top: 420 },
  { left: 40, top: 360 },
  { left: 30, top: 305 },
  { left: 10, top: 260 },
  { left: 50, top: 170 },
  { left: 0, top: 200 },
  { left: 15, top: 130 },
  { left: 60, top: 110 },
  { left: 95, top: 145 },
  { left: 180, top: 130 },
  { left: 80, top: 285 },
  { left: 125, top: 310 },
  { left: 85, top: 345 },
  { left: 210, top: 365 },
  { left: 170, top: 400 },
  { left: 110, top: 410 },
  { left: 250, top: 470 },
  { left: 220, top: 510 },
]

export const scaleUpVariants = {
  initial: {
    opacity: 0,
    // y: -100,
    transform: "scale(0)",
    transformOrigin: "bottom",
  },
  animate: (index: number) => ({
    opacity: 1,
    // y: 0,
    // left: 0,
    // right: 0,
    transform: "scale(1)",
    transformOrigin: "bottom",
    transition: {
      ease: "circInOut",
      delay: 0.07 * index,
    },
  }),
}

export default function Home() {
  return (
    <div className="w-full">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background/90 p-4 shadow-xl shadow-black/[0.01] backdrop-blur">
        <div className="flex w-full items-center justify-between space-x-16">
          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={100}
            className="h-20 w-auto"
          />
          <nav className="hidden space-x-6 lg:flex">
            <a href="#" className="text-lg font-semibold">
              Home
            </a>
            <a href="#" className="text-lg">
              About Us
            </a>
            <a href="#" className="text-lg">
              Menu
            </a>
            <a href="#" className="text-lg">
              Franchise
            </a>
            <a href="#" className="text-lg">
              Careers
            </a>
            <a href="#" className="text-lg">
              Gallery
            </a>
            <a href="#" className="text-lg">
              Blog
            </a>
          </nav>
        </div>
        <Drawer direction="top">
          <DrawerTrigger className="block lg:hidden">
            <Button
              size={"icon"}
              variant="ghost"
              className="grpup flex items-center gap-2 hover:bg-[#8a4809]"
            >
              <RxHamburgerMenu className="size-5 group-hover:text-white" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <Image
                src="/logo.png"
                alt="Logo"
                draggable={false}
                className=" select-none"
                width={230}
                height={50}
              />
            </DrawerHeader>
            <DrawerDescription className="p-4">
              <ul className="flex flex-col gap-2">
                <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                  <Link className="w-fit" href={"#"}>
                    Home
                  </Link>
                </li>
                <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                  <Link className="w-fit" href={"#"}>
                    About Us
                  </Link>
                </li>
                <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                  <Link className="w-fit" href={"#"}>
                    Menu
                  </Link>
                </li>
                <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                  <Link className="w-fit" href={"#"}>
                    Franchise
                  </Link>
                </li>
                <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                  <Link className="w-fit" href={"#"}>
                    Careers
                  </Link>
                </li>
                <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                  <Link className="w-fit" href={"#"}>
                    Gallery
                  </Link>
                </li>
                <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                  <Link className="w-fit" href={"#"}>
                    Blog
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <h2 className={`!mb-2 text-xl font-semibold text-foreground`}>
                  Contact Us
                </h2>
                <div className="flex flex-col items-start justify-center gap-2 text-sm">
                  <Link href={"mailto:info@karunaadacafe.com"} className="">
                    <p
                      className={
                        "text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary"
                      }
                    >
                      info@karunaadacafe.com
                    </p>
                  </Link>
                  <Link href={"tel:+919999999999"} className="">
                    <p
                      className={
                        "text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary"
                      }
                    >
                      +91 999999 99999
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex space-x-2">
                  <Link href={"#"} target="_blank" rel="noreferrer noopener">
                    <Button
                      size={"icon"}
                      className="!size-10 rounded-full bg-[#8a4809] transition-all duration-300 ease-in-out hover:bg-[#8a4809]/90"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={"#"} target="_blank" rel="noreferrer noopener">
                    <Button
                      size={"icon"}
                      className="!size-10 rounded-full bg-[#8a4809] transition-all duration-300 ease-in-out hover:bg-[#8a4809]/90"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </DrawerDescription>
          </DrawerContent>
        </Drawer>
      </header>
      <section className="flex flex-col items-center justify-center gap-6 bg-gray-50 px-4 py-24 md:gap-12 lg:gap-16 lg:px-8 xl:flex-row xl:gap-24">
        <h2 className="hidden px-4 text-4xl font-extrabold tracking-tighter lg:px-8 lg:text-5xl xl:block">
          550+ Outlets
        </h2>

        <div className="">
          <h1 className="px-4 text-center text-4xl font-extrabold tracking-tighter md:text-5xl lg:px-8 lg:text-6xl">
            Serving In:
          </h1>
          <div className="relative mt-8 scale-[80%] sm:scale-100">
            <Image
              src="/karnataka.svg"
              width={1000}
              height={3000}
              alt="Map"
              className="w-full max-w-sm select-none"
              draggable={false}
            />
            <div className="absolute inset-0">
              {coords.map(({ left, top }, index) => {
                return (
                  <motion.img
                    custom={index}
                    variants={scaleUpVariants}
                    transition={{ ease: "circInOut" }}
                    whileInView="animate"
                    viewport={{ once: true }}
                    initial="initial"
                    key={index}
                    src="/cup.svg"
                    alt="Cup"
                    width={100}
                    height={100}
                    style={{ left, top }}
                    className={`absolute inset-0 z-10 size-14 select-none sm:size-16 `}
                    draggable={false}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <h2 className="block px-4 text-4xl font-extrabold tracking-tighter lg:text-5xl xl:hidden">
          550+ Outlets
        </h2>
        <h2 className="-mt-4 px-4 text-4xl font-extrabold tracking-tighter lg:text-5xl">
          320+ Cities
        </h2>
      </section>
      <section className="flex flex-col items-center bg-white px-4 py-24 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
          Welcome To KarunaadaCafe
        </h2>
        <h3 className="mt-4 text-2xl font-bold tracking-tight lg:text-3xl xl:text-4xl">
          Cuddle The Kulhad
        </h3>
        <p className="mt-4 max-w-4xl text-center">
          With over 4.5 Lakh Kulhad chai every day, we brew the perfect
          experience of happiness and create soulful memories. We are synonymous
          with aromatic Kulhad chai and platter of love and smiles.
        </p>
        <Image
          src="/placeholder.png"
          alt="Cuddle The Kulhad"
          width={1920}
          height={1080}
          className="mt-8 w-full max-w-4xl rounded-lg shadow-xl shadow-black/[0.05]"
        />
        <Button size={"lg"} className=" mt-8 h-14 bg-black text-xl text-white">
          Read Our Story
        </Button>
      </section>
      <section className="bg-[#8a4809] px-4 py-24 lg:px-8">
        <h2 className="text-center text-center text-3xl font-extrabold tracking-tighter text-white md:text-4xl lg:text-5xl xl:text-6xl">
          Up To The Minute
        </h2>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-64 rounded bg-white p-4">
            <Image
              width={1920}
              height={1080}
              src="/placeholder.png"
              alt="News 1"
              className="w-full"
            />
            <p className="mt-4 text-center">News 1</p>
          </div>
          <div className="w-64 rounded bg-white p-4">
            <Image
              width={1920}
              height={1080}
              src="/placeholder.png"
              alt="News 2"
              className="w-full"
            />
            <p className="mt-4 text-center">News 2</p>
          </div>
          <div className="w-64 rounded bg-white p-4">
            <Image
              width={1920}
              height={1080}
              src="/placeholder.png"
              alt="News 3"
              className="w-full"
            />
            <p className="mt-4 text-center">News 3</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-black px-4 py-24 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tighter text-white md:text-4xl lg:text-5xl xl:text-6xl">
          With Your Love & Support
        </h2>
        <div className="mt-8 flex w-full max-w-4xl justify-around text-white">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-extrabold font-extrabold tracking-tight tracking-tighter lg:text-3xl xl:text-4xl">
              40+
            </span>
            <span>Outlets</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-extrabold font-extrabold tracking-tight tracking-tighter lg:text-3xl xl:text-4xl">
              23+
            </span>
            <span>Cities</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-extrabold font-extrabold tracking-tight tracking-tighter lg:text-3xl xl:text-4xl">
              0.3 Lakh
            </span>
            <span>Kulhads/Day</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-extrabold font-extrabold tracking-tight tracking-tighter lg:text-3xl xl:text-4xl">
              1,565 Litres
            </span>
            <span>Milk Used/Day</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-white px-4 py-24 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
          KarunaadaCafe - Untold Story
        </h2>
        <p className="mt-4 max-w-4xl text-center">
          {'"'}I remember the initial days of KarunaadaCafe where each new
          customer brought\n tons of joy and smiles to me and other team members
          {"'"} faces. And when\n someone praises our tasty chai, use of kulhad,
          and the unique interior\n of our stores, KarunaadaCafe team always
          want their inside energy to embed and\n create the same noise. Now, I
          love to hear stories from different\n corners of the world.{'"'} -
          Anubhav Dubey
        </p>
        <Image
          src="/placeholder.png"
          alt="KarunaadaCafe Story"
          width={1920}
          height={1080}
          className="mt-8 w-full max-w-4xl rounded-lg shadow-xl shadow-black/[0.05]"
        />
        <Button
          size={"lg"}
          className="mt-16 h-14 bg-[#8a4809] text-xl text-white"
        >
          Know More!
        </Button>
      </section>
      <section className="flex flex-col items-center bg-gray-100 px-4 py-24 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
          Become a Chai Tycoon
        </h2>
        <h3 className="mt-4 text-2xl font-bold tracking-tight lg:text-3xl xl:text-4xl">
          Why Choose Us?
        </h3>
        <p className="mt-4 max-w-4xl text-center">
          The vision of KarunaadaCafe (KarunaadaCafe) is to deliver our unique
          cultural blended tea flavors to each corner of the world. We have
          served 7 years and have achieved the following milestones: 550+
          franchise outlets, 320+ cities, 4.5 lakh kulhad chai/day, and 1465
          liters of milk/day. KarunaadaCafe is growing at a rapid pace with
          impeccable growth strategy. Join us to become a part of the family
          that is ever-growing. Partner with the most trusted brand in the
          industry.
        </p>
        <Image
          src="/placeholder.png"
          alt="Become a Chai Tycoon"
          width={1920}
          height={1080}
          className="mt-8 w-full max-w-4xl rounded-lg shadow-xl shadow-black/[0.05]"
        />
      </section>
      <section className="bg-[#8a4809] px-4 py-24 lg:px-8">
        <h2 className="text-center text-center text-3xl font-extrabold tracking-tighter text-white md:text-4xl lg:text-5xl xl:text-6xl">
          Our Stories
        </h2>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-64 rounded bg-white p-4">
            <Image
              width={1920}
              height={1080}
              src="/placeholder.png"
              alt="Story 1"
              className="w-full"
            />
            <p className="mt-4 text-center">Story 1</p>
          </div>
          <div className="w-64 rounded bg-white p-4">
            <Image
              width={1920}
              height={1080}
              src="/placeholder.png"
              alt="Story 2"
              className="w-full"
            />
            <p className="mt-4 text-center">Story 2</p>
          </div>
          <div className="w-64 rounded bg-white p-4">
            <Image
              width={1920}
              height={1080}
              src="/placeholder.png"
              alt="Story 3"
              className="w-full"
            />
            <p className="mt-4 text-center">Story 3</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-gray-100 px-4 py-24 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
          Request A Free Franchise Consultation
        </h2>
        <Button
          size={"lg"}
          className="mt-16 h-14 w-full max-w-xs bg-[#8a4809] text-xl text-white"
        >
          Apply Now
        </Button>
      </section>
      <footer className="bg-black px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={100}
            className="mb-8 h-20 w-auto"
          />
          <div className="flex flex-col items-start justify-start gap-8 text-white lg:flex-row lg:gap-16">
            <div className="max-w-lg text-balance text-white/80">
              <h3 className="mb-4 text-xl font-extrabold tracking-tight text-white lg:text-2xl">
                Head Office
              </h3>
              <p>KarunaadaCafe & Rapidly Growing Tea-Chain</p>
              <p>
                2019 by Two Young & Passionate Entrepreneurs - Anubhav Dubey &
                Anand Nayak
              </p>
              <br />
              <p>
                1st Floor, Rishikesh Complex, PU 3, Commercial Scheme No. 54,
                Opposite C21 Mall, Indore, MP
              </p>
              <br />
              <Link
                target="_blank"
                rel="norefferer noopener"
                className="transition-all duration-300 ease-in-out hover:text-primary"
                href={"tel:+916262300313"}
              >
                +91 6262 300 313
              </Link>
              <br />
              <Link
                target="_blank"
                rel="norefferer noopener"
                className="transition-all duration-300 ease-in-out hover:text-primary"
                href={"mailto:info@chaisuttabarindia.com"}
              >
                info@chaisuttabarindia.com
              </Link>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="text-xl font-extrabold tracking-tight lg:text-2xl">
                Quick Links
              </h3>
              <div className="flex flex-col items-start justify-start gap-2 text-white/80">
                <Link
                  href={"#"}
                  className="transition-all duration-300 ease-in-out hover:text-primary"
                >
                  Contact
                </Link>
                <Link
                  href={"#"}
                  className="transition-all duration-300 ease-in-out hover:text-primary"
                >
                  Franchise
                </Link>
                <Link
                  href={"#"}
                  className="transition-all duration-300 ease-in-out hover:text-primary"
                >
                  Careers
                </Link>
                <Link
                  href={"#"}
                  className="transition-all duration-300 ease-in-out hover:text-primary"
                >
                  Gallery
                </Link>
                <Link
                  href={"#"}
                  className="transition-all duration-300 ease-in-out hover:text-primary"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-start space-x-4 text-white/80">
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tight lg:text-3xl xl:text-4xl"
            >
              <FacebookIcon className="size-6 transition-all duration-300 ease-in-out hover:text-primary" />
            </a>
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tight lg:text-3xl xl:text-4xl"
            >
              <TwitterIcon className="size-6 transition-all duration-300 ease-in-out hover:text-primary" />
            </a>
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tight lg:text-3xl xl:text-4xl"
            >
              <InstagramIcon className="size-6 transition-all duration-300 ease-in-out hover:text-primary" />
            </a>
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tight lg:text-3xl xl:text-4xl"
            >
              <YoutubeIcon className="size-6 transition-all duration-300 ease-in-out hover:text-primary" />
            </a>
          </div>
          <p className="mt-8 text-left text-white">
            © 2024 KarunaadaCafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
