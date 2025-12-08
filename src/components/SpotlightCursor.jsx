import { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const SpotlightCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      setIsHovering(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest(".hover-target")
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 10998,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(168, 228, 0, 0.07), transparent 40%)`,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? 20 : 12,
          height: isHovering ? 20 : 12,
          backgroundColor: isHovering ? "transparent" : "#95e600",
          border: "2px solid #95e600",
          borderRadius: "50%",
          transform: `translate(${position.x - (isHovering ? 10 : 6)}px, ${
            position.y - (isHovering ? 10 : 6)
          }px)`,
          pointerEvents: "none",
          zIndex: 10999,
          transition: "width 0.2s, height 0.2s, background-color 0.2s",
          boxShadow: "0 0 10px rgba(168, 228, 0, 0.5)",
        }}
      />
    </>
  );
};

export default SpotlightCursor;
