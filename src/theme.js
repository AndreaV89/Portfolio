// src/theme.js
import { createTheme } from "@mui/material/styles";

// Qui definiamo la "personalità" del tuo sito
const theme = createTheme({
  palette: {
    mode: "dark", // Impostiamo la modalità scura di base
    background: {
      default: "#121212", // Il tuo grigio scurissimo
      paper: "#1e1e1e", // Un grigio leggermente più chiaro per le card (opzionale)
    },
    primary: {
      main: "#a8e400", // Il tuo verde lime "Spotlight"
    },
    text: {
      primary: "#ffffff", // Testo principale bianco
      secondary: "#a8e400", // Testo secondario verde (per i dettagli monospaced)
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif', // Font pulito per i titoli
    // Definiamo uno stile personalizzato per i tuoi sottotitoli "code-style"
    h1: {
      fontWeight: 700, // Titoli belli grassetti
    },
    h2: {
      fontWeight: 600,
    },
    // Possiamo usare 'subtitle1' per il tuo stile monospaced
    subtitle1: {
      fontFamily: '"Fira Code", "Courier New", monospace', // Font da codice
      color: "#a8e400",
    },
  },
  components: {
    // Qui diremo a MUI di usare il nostro colore di sfondo globalmente
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#121212",
          backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.9)), repeating-linear-gradient(0deg, transparent, transparent 2px, #a8e400 2px, #a8e400 4px)`,
          backgroundSize: "100% 4px",
          // Nota: La texture sopra è un placeholder per l'effetto CRT,
          // la raffineremo nel prossimo passaggio per renderla "sottilissima".
          scrollbarColor: "#a8e400 #121212",
          scrollbarWidth: "thin",
        },
      },
    },
  },
});

export default theme;
