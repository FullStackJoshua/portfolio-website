import React from "react";

const Header: React.FC = () => {
  return (
    <div className="text-center pb-5">
      <h1 className="text-5xl font-bold">Joshua Lim</h1>
      <p>Brooklyn, NY | (318) 658-5131</p>
      <p>
        <a href="mailto:Joshualim5131@gmail.com" className="hover:underline">
          Joshualim5131@gmail.com
        </a>
        |
        <a href="https://www.linkedin.com/in/fullstackjoshua/" className="hover:underline">
          LinkedIn
        </a>
        |
        <a href="https://github.com/FullStackJoshua" className="hover:underline">
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Header;
