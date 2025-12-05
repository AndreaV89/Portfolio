// src/components/Maintenance.jsx
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  LinearProgress,
  Button,
} from "@mui/material";
import SpotlightCursor from "./SpotlightCursor";

const terminalLogs = [
  "> Initializing system...",
  "> Loading modules...",
  "> Optimizing assets...",
  "> Refactoring UI components...",
  "> Coffee break...",
  "> Debugging life decisions...",
  "> Almost there...",
  "> System upgrade in progress...",
];

const Maintenance = () => {
  const [logIndex, setLogIndex] = useState(0);

  // Effetto per far scorrere i messaggi del terminale
  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % terminalLogs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SpotlightCursor />

      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0a0a0a",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: "center", zIndex: 1 }}>
          {/* Icona Warning stilizzata */}
          <Typography
            sx={{ fontSize: "3rem", mb: 2, color: "#95e600", opacity: 0.8 }}
          >
            ⚠️
          </Typography>

          {/* Titolo Decriptato */}
          <Box sx={{ mb: 4 }}>
            <Typography
              text="SYSTEM_UNDER_CONSTRUCTION"
              variant="h4"
              color="white"
              sx={{ fontWeight: 700, fontFamily: '"Fira Code", monospace' }}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{ color: "#888", mb: 6, maxWidth: "400px", mx: "auto" }}
          >
            Stiamo aggiornando il codice sorgente per offrirti un'esperienza
            migliore. Torneremo online a breve.
          </Typography>

          {/* Barra di caricamento stile Hacker */}
          <Box sx={{ width: "100%", mb: 2 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography
                variant="caption"
                sx={{ fontFamily: '"Fira Code", monospace', color: "#95e600" }}
              >
                Status: Building
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontFamily: '"Fira Code", monospace', color: "#95e600" }}
              >
                99%
              </Typography>
            </Box>
            <LinearProgress
              sx={{
                height: 4,
                backgroundColor: "rgba(255,255,255,0.1)",
                "& .MuiLinearProgress-bar": { backgroundColor: "#95e600" },
              }}
            />
          </Box>

          {/* Finto Terminale */}
          <Box
            sx={{
              mt: 4,
              p: 2,
              backgroundColor: "rgba(0,0,0,0.5)",
              border: "1px dashed rgba(255,255,255,0.2)",
              borderRadius: "4px",
              textAlign: "left",
              fontFamily: '"Fira Code", monospace',
              fontSize: "0.85rem",
              color: "#666",
              height: "40px", // Altezza fissa per evitare salti
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#95e600", marginRight: "10px" }}>$</span>
            {terminalLogs[logIndex]}
            <span className="blink">_</span>
          </Box>

          {/* Bottone Contatto (per non perdere opportunità) */}
          <Box sx={{ mt: 6 }}>
            <Button
              variant="outlined"
              href="mailto:a.vannetti08@gmail.com" // Metti la tua email
              sx={{
                borderColor: "#333",
                color: "#888",
                fontFamily: '"Fira Code", monospace',
                cursor: "none",
                textTransform: "none",
                "&:hover": { borderColor: "#95e600", color: "#95e600" },
              }}
            >
              Contattami comunque
            </Button>
          </Box>
        </Container>

        {/* CSS per il cursore lampeggiante del terminale */}
        <style>{`
          .blink { animation: blinker 1s linear infinite; }
          @keyframes blinker { 50% { opacity: 0; } }
        `}</style>
      </Box>
    </>
  );
};

export default Maintenance;
