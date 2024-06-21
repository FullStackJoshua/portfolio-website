import React, { useEffect, useRef } from "react";

const TypewriterEffect: React.FC = () => {
  const textDisplay = useRef<HTMLSpanElement>(null);
  const phrases = ["Coding.", "Caffeine.", "Travel.", "Gym.", "Pets.", "Food.", "Video Games."];

  const i = useRef(0);
  const j = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const loop = () => {
      if (textDisplay.current) {
        textDisplay.current.innerHTML = phrases[i.current].substring(0, j.current);
      }

      if (isDeleting.current && j.current === 0) {
        isDeleting.current = false;
        i.current = (i.current + 1) % phrases.length;
      } else if (!isDeleting.current && j.current === phrases[i.current].length) {
        isDeleting.current = true;
      }

      j.current = isDeleting.current ? j.current - 1 : j.current + 1;

      setTimeout(loop, isDeleting.current ? 200 : 500);
    };

    loop();
  }, []);

  return <span ref={textDisplay} />;
};

export default TypewriterEffect;
