"use client";
import { useState, useEffect, useRef } from "react";

function Input({ isActive }) {
  const [texts, setTexts] = useState(``);
  const inputRef = useRef(null);
  const handleKeyPress = (e) => {
    const _key = e.key;
    if (isActive) {
      console.log(_key);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div ref={inputRef} className="">
      <ol>
        <li>a = 1</li>
        <li>print(a)</li>
      </ol>
    </div>
  );
}

export default Input;
