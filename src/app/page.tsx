import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <main className="main">
      <div
        className="container">
        <div className="content">
          <h1>
          Web Development <br />
            <span>
             {" "} 
             With A Smile
            </span>
          </h1>
          <p>
          Hello Everyone! I am Saad, a web developer and video editor. I specialize in creating engaging and user-friendly websites.
          </p>
          <div className="link-box">
            <Link
              href="/my-skills"
              className="link-1"
            >
              Learn more
            </Link>

            <Link
              href="/my-projects"
              className="link-2"
            >
              <h1/>
              My projects
            </Link>

            <Link
              href="/my-contact"
              className="link-3"
            >
              <h1/>
              Contact me
            </Link>
          </div>
        </div>
      </div>
      <div className="link-box2">
        <Link
          href="/my-skills"
          className="link-1"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="link-2"
        >
          My projects
        </Link>

        <Link
          href="/my-contact"
          className="link-3"
        >
          Contact me
        </Link>
      </div>

      <div className="img-box">
        <Image
          src="/img/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
        />
      </div>
      <div className="img-box2">
        <Image
          alt="trees"
          src="/img/trees.webp"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        alt="stars"
        src="/img/stars.png"
        width={2000}
        height={2000}
        className="absolute top-10 left-0 z-[3]"
      />
    </main>
  );
};

export default page;
