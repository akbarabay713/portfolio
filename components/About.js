import { motion } from "framer-motion";
import { Cursor } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import Image from "next/image";

const About = ({ pageInfo }) => {
  return (
    <div className="h-screen w-screen relative text-center flex md:flex-row flex-col items-center justify-center md:justify-center gap-10 md:gap-32 snap-center">
      <motion.h3
        initial={{
          y: 100,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="absolute top-16 lg:top-24 md:top-24 uppercase tracking-[20px] text-gray-500"
      >
        about
      </motion.h3>

      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="mt-8 md:mt-0"
      >
        <Image
          width="700"
          height="700"
          alt="image"
          src={urlFor(pageInfo.bannerImg).url()}
          className="w-24 h-24 md:w-48 md:h-80 md:rounded-lg shrink-0 rounded-full mx-auto object-cover "
        />
      </motion.div>

      <div className="px-2 md:w-[50%]">
        <h1 className="text-[#f9f9f9] font-medium text-xl md:text-3xl md:mb-8 mb-2">
          Here is a little about me
        </h1>
        <p className="text-[#979697] font-light  sm:text-xs md:text-base">
          <span>{pageInfo.description}</span>
          <Cursor cursorColor="green" />
        </p>
      </div>
    </div>
  );
};

export default About;
