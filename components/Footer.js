import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="text-center flex items-center justify-center">
      <Link href="#hero">
        <Image
          alt="image"
          src="/photo1.jpg"
          className="w-7 h-7 shrink-0 rounded-full mx-auto object-cover fixed bottom-5"
          width="50"
          height="50"
        />
      </Link>
    </footer>
  );
};

export default Footer;
