import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col overflow-auto mt-5 pb-5">
      <div className="flex justify-between items-start">
        <div className="font-semibold text-heading-3">[J.Lim]</div>
        <NavBar />
      </div>

      <h1 className="text-title font-bold mt-[-52px] leading-none">
        <span>HELLO, I'M</span>
        <br />
        <span className="pl-60">JOSHUA LIM.</span>
      </h1>

      <div className="flex pt-5">
        <Image
          src="/images/My1.png"
          width={350}
          height={350}
          alt="Picture of the author"
          className="rounded-xl grayscale"
        />

        <div className="w-1/3 h-48 mx-auto mr-72">
          <h2 className="text-works-title font-bold">
            A FullStack Web Developer skilled in all aspects of web development, covering frontend,
            backend, and database management.
          </h2>
        </div>
      </div>
      <div className="flex ">
        <div className="mx-auto">
          40°42'12.5"N, 73°59'22.4"W <br />
          Brooklyn,New York
        </div>
        <div>( SCROLL FOR MORE ↓ )</div>
      </div>
    </section>
  );
}
