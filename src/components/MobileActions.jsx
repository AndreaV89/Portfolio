// src/components/MobileActions.jsx
import { useState, useEffect } from "react";
import { Box, Button, Fade } from "@mui/material";

const MobileActions = () => {
  const [visible, setVisible] = useState(false);
  const phoneNumber = "+393470587552"; // Tuo numero
  const email = "a.vannetti08@gmail.com"; // Tua email

  useEffect(() => {
    const handleScroll = () => {
      // Calcoliamo quanto manca alla fine della pagina
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 600; // Appare 600px prima della fine

      setVisible(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stile comune per i bottoni
  const buttonStyle = {
    flex: 1,
    minWidth: "auto",
    padding: "10px 0",
    borderRadius: "8px",
    textTransform: "none",
    fontFamily: '"Fira Code", monospace',
    fontWeight: "bold",
    fontSize: "0.8rem",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    lineHeight: 1.2,
  };

  return (
    <Fade in={visible}>
      <Box
        sx={{
          display: { xs: "flex", md: "none" }, // Solo mobile
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          gap: 1.5,
          zIndex: 9999,
          width: "95%",
          maxWidth: "400px",
          backgroundColor: "rgba(10, 10, 10, 0.9)", // Sfondo scuro coprente
          backdropFilter: "blur(12px)",
          padding: "12px",
          borderRadius: "16px",
          border: "1px solid rgba(168, 228, 0, 0.2)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* 1. EMAIL (Say Hello) */}
        <Button
          variant="contained"
          href={`mailto:${email}`}
          sx={{
            ...buttonStyle,
            backgroundColor: "#a8e400",
            color: "#000",
            "&:hover": { backgroundColor: "#8cc200" },
          }}
        >
          {/* Icona Mail Semplice */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Email
        </Button>

        {/* 2. WHATSAPP */}
        <Button
          variant="outlined"
          href={`https://wa.me/${phoneNumber.replace("+", "")}`}
          target="_blank"
          sx={{
            ...buttonStyle,
            borderColor: "#25D366", // Verde WhatsApp
            color: "#25D366",
            "&:hover": {
              backgroundColor: "rgba(37, 211, 102, 0.1)",
              borderColor: "#25D366",
            },
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          Chat
        </Button>

        {/* 3. CHIAMA */}
        <Button
          variant="outlined"
          href={`tel:${phoneNumber}`}
          sx={{
            ...buttonStyle,
            borderColor: "#fff",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "#fff",
            },
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
          </svg>
          Call
        </Button>
      </Box>
    </Fade>
  );
};

export default MobileActions;
