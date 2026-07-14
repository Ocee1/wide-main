"use client";

import { useEffect, useState } from "react";

const words = ["Anytime", "Anyday", "Anywhere"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1em] overflow-hidden align-bottom">
      <span
        className="flex flex-col transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${index}em)` }}
      >
        {words.map((word) => (
          <span key={word} className="text-gradient block h-[1em] leading-none text-left">
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
