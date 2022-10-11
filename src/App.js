import React, { useState, useEffect, useRef } from "react";

import logo from "./logo.svg";

import "./App.css";
import "./index.scss";
import Jokes from "./components/Jokes";
import Cocktails from "./components/Cocktails";
import Charactes from "./components/Charactes";
import Posts from "./components/Posts";
import Content from "./components/Content";
import Toggle from "./components/Toggle";

// import hooks
import { useHover } from "./hooks/useHover";
import useLocalStorage from "./hooks/use-local-storage";
import useDarkMode from "./hooks/use-dark-mode";
import useToogle from "./hooks/useToggle";
import { useOnClickOutside } from "./hooks/useOnClickOutside";

function App() {
  const [value, toggleValue] = useToogle(2);
  const [valueLocal, setValueLocal] = useLocalStorage("valueLocal");
  const [hoverRef, isHovered] = useHover();

  const [darkMode, setDarkMode] = useDarkMode();

  //useOnClickOutside
  const reference = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(reference, () => setIsOpen(false));

  return (
    <div className="App">
      {/* <Jokes /> */}
      {/* <Cocktails /> */}
      {/* <Charactes /> */}
      {/* <Posts /> */}
      {/* useLocalStorage */}

      <button
        onClick={() => {
          setValueLocal(Math.random() + 1);
        }}
      >
        save to localStorage
      </button>

      {/* useDarkMode */}
      <div className="navbar">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />

      {/* useHoover */}
      <div ref={hoverRef} className={`${isHovered && "hoverClass"}`}>
        {isHovered ? "😁" : "☹️"}
      </div>

      {/* useOnClickOutside */}
      <div style={{ backgroundColor: "green" }}>
        {isOpen ? (
          <div ref={reference}>
            👋 Hey, I'm a modal. Click anywhere outside of me to close.
          </div>
        ) : (
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
        )}
      </div>
    </div>
  );
}

export default App;
