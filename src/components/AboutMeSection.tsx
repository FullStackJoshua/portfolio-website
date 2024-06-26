"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import TypewriterEffect from "../client/TypewriterEffect.client";
import MarqueeEffect from "./ui/MarqueeEffect";

export default function AboutMeSection() {
  const links = [
    { href: "https://www.linkedin.com/in/fullstackjoshua/", src: "/linkedin.svg", alt: "LinkedIn" },
    { href: "https://github.com/FullStackJoshua", src: "/github.svg", alt: "GitHub" },
    { href: "https://techpediablogs.com/", src: "/blog.svg", alt: "Blog" },
  ];

  return (
    <section id="about-me" className="grid h-screen w-full grid-cols-12 grid-rows-6 gap-10 px-4">
      <div className="col-span-9 row-span-1 flex flex-col text-center text-8xl font-semibold mt-5">
        About Me
      </div>
      <div className="col-span-9 row-span-3 rounded-3xl bg-secondary flex flex-col p-5">
        <h1>
          <span className="text-8xl italic">Joshua Lim</span>
          <br />
          <span className="text-3xl italic tracking-tight">(noun)- </span>
          <span className="text-4xl">
            A Full Stack Developer.
            <br />
            Someone that turns Coffee into Code.
            <br />A person who loves <TypewriterEffect />
          </span>
          <div className="inline-block w-0.5 h-7 bg-black mx-0.5 animate-blink"></div>
        </h1>
        <h1 className="text-2xl">
          Passionate and innovative software developer, dedicated to bringing your digital visions
          to life. Throughout my developer journey I've built a strong foundation in object-oriented
          programming, system design, database-driven application development, project management,
          and expertise in the Web Development, among other vital areas.
        </h1>
      </div>
      <div className="col-span-6 row-span-2 rounded-3xl bg-secondary flex flex-col p-5">
        <MarqueeEffect />
      </div>

      <div className="col-span-3 row-span-2 rounded-3xl  flex flex-col mb-8 ">
        <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-1 rounded-3xl text-7xl font-bold">
            <span>LIN</span>
            <br />
            <span>KS:</span>
          </div>
          {links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 row-span-1 rounded-3xl bg-secondary flex items-center justify-center"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Image src={link.src} alt={link.alt} width={100} height={100} priority />
                </Button>
              </a>
            </div>
          ))}
          <div className="col-span-1 row-span-1 rounded-3xl bg-secondary flex items-center justify-center">
            <Link href="/resume" passHref>
              <Button variant="ghost" size="icon">
                <Image src="/cv.svg" alt="CV" width={100} height={100} priority />
              </Button>
            </Link>
          </div>
          <div className="col-span-1 row-span-1 rounded-3xl bg-secondary flex items-center justify-center">
            <a href="mailto:Joshualim5131@gmail.com">
              <Button variant="ghost" size="icon">
                <Image src="/contact.svg" alt="Contact me" width={100} height={100} priority />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
