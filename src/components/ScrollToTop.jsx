import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

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
        bottom: { xs: "90px", md: "40px" },
        right: { xs: "20px", md: "40px" },
        zIndex: 99,
        backgroundColor: "rgba(168, 228, 0, 0.1)",
        border: "1px solid #95e600",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
        "&:hover": {
          backgroundColor: "#95e600",
          "& svg": { fill: "#000" },
        },
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#95e600"
        style={{ transition: "fill 0.3s" }}
      >
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    </Box>
  );
};

export default ScrollToTop;
