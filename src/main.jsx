// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Stili globali minimi
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme"; // Importiamo il tema che abbiamo appena creato

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ThemeProvider passa i colori a tutta l'app */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline applica il colore di sfondo e resetta i margini */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
