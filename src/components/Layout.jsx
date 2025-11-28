// src/components/Layout.jsx
import { Box, Typography } from "@mui/material";

// FIX 1: Aumentiamo le righe da 100 a 300 (o 400) per coprire tutta la lunghezza della pagina
const lineNumbers = Array.from({ length: 155 }, (_, i) =>
  (i + 1).toString().padStart(2, "0")
);

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* LOGO PLACEHOLDER */}
      <Box
        sx={{
          position: "fixed",
          top: "30px",
          left: "40px",
          zIndex: 50,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Fira Code", monospace',
            fontWeight: 700,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "5px 15px",
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(5px)",
            "&:hover": {
              borderColor: "#a8e400",
              color: "#a8e400",
              boxShadow: "0 0 15px rgba(168, 228, 0, 0.2)",
            },
            transition: "all 0.3s ease",
          }}
        >
          &lt;Logo /&gt;
        </Typography>
      </Box>

      {/* LA GUTTER (Colonna dei numeri) */}
      <Box
        sx={{
          width: "60px",
          flexShrink: 0,
          textAlign: "right",
          paddingRight: "20px",
          paddingTop: "10px",
          // FIX 2: Assicuriamo che la linea divisoria sia sempre lunga quanto il contenuto più lungo
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
          userSelect: "none",
          color: "#333",
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.9rem",
          lineHeight: 1.6,
          // Aggiungiamo padding bottom per pareggiare la fine della pagina
          paddingBottom: "10px",
        }}
      >
        {lineNumbers.map((num) => (
          <div key={num}>{num}</div>
        ))}
      </Box>

      {/* AREA CONTENUTO */}
      <Box
        sx={{
          flexGrow: 1,
          paddingLeft: "40px",
          paddingTop: "116px",
          paddingBottom: "10px",
          // Questo serve a garantire che se il contenuto è breve, la pagina abbia comunque altezza
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
