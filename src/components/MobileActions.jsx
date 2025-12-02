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
    padding: "8px 0",
    borderRadius: "8px",
    textTransform: "none",
    fontFamily: '"Fira Code", monospace',
    fontWeight: "bold",
    fontSize: "0.75rem",
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
        <Button
          variant="outlined"
          href="/cv.pdf"
          target="_blank"
          sx={{
            ...buttonStyle,
            borderColor: "#a8e400",
            color: "#a8e400",
            "&:hover": { backgroundColor: "rgba(168, 228, 0, 0.1)" },
          }}
        >
          {/* Icona Documento */}
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
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          CV
        </Button>
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
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
            ></path>
            <path
              fill="#fff"
              d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
            ></path>
            <path
              fill="#40c351"
              d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
              clip-rule="evenodd"
            ></path>
          </svg>
          WhatsApp
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
          Chiamami
        </Button>
      </Box>
    </Fade>
  );
};

export default MobileActions;
