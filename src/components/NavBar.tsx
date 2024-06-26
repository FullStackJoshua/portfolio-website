import React from "react";
import { Button } from "@/components/ui/button";

interface MyButtonProps {
  children: React.ReactNode;
  href: string;
  target?: string;
}

export const MyButton: React.FC<MyButtonProps> = ({ children, href, target }) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    className="mb-1"
  >
    <Button size="lg" variant={"link"}>
      {children}
    </Button>
  </a>
);

const NavBar: React.FC = () => (
  <nav className="flex flex-col relative z-50">
    <MyButton href="#about-me">About</MyButton>
    <MyButton href="#projects">Projects</MyButton>
    <MyButton href="https://techpediablogs.com/" target="_blank">
      Blog
    </MyButton>
    <MyButton href="#contact">Let's Talk</MyButton>
  </nav>
);

export default NavBar;
