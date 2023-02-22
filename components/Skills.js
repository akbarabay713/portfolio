import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import Logo from "./logo";
const Skills = ({ skills }) => {
  return (
    <div className="h-screen relative text-center flex flex-col mx-auto  items-center justify-evenly snap-center">
      <motion.h3
        initial={{
          y: 100,
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
        Skills
      </motion.h3>
      <div className="h-screen w-screen flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10 md:gap-28 pt-24">
        <div className="md:w-4/12 w-screen max-h-max flex flex-wrap gap-2 md:gap-12  box-border justify-center items-center">
          {skills?.map((skill) => (
            <Logo
              width={20}
              key={skill._id}
              image={urlFor(skill.imageUrl).url()}
            />
          ))}
        </div>
        {/* <div className=" md:w-4/12 w-11/12 h-40">
          <div className="flex items-center justify-center px-0 md:px-5 gap-10">
            <h1 className="font-semibold text-white">2021</h1>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-white">IT Staff - Internship</p>
              <p className="text-xs text-gray-300">
                Dinas Pekerjaan Umum Kota palu
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-0 md:px-5 gap-10">
            <h1 className="font-semibold text-white">2022</h1>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-white">Freeleancer</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
