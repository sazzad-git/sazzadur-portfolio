import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sazzad-git" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sazzadurrahman-in/" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "https://x.com/Sazzadur0" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
