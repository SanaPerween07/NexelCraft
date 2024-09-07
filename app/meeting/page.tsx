"use client";
import Calendly from "./calendly";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import {Link as ScrollLink , Element} from "react-scroll";
import { CoolMode } from "@/components/magicui/cool-mode";


const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {
  return (
    <div className="flex flex-col  w-full overflow-clip inset-0 -z-10 bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
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
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10   ">Let&apos;s Meet</h1>
          <p className="text-lg text-gray-500 py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>

          {[
                {
                  title: "Development + Design",
                  description:
                    "Turn your ideas into reality with our development and design services.",
                },

                {
                  title: "Free Consultation",
                  description:
                    "Get expert advice on how to improve your business and increase your online presence.",
                },
                {
                  title: "Technical Support",
                  description:
                    "Get technical support for your website or application.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-700">
                      {item.title}
                    </h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
        </div>

        <div className="md:w-1/2">
          <Calendly />
        </div>
      </div>
    </div>
  );
};

export default Meeting;