import React from "react";
import Marquee from "react-fast-marquee";
interface Technology {
  name: string;
  color: string;
}

const MarqueeEffect: React.FC = () => {
  const technologies1: Technology[] = [
    { name: "HTML", color: "text-orange-700" },
    { name: "CSS", color: "text-sky-500" },
    { name: "JavaScript", color: "text-yellow-500" },
    { name: "Python", color: "text-green-500" },
    { name: "TypeScript", color: "text-blue-500" },
    { name: "SQL", color: "text-purple-500" },
    { name: "Java", color: "text-red-500" },
    { name: "React", color: "text-sky-500" },
    { name: "Tailwind", color: "text-purple-700" },
  ];
  const technologies2: Technology[] = [
    { name: "Next", color: "text-orange-700" },
    { name: "Vite", color: "text-sky-400" },
    { name: "Git", color: "text-neutral-500" },
    { name: "GitHub", color: "text-orange-500" },
    { name: "VS Code", color: "text-neutral-500" },
    { name: "Postman", color: "text-green-400" },
    { name: "MySQL", color: "text-blue-500" },
    { name: "MongoDB", color: "text-green-400" },
    { name: "MSSQL", color: "text-yellow-500" },
  ];

  const renderMarqueeItem = (tech: Technology) => (
    <div
      className={`bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer ${tech.color}`}
    >
      {tech.name}
    </div>
  );

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className=" w-full flex flex-col">
        <div className="flex space-y-2 flex-col text-center">
          <span className="text-5xl font-bold">Skills that I have</span>
          <span className="text-2xl">These are the technologies I've worked with</span>
        </div>
        <Marquee autoFill pauseOnHover>
          {technologies1.map(renderMarqueeItem)}
        </Marquee>
        <Marquee autoFill pauseOnHover direction="right">
          {technologies2.map(renderMarqueeItem)}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeEffect;
