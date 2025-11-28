// src/components/DecryptedText.jsx
import { useState, useRef } from "react";
import { Typography } from "@mui/material";

// Questi sono i caratteri che useremo per l'effetto "disturbo"
// Ho incluso < > / { } per richiamare il codice
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?";

const DecryptedText = ({ text, variant = "h2", color = "white", sx = {} }) => {
  // Stato che contiene il testo che vediamo a schermo
  const [displayText, setDisplayText] = useState(text);

  // useRef è come una variabile che "sopravvive" tra i render, ma non ricarica la pagina quando cambia.
  // Lo usiamo per tenere traccia del timer dell'animazione.
  const intervalRef = useRef(null);

  const scramble = () => {
    let iteration = 0;

    // Se c'è già un'animazione in corso, la fermiamo per ripartire puliti
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        // Prendiamo il testo originale e lo trasformiamo...
        text
          .split("")
          .map((letter, index) => {
            // Se l'indice della lettera è minore dell'iterazione corrente,
            // mostriamo la lettera vera (l'effetto si è "stabilizzato" qui)
            if (index < iteration) {
              return text[index];
            }
            // Altrimenti mostriamo un carattere casuale "matrix"
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      // Se l'iterazione supera la lunghezza del testo, abbiamo finito!
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      // Aumentiamo l'iterazione.
      // Più basso è questo numero (es. 1/3), più lenta è la decodifica.
      // Più alto (es. 1), più è veloce.
      iteration += 1 / 3;
    }, 30); // Ogni 30 millisecondi cambia i caratteri
  };

  return (
    <Typography
      variant={variant}
      onMouseEnter={scramble} // Lancia l'effetto quando il mouse entra
      sx={{
        ...sx,
        color: color,
        display: "inline-block", // Importante per non rompere il layout durante l'animazione
        whiteSpace: "nowrap",
        cursor: "none",
      }}
    >
      {displayText}
    </Typography>
  );
};

export default DecryptedText;
