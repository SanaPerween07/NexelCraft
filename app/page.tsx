"use client";
import { CoolMode } from "@/components/magicui/cool-mode";
import { BoxRevealDemo } from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { NumberTickerDemo } from "@/components/demos/customers";
import Image from "next/image";
import Link from "next/link";
import {Link as ScrollLink , Element} from "react-scroll";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import { DockDemo } from "@/components/demos/dock-demo";
import { PiCheckBold } from "react-icons/pi";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import BoxReveal from "@/components/ui/box-reveal";

export default function Home() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Element name="top" className="overflow-hidden rounded-[20px] top-3 sticky bg-white
        flex items-center justify-between py-6 px-4 md:px-8 mx-3 md:mx-auto z-50 xl:w-4/5 2xl;w-[50%]">

          <Link href={"/"}>
          <div>
            <Image 
              src={'/images/logo.png'}
              alt="Logo"
              width={60}
              height={60} />
              <h3 className="font-bold py-1">NexelCraft</h3>
          </div>
          </Link>

          <div className="absolute right-1/2 translate-x-1/2 transform">
            <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
              <Link href={'/projects'} className="hover:text-violet-500">
                Projects
              </Link>

              <ScrollLink to="process" smooth={true} className="hover:text-violet-500">
                Services
              </ScrollLink>
              <ScrollLink to="process" smooth={true} className="hover:text-violet-500">
                Process
              </ScrollLink>
              <ScrollLink to="process" smooth={true} className="hover:text-violet-500">
                Gaurantees
              </ScrollLink>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <CoolMode>
            <Link href={'/meeting'}> 
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-50 hover:bg-violet-400 px-3 py-1 text-md font-medium text-black backdrop-blur-3xl">
                Book A Call
              </span>
            </button>
            </Link>
            </CoolMode>
          </div>

      </Element>

          



      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-5"></div>
        <h1><CoverDemo/></h1>
      </main>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Video Editing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Strategy
              </p>
            </BoxReveal>
          </div>



      <Element name="customers">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-5">
          <h1><NumberTickerDemo/></h1>        
        </div>
      </Element>



      <Element name="banner">
        <ScrollBasedVelocityDemo/>
      </Element>

      <Element name="process">
        <main>
        <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center mt-10">
        Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get
            noticed.
          </p>
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto mt-5">
          <div className="w-full md:w-1/2 order-2 md:order-1 mr-10">
            <AnimatedBeamMultipleOutputDemo/>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
            <BoxRevealDemo />
          </div>
        </div>
        </main>
      </Element>


      <Element name="guarantess">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-8">
          <BackgroundBeamsWithCollision>
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black      dark:text-white font-sans tracking-tight">
            Our guarantees to you. {" "}

            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="text-3xl">We ensure the highest quality of work, with the fastest delivery times.</span>
              </div>

              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="text-3xl">We ensure the highest quality of work, with the fastest delivery times.</span>
              </div>
            </div>
            </h2>
          </BackgroundBeamsWithCollision>
        </div>
        <Element name="guarentees">
          <ShootingStarsAndStarsBackgroundDemo />
        </Element>
      </Element>

      <div className="top-2 bottom-0"><DockDemo/></div>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto">
        <div className="flex md:justify-center">
          © 2024 NexelCraft. All Rights Reserved. 
          <Link href="/" className="text-blue-500">
            {" "}Privacy Policy
          </Link>
        </div>
      </footer>

    </div>
    
  );
}
