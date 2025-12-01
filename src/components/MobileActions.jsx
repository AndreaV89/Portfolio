// src/components/MobileActions.jsx
import { Box, Button } from "@mui/material";

const MobileActions = () => {
  // Sostituisci con il tuo numero reale
  const phoneNumber = "+393330000000";

  return (
    <Box
      sx={{
        // Visibile solo su mobile (xs), nascosto da md in su
        display: { xs: "flex", md: "none" },
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        gap: 2,
        zIndex: 9999, // Sopra a tutto
        width: "90%", // Occupa quasi tutta la larghezza
        maxWidth: "400px",
      }}
    >
      {/* Tasto CHIAMA */}
      <Button
        variant="contained"
        href={`tel:${phoneNumber}`}
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
        Call Me
      </Button>

      {/* Tasto WHATSAPP */}
      <Button
        variant="outlined"
        // API di WhatsApp: apre la chat direttamente
        href={`https://wa.me/${phoneNumber.replace("+", "")}`}
        target="_blank"
        sx={{
          flex: 1,
          borderColor: "#a8e400",
          color: "#a8e400",
          fontWeight: "bold",
          fontFamily: '"Fira Code", monospace',
          textTransform: "none",
          borderRadius: "8px",
          backgroundColor: "rgba(0,0,0,0.8)", // Sfondo scuro per leggibilità
          backdropFilter: "blur(5px)",
          "&:hover": {
            borderColor: "#a8e400",
            backgroundColor: "rgba(168, 228, 0, 0.1)",
          },
        }}
      >
        WhatsApp
      </Button>
    </Box>
  );
};

export default MobileActions;
