// src/components/ScrollToTop.jsx
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Controlliamo lo scroll per mostrare/nascondere il tasto
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: { xs: "90px", md: "40px" }, // Su mobile sta sopra la action bar
        right: { xs: "20px", md: "40px" },
        zIndex: 99,
        backgroundColor: "rgba(168, 228, 0, 0.1)",
        border: "1px solid #a8e400",
        borderRadius: "50%", // Cerchio
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer", // Importante per desktop
        opacity: visible ? 1 : 0, // Fade in/out
        transform: visible ? "translateY(0)" : "translateY(20px)", // Slide in/out
        transition: "all 0.3s ease",
        pointerEvents: visible ? "auto" : "none", // Non cliccabile se invisibile
        "&:hover": {
          backgroundColor: "#a8e400",
          "& svg": { fill: "#000" }, // Freccia diventa nera al passaggio
        },
      }}
    >
      {/* Icona Freccia Su (SVG Semplice) */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#a8e400"
        style={{ transition: "fill 0.3s" }}
      >
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    </Box>
  );
};

export default ScrollToTop;
