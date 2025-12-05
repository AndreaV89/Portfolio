// src/components/Layout.jsx
import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";

// Generiamo i numeri
const lineNumbers = Array.from({ length: 200 }, (_, i) =>
  (i + 1).toString().padStart(2, "0")
);

const Layout = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      {/* 1. LOGO: Fisso in alto a sinistra */}
      <Box
        component="a"
        href="/"
        sx={{
          position: "fixed",
          top: { xs: "20px", md: "-30px" },
          left: { xs: "20px", md: "120px" },
          zIndex: 50,
          display: "block",
          cursor: "none",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Andrea Vannetti Logo"
          className="hover-target" // Per attivare l'effetto del cursore spotlight
          sx={{
            height: { xs: "40px", md: "250px" }, // Altezza responsive
            width: "auto",
            transition: "all 0.3s ease",
            filter: "brightness(0.8)", // Leggermente meno luminoso di default
            "&:hover": {
              filter:
                "brightness(1) drop-shadow(0 0 10px rgba(168, 228, 0, 0.5))", // Si illumina al passaggio
              transform: "scale(1.05)", // Leggero ingrandimento
            },
          }}
        />
      </Box>

      {/* 2. GUTTER: Ora è FIXED e fuori dal flusso */}
      <Box
        sx={{
          position: "absolute", // <--- FISSATO
          top: 0,
          left: 0,
          bottom: 0, // Occupa tutta l'altezza
          width: "60px",
          display: { xs: "none", md: "block" }, // Nascosto su mobile
          textAlign: "right",
          paddingRight: "15px", // Spazio tra numero e contenuto
          paddingTop: "10px", // Parte sotto il logo
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
          userSelect: "none",
          color: "#333",
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.9rem",
          lineHeight: 1.6,
          zIndex: 40, // Sopra lo sfondo, sotto il logo
          backgroundColor: "transparent", // Trasparente così si vede lo sfondo sotto
          overflow: "hidden", // Nasconde numeri in eccesso
        }}
      >
        {lineNumbers.map((num) => (
          <div key={num}>{num}</div>
        ))}
      </Box>

      {/* 3. AREA CONTENUTO: Nessun margine sinistro forzato qui */}
      <Box sx={{ width: "100%" }}>{children}</Box>
    </Box>
  );
};

export default Layout;
