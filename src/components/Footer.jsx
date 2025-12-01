// src/components/Footer.jsx
import { Box, Typography, Link } from "@mui/material";

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
        mt: 20,
        mb: 4,
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

      <Typography
        variant="caption"
        sx={{
          color: "#444",
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.75rem",
          mt: 1,
          display: "flex",
          gap: 2, // Distanzia i due elementi
          alignItems: "center",
        }}
      >
        <span>© {currentYear} Andrea Vannetti</span>

        {/* Link alla Privacy (puoi mettere '#' per ora se non hai l'URL) */}
        <Link
          href="#" // Inserisci qui il link di Iubenda o simili quando lo avrai
          target="_blank"
          underline="hover"
          sx={{
            color: "#444",
            textDecoration: "none",
            "&:hover": { color: "#a8e400" },
          }}
        >
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
