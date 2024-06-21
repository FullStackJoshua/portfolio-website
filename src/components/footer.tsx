import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div className="bg-gray-300 mx-auto flex flex-wrap justify-between">
      <div className="flex flex-col">
        <a href="mailto:Joshualim5131@gmail.com" className="mb-2">
          Joshualim5131@gmail.com
        </a>
        <span className="mt-auto font-semibold">@DevWorks</span>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex space-x-4 mb-2">
          <div className="bg-secondary flex items-center justify-center rounded-lg p-2">
            <a href="https://github.com/FullStackJoshua" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare size={30} />
            </a>
          </div>
          <div className="bg-secondary flex items-center justify-center rounded-lg p-2">
            <a
              href="https://www.linkedin.com/in/fullstackjoshua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
          <div className="bg-secondary flex items-center justify-center rounded-lg p-2">
            <a href="https://techpediablogs.com/" target="_blank" rel="noopener noreferrer">
              <FaLaptopCode size={30} />
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-1 mt-auto">
          <FaRegCopyright size={20} />
          <span>2024 Joshua Lim</span>
        </div>
        <span>All Rights Reserved</span>
      </div>
    </div>
  );
}
