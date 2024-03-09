import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiWhatsappLine,
} from "react-icons/ri";

const socialLinks = [
  { icon: <RiInstagramLine />, path: "/" },
  { icon: <RiFacebookLine />, path: "/" },
  { icon: <RiGithubLine />, path: "/" },
  { icon: <RiWhatsappLine />, path: "/" },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className="hover:text-accent transition-all duration-300"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
