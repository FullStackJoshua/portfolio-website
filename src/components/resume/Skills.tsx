import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCsharp,
  SiPhp,
  SiVisualstudiocode,
  SiTailwindcss,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const Skills: React.FC = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
      <div className="flex flex-nowrap justify-center gap-4 overflow-x-auto">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-60">
          <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
          <p>
            <FaHtml5 /> HTML/CSS/JS
          </p>
          <p>
            <FaJava /> Java
          </p>
          <p>
            <FaPython /> Python
          </p>
          <p>
            <SiTypescript /> TypeScript
          </p>
          <p>
            <SiCsharp /> C#
          </p>
          <p>
            <SiPhp /> PHP
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-60">
          <h3 className="text-xl font-semibold mb-2">
            Technologies/
            <br />
            Frameworks
          </h3>
          <p>
            <SiVisualstudiocode /> Visual Studio Code
          </p>
          <p>
            <FaCode /> Apache NetBeans
          </p>
          <p>
            <FaReact /> React, Next.js
          </p>
          <p>
            <SiTailwindcss /> Tailwind CSS
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-60">
          <h3 className="text-xl font-semibold mb-2">Tools</h3>
          <p>
            <FaGitAlt /> Git
          </p>
          <p>
            <FaGithub /> GitHub
          </p>
          <p>
            <SiPostman /> Postman
          </p>
          <p>
            <FaDatabase /> SQL Server Management Studio, MySQL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
