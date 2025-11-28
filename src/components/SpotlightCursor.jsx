import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const SpotlightCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Controllo extra: se passiamo sopra un link o bottone, possiamo ingrandire leggermente il cursore (opzionale)
      const target = e.target;
      setIsHovering(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("a") ||
          target.closest("button")
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* 1. IL BAGLIORE (TORCIA) */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9998, // Appena sotto il cursore puntatore
          // Raggio ridotto a 350px per essere meno invasivo
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(168, 228, 0, 0.07), transparent 40%)`,
        }}
      />

      {/* 2. IL PUNTATORE VERO E PROPRIO (Piccolo cerchio) */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? 20 : 12, // Si ingrandisce leggermente sui link
          height: isHovering ? 20 : 12,
          backgroundColor: isHovering ? "transparent" : "#a8e400", // Pieno normale, vuoto sui link
          border: "2px solid #a8e400",
          borderRadius: "50%",
          transform: `translate(${position.x - (isHovering ? 10 : 6)}px, ${
            position.y - (isHovering ? 10 : 6)
          }px)`, // Centriamo perfettamente
          pointerEvents: "none",
          zIndex: 9999, // Sopra a tutto
          transition: "width 0.2s, height 0.2s, background-color 0.2s", // Animazione fluida
          boxShadow: "0 0 10px rgba(168, 228, 0, 0.5)", // Un piccolo alone extra sul puntatore
        }}
      />
    </>
  );
};

export default SpotlightCursor;
