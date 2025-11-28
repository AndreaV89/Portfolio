// src/components/Layout.jsx
import { Box, Typography } from "@mui/material";

// Questa funzione genera un array di numeri da 1 a 100 (es. ["01", "02", ..., "99", "100"])
// Serve per simulare le righe di codice a sinistra.
const lineNumbers = Array.from({ length: 100 }, (_, i) =>
  (i + 1).toString().padStart(2, "0")
);

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex", // Mette gli elementi uno accanto all'altro (sinistra e destra)
        minHeight: "100vh", // Altezza minima tutto lo schermo
        maxWidth: "1200px", // Larghezza massima per non allargarsi troppo su schermi giganti
        margin: "0 auto", // Centra il sito nel monitor
        position: "relative",
        zIndex: 1, // Sta sopra lo sfondo, ma sotto il cursore (che ha zIndex 9999)
      }}
    >
      {/* --- NUOVO: LOGO PLACEHOLDER --- */}
      <Box
        sx={{
          position: "fixed", // Rimane fisso quando scrolli
          top: "30px",
          left: "40px",
          zIndex: 50, // Sopra a tutto il resto del layout
          display: { xs: "none", md: "block" }, // Su mobile lo nascondiamo o lo spostiamo (per ora nascosto)
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Fira Code", monospace',
            fontWeight: 700,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)", // Un bordo sottile come un chip
            padding: "5px 15px",
            backgroundColor: "rgba(0,0,0,0.5)", // Sfondo semi-trasparente per leggibilità
            backdropFilter: "blur(5px)", // Effetto vetro
            "&:hover": {
              borderColor: "#a8e400", // Diventa verde al passaggio
              color: "#a8e400",
              boxShadow: "0 0 15px rgba(168, 228, 0, 0.2)",
            },
            transition: "all 0.3s ease",
          }}
        >
          &lt;Logo /&gt;
        </Typography>
      </Box>
      {/* ------------------------------- */}
      {/* 1. LA GUTTER (Colonna dei numeri) */}
      <Box
        sx={{
          width: "60px", // Larghezza fissa
          flexShrink: 0, // Non si rimpicciolisce mai
          textAlign: "right", // Numeri allineati a destra
          paddingRight: "20px", // Spazio tra numero e contenuto
          paddingTop: "40px", // Spazio dall'alto
          borderRight: "1px solid rgba(255, 255, 255, 0.05)", // Linea verticale sottilissima separatoria
          userSelect: "none", // L'utente non può selezionare i numeri col mouse (stile IDE)
          color: "#444", // Colore grigio scuro spento per i numeri
          fontFamily: '"Fira Code", monospace', // Font da codice
          fontSize: "0.9rem",
          lineHeight: 1.6, // Spaziatura verticale tra i numeri (deve combaciare col testo)
        }}
      >
        {lineNumbers.map((num) => (
          <div key={num}>{num}</div>
        ))}
      </Box>

      {/* 2. AREA CONTENUTO (Dove andrà il tuo portfolio) */}
      <Box
        sx={{
          flexGrow: 1, // Occupa tutto lo spazio rimanente
          paddingLeft: "20px",
          paddingTop: "36px", // Allineato visivamente con la prima riga
          paddingBottom: "50px",
        }}
      >
        {/* 'children' è una parola speciale di React. 
            Significa: "Metti qui dentro qualsiasi cosa io inserisca dentro il tag <Layout>" */}
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
