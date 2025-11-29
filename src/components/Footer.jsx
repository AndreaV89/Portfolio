// src/components/Footer.jsx
import { Box, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 20, // Margine sopra per staccarlo dai contenuti
        mb: 4, // Margine sotto per non attaccarlo al bordo
        opacity: 0.7,
        transition: "opacity 0.3s",
        "&:hover": { opacity: 1 },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#666",
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.85rem",
          textAlign: "center",
        }}
      >
        Built with React & MaterialUI
      </Typography>

      {/* Opzionale: Aggiungiamo l'anno dinamico */}
      <Typography
        variant="caption"
        sx={{
          color: "#444",
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.75rem",
          mt: 1,
        }}
      >
        © {currentYear} Andrea Vannetti
      </Typography>
    </Box>
  );
};

export default Footer;
