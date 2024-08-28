"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FacebookIcon, Instagram, InstagramIcon, Linkedin } from "lucide-react"
import { RxHamburgerMenu } from "react-icons/rx"

import { Button } from "./ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer"

const coords_locations = [
  { left: 200, top: 120 }, // Yadgiri
  { left: 80, top: 270 }, // Haveri
  { left: 180, top: 320 }, // Chitradurga
  { left: 250, top: 440 }, // Bangalore Urban
  { left: 230, top: 400 }, // Bangalore Rural
]

shuffleArray(coords_locations)

const plans = [
  {
    name: "Classic Plan",
    price: "₹99,000",
    features: [
      "Karunaada special tea powder kit (9 varieties of tea powder)",
      "Tea preparation vessel and 3feet stove",
      "5 days training for 2 members",
      "Brass tea kettle 6ltr and mini burner",
      "1 box tea glass cup (100pc)",
      "2 t-shirts",
      "Shop setup plan",
      "Franchise fees",
      "10 users included",
      "2GB of storage",
      "Email support",
      "Help center access",
    ],
  },
  {
    name: "Platinum Plan",
    price: "₹4,49,000",
    features: [
      "Karunaada special tea powder kit (9 varieties tea powder)",
      "5 kg coffee powder",
      "6 t-shirts",
      "5 days training for 4 members",
      "3D name board (3*10)",
      "3D logo and menu",
      "Branded double door fridge",
      "Oven, french fries machine double, Sujatha mixer",
      "Coffee filter machine",
      "Canopy",
      "Shop setup up to 150 area square meter",
      "PVC for wall and for seal wall",
      "Stainless steel tea counter with milk hot case with electric and burner (2*3)",
      "Stainless steel Biscuit display counter with hot case (2*3)",
      "Stainless steel pickup counter with two shelf",
      "Tea kettle and one mini burner",
      "Tea preparation brass vessel and 3 feet single burner",
      "Kitchen items",
      "Stainless steel square tea cup stand",
      "1 box tea glass cups (144pc)",
      "Packing material",
      "Sitting stool (10pc)",
      "Sitting 4 seater 2 table",
      "Water purifier",
      "Electric stove",
      "Government certified certificate",
      "20 users included",
      "5GB of storage",
      "Email support",
      "Help center access",
      "Phone support",
      "Community access",
    ],
  },
]

const outlets = [
  { name: "Haveri", number: 1 },
  {
    name: "Chitradurga",
    number: 1,
  },
  {
    name: "Yadgiri",
    number: 1,
  },
  {
    name: "Bangalore Urban",
    number: 9,
  },
  {
    name: "Bangalore Rural",
    number: 1,
  },
]

const scaleUpVariants = {
  initial: {
    opacity: 0,
    transform: "scale(0)",
    transformOrigin: "bottom",
  },
  animate: (index: number) => ({
    opacity: 1,

    transform: "scale(1)",
    transformOrigin: "bottom",
    transition: {
      ease: "circInOut",
      delay: 0.07 * index,
    },
  }),
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default function LandingPage() {
  return (
    <div className="w-full">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background/90 p-4 shadow-xl shadow-black/[0.01] backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-row justify-between">
          <div className="flex w-full items-center justify-between space-x-16">
            <Image
              draggable={false}
              src="/logo.png"
              alt="Logo"
              width={300}
              height={100}
              className="h-20 w-auto"
            />
            <nav className="hidden space-x-6 lg:flex">
              <a href="#home" className="text-lg font-semibold">
                Home
              </a>
              <a href="#about" className="text-lg">
                About Us
              </a>
              <a href="#menu" className="text-lg">
                Menu
              </a>
              <a href="#franchise" className="text-lg">
                Franchise
              </a>
              <a href="#story" className="text-lg">
                Our Story
              </a>
              <a href="#gallery" className="text-lg">
                Gallery
              </a>
              <a href="#blog" className="text-lg">
                Blog
              </a>
              <a href="#plans" className="text-lg">
                Plans
              </a>
              <a href="#contact" className="text-lg">
                Contact Us
              </a>
            </nav>
          </div>
          <Drawer direction="top">
            <DrawerTrigger className="block lg:hidden">
              <Button
                size={"icon"}
                variant="ghost"
                className="grpup flex items-center gap-2 hover:bg-[#da2a1c]"
              >
                <RxHamburgerMenu className="size-5 group-hover:text-white" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <Image
                  draggable={false}
                  src="/logo.png"
                  alt="Logo"
                  className="size-24 select-none"
                  width={230}
                  height={50}
                />
              </DrawerHeader>
              <DrawerDescription className="p-4">
                <ul className="flex flex-col gap-2">
                  <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                    <Link className="w-fit" href="#home">
                      Home
                    </Link>
                  </li>
                  <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                    <Link className="w-fit" href="#about">
                      About Us
                    </Link>
                  </li>
                  <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                    <Link className="w-fit" href="#menu">
                      Menu
                    </Link>
                  </li>
                  <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                    <Link className="w-fit" href="#franchise">
                      Franchise
                    </Link>
                  </li>
                  <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                    <Link className="w-fit" href="#story">
                      Our Story
                    </Link>
                  </li>
                  <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                    <Link className="w-fit" href="#gallery">
                      Gallery
                    </Link>
                  </li>
                  <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                    <Link className="w-fit" href="#blog">
                      Blog
                    </Link>
                  </li>
                  <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                    <Link className="w-fit" href="#plans">
                      Plans
                    </Link>
                  </li>
                  <li className="w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary">
                    <Link className="w-fit" href="#contact">
                      Contact Us
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
                        className="!size-10 rounded-full bg-[#da2a1c] transition-all duration-300 ease-in-out hover:bg-[#da2a1c]/90"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href={"#"} target="_blank" rel="noreferrer noopener">
                      <Button
                        size={"icon"}
                        className="!size-10 rounded-full bg-[#da2a1c] transition-all duration-300 ease-in-out hover:bg-[#da2a1c]/90"
                      >
                        <Instagram className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </DrawerDescription>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
      <section
        id="home"
        className="flex w-full flex-col items-center justify-center gap-6 bg-gray-50 px-4 py-24 md:gap-12 lg:gap-16 lg:px-8 xl:flex-row xl:gap-24"
      >
        <div className="flex w-fit flex-col items-start justify-start gap-4">
          <h1 className=" text-left text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl">
            Serving In:
          </h1>
          <div className="flex flex-col items-start justify-start gap-4">
            {outlets.map((outlet, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start gap-2"
              >
                <h2 className="text-balance text-2xl font-extrabold tracking-tighter lg:text-3xl xl:block">
                  {outlet.name}
                </h2>
                <h2 className="text-balance text-xl font-bold tracking-tighter lg:text-2xl xl:block">
                  {outlet.number} {outlet.number > 1 ? "Outlets" : "Outlet"}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="w-fit scale-[90%] sm:scale-100">
          <div className="relative mt-8">
            <Image
              draggable={false}
              src="/karnataka.svg"
              width={1000}
              height={3000}
              alt="Map"
              className="w-full max-w-sm select-none"
            />
            <div className="sm:left- absolute inset-0 -left-8 scale-[80%] sm:scale-100">
              {coords_locations.map(({ left, top }, index) => {
                return (
                  <motion.img
                    custom={index}
                    variants={scaleUpVariants}
                    transition={{ ease: "circInOut" }}
                    whileInView="animate"
                    viewport={{ once: true }}
                    initial="initial"
                    key={index}
                    src="/pin2.svg"
                    alt="Pin"
                    width={100}
                    // height={100}
                    style={{ left, top }}
                    className={`absolute inset-0 z-10 size-12 select-none sm:size-16 sm:left-[${left}px] sm:top-[${top}px] left-[${left - 80}px] top-[${top - 80}px]`}
                    draggable={false}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col items-center bg-white px-4 py-24 lg:px-8"
      >
        <h2 className="text-balance text-center text-3xl font-extrabold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
          Welcome To KarunaadaCafe
        </h2>
        <h3 className="mt-4 text-2xl font-bold tracking-tight lg:text-3xl xl:text-4xl">
          Brewing Karnataka&apos;s Heritage
        </h3>
        <p className="mt-4 max-w-4xl text-center">
          Step into Karunaada Cafe, where the rich legacy of Karnataka&apos;s
          coffee culture dances harmoniously with the comforting embrace of
          chai. Here, every cup is a celebration of tradition and taste, brewed
          to perfection and served with a touch of Southern warmth. Whether
          you&apos;re in the mood for the bold notes of our filter coffee or the
          soothing spices of our masala chai, we&apos;ve got the perfect blend
          to elevate your day. Pair your drink with our deliciously curated
          snacks, inspired by the vibrant flavors of Karnataka.
        </p>
        <img
          draggable={false}
          src="https://images.pexels.com/photos/229493/pexels-photo-229493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Cuddle The Kulhad"
          width={1920}
          height={1080}
          className="mt-8 w-full max-w-4xl select-none rounded-lg shadow-xl shadow-black/[0.05]"
        />
        <Button size={"lg"} className=" mt-8 h-14 bg-black text-xl text-white">
          Read Our Story
        </Button>
      </section>
      <section id="gallery" className="bg-[#da2a1c] px-4 py-24 lg:px-8">
        <h2 className="text-balance text-center text-center text-3xl font-extrabold tracking-tighter text-white md:text-4xl lg:text-5xl xl:text-6xl">
          Sip, Savor, Share
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-white/90">
          Take a glimpse into the Karunaada Cafe experience. Our gallery
          showcases the vibrant atmosphere of our café, where coffee and chai
          lovers come together. Whether in the bustling streets of Bengaluru or
          the serene corners of Mysuru, Karunaada Cafe is the place where
          memories are brewed.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="w-full rounded bg-white p-4 sm:w-96">
            <img
              draggable={false}
              width={1920}
              height={1080}
              src="https://st4.depositphotos.com/13349494/25104/i/450/depositphotos_251043176-stock-photo-selective-focus-laptop-blank-screen.jpg"
              alt="News 1"
              className="w-full select-none"
            />
            <p className="mt-4 text-center">News 1</p>
          </div>
          <div className="w-full rounded bg-white p-4 sm:w-96">
            <img
              draggable={false}
              width={1920}
              height={1080}
              src="https://st4.depositphotos.com/13349494/25104/i/450/depositphotos_251043176-stock-photo-selective-focus-laptop-blank-screen.jpg"
              alt="News 2"
              className="w-full select-none"
            />
            <p className="mt-4 text-center">News 2</p>
          </div>
          <div className="w-full rounded bg-white p-4 sm:w-96">
            <img
              draggable={false}
              width={1920}
              height={1080}
              src="https://st4.depositphotos.com/13349494/25104/i/450/depositphotos_251043176-stock-photo-selective-focus-laptop-blank-screen.jpg"
              alt="News 3"
              className="w-full select-none"
            />
            <p className="mt-4 text-center">News 3</p>
          </div>
        </div>
      </section>
      <section
        id="menu"
        className="flex flex-col items-center bg-black px-4 py-24 lg:px-8"
      >
        <h2 className="text-balance  text-center text-3xl font-extrabold tracking-tighter text-white md:text-4xl lg:text-5xl xl:text-6xl">
          Brewed to Perfection, Served with Love
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-white/90">
          Explore our diverse menu that caters to every taste. From the robust
          flavors of South Indian filter coffee to the soothing warmth of our
          chai, each cup is brewed with care. Complement your drink with our
          selection of snacks, inspired by the rich culinary heritage of
          Karnataka
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-8 ">
          <div className="bg-white/10 py-2">
            <Image
              draggable={false}
              src="/menu-english.jpg"
              alt="Menu"
              width={400}
              height={400}
              className="h-auto w-full select-none lg:max-w-[1000px]"
            />
            <figcaption className="mt-2 text-center text-base text-white/90">
              Karunaada Cafe Menu in English
            </figcaption>
          </div>
          <div className="bg-white/10 py-2">
            <Image
              draggable={false}
              src="/menu.jpg"
              alt="Menu"
              width={400}
              height={400}
              className="h-auto w-full select-none lg:max-w-[1000px]"
            />
            <figcaption className="mt-2 text-center text-base text-white/90">
              Karunaada Cafe Menu in Kannada
            </figcaption>
          </div>
        </div>
      </section>
      <section
        id="story"
        className="flex flex-col items-center bg-white px-4 py-24 lg:px-8"
      >
        <h2 className="text-balance text-center text-3xl font-extrabold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
          From Coffee Hearts to Chai Souls
        </h2>
        <p className="mt-4 max-w-4xl text-center">
          Karunaada Cafe was born out of a passion for creating a space where
          coffee and chai lovers can unite. Starting in the heart of Karnataka,
          where coffee reigns supreme, we&apos;ve expanded our menu to include
          chai that&apos;s just as comforting and flavorful. Our journey is
          about bridging the gap between these two beloved beverages and
          offering a place where everyone feels at home.
        </p>
        <img
          draggable={false}
          src="https://images.pexels.com/photos/2422700/pexels-photo-2422700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="KarunaadaCafe Story"
          width={1920}
          height={1080}
          className="mt-8 w-full max-w-4xl select-none rounded-lg shadow-xl shadow-black/[0.05]"
        />
        <Button
          size={"lg"}
          className="mt-16 h-14 bg-[#da2a1c] text-xl text-white"
        >
          Know More!
        </Button>
      </section>
      <section
        id="franchise"
        className="flex flex-col items-center bg-gray-100 px-4 py-24 lg:px-8"
      >
        <h2 className="text-balance text-center text-3xl font-extrabold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
          Serve Karnataka&apos;s Favorite Brews
        </h2>
        <p className="mt-4 max-w-4xl text-center">
          Join the Karunaada Cafe family and bring the best of coffee and chai
          to your community. Our franchise model offers the support you need to
          create a thriving café that celebrates Karnataka&apos;s dual love for
          these beverages. Be part of a growing network that&apos;s redefining
          café culture in the South.
        </p>
        <img
          draggable={false}
          src="https://images.pexels.com/photos/7125769/pexels-photo-7125769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Become a Chai Tycoon"
          width={1920}
          height={1080}
          className="mt-8 w-full max-w-4xl select-none rounded-lg shadow-xl shadow-black/[0.05]"
        />
      </section>
      <section id="blog" className="bg-[#da2a1c] px-4 py-24 lg:px-8">
        <h2 className="text-balance text-center text-center text-3xl font-extrabold tracking-tighter text-white md:text-4xl lg:text-5xl xl:text-6xl">
          Brewing Stories, One Sip at a Time
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-white/90">
          Discover the stories behind your favorite brews on our blog. From the
          art of making the perfect filter coffee to the cultural nuances of
          chai in Karnataka, our blog offers insights, tips, and trends for tea
          and coffee lovers alike.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="w-full rounded bg-white p-4 sm:w-96">
            <img
              draggable={false}
              width={1920}
              height={1080}
              src="https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg"
              alt="Story 1"
              className="w-full select-none"
            />
            <p className="mt-4 text-center">Story 1</p>
          </div>
          <div className="w-full rounded bg-white p-4 sm:w-96">
            <img
              draggable={false}
              width={1920}
              height={1080}
              src="https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg"
              alt="Story 2"
              className="w-full select-none"
            />
            <p className="mt-4 text-center">Story 2</p>
          </div>
          <div className="w-full rounded bg-white p-4 sm:w-96">
            <img
              draggable={false}
              width={1920}
              height={1080}
              src="https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg"
              alt="Story 3"
              className="w-full select-none"
            />
            <p className="mt-4 text-center">Story 3</p>
          </div>
        </div>
      </section>
      <section
        id="plans"
        className="flex flex-col items-center bg-gray-100 px-4 py-24 lg:px-8"
      >
        <h2 className="text-balance text-center text-3xl font-extrabold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
          Get Started Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-center text-foreground/80">
          Become a franchise member and enjoy the benefits of our plan options.
        </p>
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-start md:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border-2 ${index === 1 ? "border-red-600 ring-1 ring-red-600 sm:order-last" : "border-gray-300"} p-6 shadow-sm sm:px-8 lg:p-12`}
              >
                <div className="text-center">
                  <h2 className="text-lg font-medium text-gray-900">
                    {plan.name}
                    <span className="sr-only">Plan</span>
                  </h2>
                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                      {plan.price}
                    </strong>
                  </p>
                </div>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 min-h-5 min-w-5 text-red-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col items-center bg-gray-200/50 px-4 py-24 lg:px-8"
      >
        <h2 className="text-balance text-center text-3xl font-extrabold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
          Let&apos;s Brew a Connection
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-foreground/80">
          We&apos;d love to hear from you! Whether you&apos;re curious about our
          menu, interested in franchise opportunities, or just want to chat
          about your favorite brew, we&apos;re here to help. Visit us at our
          Bengaluru café or reach out online. Together, let&apos;s create
          something special.
        </p>
      </section>
      <footer className="bg-black px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Image
            draggable={false}
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
              <p>
                Bus Stop 11,7th Cross,Rukmini Nagara, Main Road, near SAROJINI
                HEALTH CARE, near Bangalore, Nellagadaranahalli, HMT Layout,
                Karnataka 560073
              </p>
              <br />
              <Link
                target="_blank"
                rel="norefferer noopener"
                className="underline transition-all duration-300 ease-in-out hover:text-primary"
                href={"tel:+916360713172"}
              >
                +91 63607 13172
              </Link>
              <br />
              <Link
                target="_blank"
                rel="norefferer noopener"
                className="underline transition-all duration-300 ease-in-out hover:text-primary"
                href={"mailto:karunaadacafe@gmail.com"}
              >
                karunaadacafe@gmail.com
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
              href="https://www.facebook.com/profile.php?id=61557876203954&mibextid=ZbWKwL"
              target="_blank"
              className="text-2xl font-extrabold tracking-tight lg:text-3xl xl:text-4xl"
            >
              <FacebookIcon className="size-6 transition-all duration-300 ease-in-out hover:text-primary" />
            </a>
            <a
              href="https://www.instagram.com/karunaada_cafe_?igsh=bGExZTA5djZqbW9h"
              target="_blank"
              className="text-2xl font-extrabold tracking-tight lg:text-3xl xl:text-4xl"
            >
              <InstagramIcon className="size-6 transition-all duration-300 ease-in-out hover:text-primary" />
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
