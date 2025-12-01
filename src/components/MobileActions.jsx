// src/components/MobileActions.jsx
import { Box, Button } from "@mui/material";

const MobileActions = () => {
  // SOSTITUISCI CON IL TUO NUMERO REALE (es. 393331234567)
  const phoneNumber = "393470587552";

  return (
    <Box
      sx={{
        // Visibile solo su mobile (xs), nascosto da md in su
        display: { xs: "flex", md: "none" },
        position: "fixed",
        bottom: "20px", // Un po' staccato dal fondo
        left: "50%",
        transform: "translateX(-50%)",
        gap: 2,
        zIndex: 9999, // Sopra a tutto, anche al cursore
        width: "90%",
        maxWidth: "400px",
        // Un contenitore sfocato per dare risalto ai bottoni
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        padding: "10px",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Tasto CHIAMA */}
      <Button
        variant="contained"
        href={`tel:+${phoneNumber}`}
        sx={{
          flex: 1,
          backgroundColor: "#a8e400",
          color: "#000",
          fontWeight: "bold",
          fontFamily: '"Fira Code", monospace',
          textTransform: "none",
          borderRadius: "8px",
          boxShadow: "0 0 15px rgba(168, 228, 0, 0.4)",
          "&:hover": { backgroundColor: "#8cc200" },
        }}
      >
        Call
      </Button>

      {/* Tasto WHATSAPP */}
      <Button
        variant="outlined"
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        sx={{
          flex: 1,
          borderColor: "#a8e400",
          color: "#a8e400",
          fontWeight: "bold",
          fontFamily: '"Fira Code", monospace',
          textTransform: "none",
          borderRadius: "8px",
          "&:hover": {
            borderColor: "#fff",
            color: "#fff",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        }}
      >
        WhatsApp
      </Button>
    </Box>
  );
};

export default MobileActions;
