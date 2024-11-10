import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-content ">
        <div className="nav-logo ">
          <Image
            src="/img/rounded-text.png"
            alt="Next.js Logo"
            width={50}
            height={50}
            className="md:w-full w-0 md:h-full h-0 object-contain rounded-full"
          />
        </div>
        <h1>
         <a href="/"> Web <span> Developer</span></a>
        </h1>
      </div>

      <div className="socials">
      <div><a href="https://github.com/SaadAslam58" target="_blank" rel="noopener noreferrer">
        <Image
        alt="github"
        src="/img/github1.png"
        width={40}
        height={40}
        className="img2"
        />
        </a></div> 
      <div><a href="https://www.linkedin.com/in/saad-aslam-2167a32bb/" target="_blank" rel="noopener noreferrer">
        <Image
        alt="linkdin"
        src="/img/linkdin.webp"
        width={60}
        height={60}
        className="img"
        />
        </a></div> 
      <div><a  className="are" href="https://vercel.com/saadaslam58s-projects" target="_blank" rel="noopener noreferrer">
        <Image
        alt="vercel"
        src="/img/vercel-svg.svg"
        width={40}
        height={40}
        className="img2"
        />
        </a></div> 
      </div>
    </div>
  );
};

export default Navbar;
