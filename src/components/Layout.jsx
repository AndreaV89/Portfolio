import { Box, Typography } from "@mui/material";

const lineNumbers = Array.from({ length: 157 }, (_, i) =>
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
        // FIX FONDAMENTALE:
        // Invece di dare padding diversi alle colonne, diamo un padding unico qui
        // così numeri e testo iniziano ESATTAMENTE alla stessa altezza.
        paddingTop: "10px",
      }}
    >
      {/* LOGO PLACEHOLDER (Fisso) */}
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

      {/* LA GUTTER */}
      <Box
        sx={{
          width: "60px",
          flexShrink: 0,
          textAlign: "right",
          paddingRight: "20px",
          // Rimosso padding-top specifico
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
          userSelect: "none",
          color: "#333",
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.9rem",
          lineHeight: 1.6,
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
          // Rimosso padding-top specifico: ora si allinea naturalmente con la gutter
          paddingBottom: "10px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
