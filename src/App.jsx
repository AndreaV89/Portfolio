// src/App.jsx
import { Box, Typography, Container, Stack } from "@mui/material";
import SpotlightCursor from "./components/SpotlightCursor";
import Layout from "./components/Layout";
import DecryptedText from "./components/DecryptedText";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <>
      {/* 1. Il livello "Noise" per l'effetto grana pellicola */}
      {/* <div className="noise-overlay" /> */}

      <SpotlightCursor />

      <Layout>
        <Container maxWidth="md" sx={{ px: { xs: 0, md: 4 } }}>
          <Box
            sx={{
              minHeight: "70vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              pt: 8,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
            >
              <span style={{ color: "#666" }}>01</span>
              <span>// Start</span>
            </Typography>

            <Box sx={{ mb: 2 }}>
              <DecryptedText
                text="Andrea Vannetti"
                variant="h1"
                color="white"
                sx={{ display: "block" }}
              />
            </Box>

            <Typography variant="h2" sx={{ mb: 4, opacity: 0.8 }}>
              Building digital{" "}
              <span style={{ color: "#a8e400" }}>experiences</span>
              <br />
              that matter.
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: "500px", mb: 6 }}>
              Sono un Full Stack Developer specializzato in interfacce moderne e
              performanti. Trasformo il codice in prodotti che lasciano il
              segno.
            </Typography>

            <Box sx={{ display: "flex", gap: 4 }}>
              <Typography
                variant="subtitle1"
                component="a"
                href="#work"
                sx={{
                  textDecoration: "none",
                  borderBottom: "1px solid #a8e400",
                  pb: 0.5,
                }}
              >
                View Projects
              </Typography>
              <Typography
                variant="subtitle1"
                component="a"
                sx={{
                  textDecoration: "none",
                  color: "#666",
                  borderBottom: "1px solid #666",
                  pb: 0.5,
                }}
              >
                Contact Me
              </Typography>
            </Box>
          </Box>

          {/* Spazio placeholder per lo scroll */}
          <div style={{ height: "500px" }}></div>

          {/* --- SEZIONE PROGETTI --- */}
          {/* Aggiungiamo un id="work" per far funzionare il link sopra */}
          <Box id="work" sx={{ minHeight: "100vh", pt: 10 }}>
            {/* Titolo Sezione */}
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
              <span style={{ color: "#a8e400" }}>02.</span> Selected Works
            </Typography>

            {/* Inseriamo la lista qui */}
            <ProjectList />
          </Box>

          {/* Spazio finale per non tagliare il fondo */}
          <Box sx={{ height: "200px" }} />
        </Container>
      </Layout>
    </>
  );
}

export default App;
