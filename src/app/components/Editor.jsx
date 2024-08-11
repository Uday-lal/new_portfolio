"use client";
import Input from "./Input";
import Output from "./Output";
import { useState, useEffect, useRef } from "react";

/*
`Every great idea is crazy until it is done`

Need a coursor to edit and some keybindings to work it out
I'm thinking of deviding this components into two parts Input and Output

1. Let's start with the coursor
*/

function Editor(props) {
  const [activeInput, setActiveInput] = useState(false);
  const inputRef = useRef(null);
  const handleChange = (codes) => {
    // TODO: Execute Code
  };

  useEffect(() => console.log(activeInput), [activeInput]);

  const handleInputClick = (event) => {
    if (inputRef.current && inputRef.current.contains(event.target)) {
      setActiveInput(true);
    } else {
      setActiveInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleInputClick);

    return () => {
      document.removeEventListener("mousedown", handleInputClick);
    };
  }, []);

  return (
    <div className="editor relative w-full z-50 h-[300px] 3xl:h-[350px] bg-[#2D303E]">
      <div className="editor_header"></div>
      <div className="editor_stuff grid grid-cols-[70%_30%] h-full">
        <div ref={inputRef} className="w-full border-r border-r-white">
          <Input isActive={activeInput} />
        </div>
        <div className="w-full">
          <Output />
        </div>
      </div>
    </div>
  );
}

export default Editor;
