"use client";

import React, { useState, useEffect } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    const target = e.target;
    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
  };

  useEffect(() => {
    // Check window width to determine if the cursor should be shown
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowCursor(false);
      } else {
        setShowCursor(true);
      }
    };

    // Set the initial state
    handleResize();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!showCursor) {
    return null; // Do not render the cursor on mobile
  }

  const flareSize = isPointer ? 0 : 30;

  return (
    <div
      className={`flare ${isPointer ? "pointer" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
        backgroundColor: "grey",
        position: "fixed",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}></div>
  );
}

export default CustomCursor;
