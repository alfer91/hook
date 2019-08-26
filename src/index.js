import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useHover = onHover => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

function App() {
  const onHover = () => console.log("Somebody hovered!");
  const markedRef = useHover(onHover);
  return <h1 ref={markedRef}>Hello Nooks</h1>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
