import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { EyeIcon } from "@heroicons/react/24/outline";
import Logo from "./logo";
import { urlFor } from "../sanity";
import Link from "next/link";

const Projects = ({ projects }) => {
  return (
    <div className="h-screen relative text-center flex flex-col mx-auto  items-center justify-evenly snap-center">
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
        projects
      </motion.h3>
      <div className="w-full relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thumb-green-600 scrollbar-track-zinc-800 scrollbar-thin">
        {projects.map((project, i) => (
          <motion.div
            key={project._id}
            className="w-screen h-screen  flex flex-shrink-0 flex-col items-center justify-center space-y-2 snap-center py-8 md:p-44"
          >
            <div className="flex items-center justify-center gap-x-10">
              <Link href={project.linkProject}>
                <EyeIcon className="h-8 w-8 text-[gray] cursor-pointer  " />
              </Link>

              <SocialIcon
                network="github"
                url={project.linkGithub}
                bgColor="transparent"
                fgColor="gray"
                style={{ cursor: "pointer" }}
              />
            </div>

            <motion.img
              initial={{ y: -50, opacity: 0.5, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              alt="image"
              src={urlFor(project.imgUrl).url()}
              className=" h-32 md:h-52 lg:64"
            />
            <h1 className="text-white font-semibold text-xl">
              Personal project ({`${i + 1}`}/{`${projects.length}`}) :
              {project.project}
            </h1>
            <div className="flex justify-center items-center gap-5 box-border">
              {project.tech.map((t) => (
                <img
                  key={t._id}
                  alt="icon"
                  src={urlFor(t.imageUrl).url()}
                  className={`w-7 h-7 object-contain`}
                />
              ))}
            </div>
            <p className="text-white font-light w-full">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
