import React from "react";
import { useRef, useState, useEffect } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;
