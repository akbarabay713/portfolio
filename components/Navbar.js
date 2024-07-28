import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
const Navbar = ({ isMoved, socials }) => {
  return (
    <nav className="h-14 w-full flex items-center justify-between px-5 md:px-36 lg:px-36 py-10 fixed z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={
          isMoved > 445
            ? {
                y: 620,
                x: 415,
                opacity: 1,
                scale: 1,
              }
            : {
                x: 0,
                opacity: 1,
                scale: 1,
              }
        }
        transition={{
          duration: 1.5,
        }}
      >
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            network={social.social}
            url={social.link}
            bgColor="transparent"
            fgColor="gray"
            style={{ cursor: "pointer" }}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={
          isMoved > 445
            ? {
                y: 620,
                x: -340,
                opacity: 1,
                scale: 1,
              }
            : {
                x: 0,
                opacity: 1,
                scale: 1,
              }
        }
        transition={{
          duration: 1.5,
        }}
        className="flex items-center  justify-center"
      >
        <SocialIcon
          url={"#contact"}
          network="email"
          bgColor="transparent"
          fgColor="gray"
          style={{ cursor: "pointer" }}
        />
        <a
          href="#contact"
          className="text-white hidden md:inline-block lg:inline-block"
        >
          Contact me
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
