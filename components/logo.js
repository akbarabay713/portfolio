import { motion } from "framer-motion";
import Image from "next/image";
const Logo = ({ width, image }) => {
  return (
    <motion.div
      initial={{
        y: -100,
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
      className={`w-${width} h-${width} flex items-center justify-center rounded-full bg-white p-2 box-border overflow-hidden hover:bg-transparent`}
    >
      <Image
        alt="icon"
        src={image}
        className={`w-20 h-20 object-contain`}
        width="100"
        height="100"
      />
    </motion.div>
  );
};

export default Logo;
