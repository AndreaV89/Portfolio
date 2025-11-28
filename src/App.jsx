// src/App.jsx
import { Box, Typography, Container } from "@mui/material";
import SpotlightCursor from "./components/SpotlightCursor";
import Layout from "./components/Layout";
import DecryptedText from "./components/DecryptedText";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";

// Stile comune per ogni "Slide" (Sezione)
const sectionStyle = {
  minHeight: "100vh", // Occupa tutta l'altezza dello schermo
  scrollSnapAlign: "start", // Il magnete aggancia l'inizio della sezione
  display: "flex", // Ci serve per centrare verticalmente il contenuto
  flexDirection: "column",
  justifyContent: "center", // Centra tutto verticalmente
  paddingTop: "50px", // Un po' di aria in alto
  paddingBottom: "50px", // Un po' di aria in basso
};

function App() {
  return (
    <>
      <SpotlightCursor />
      <Layout>
        <Container maxWidth="md" sx={{ px: { xs: 0, md: 4 } }}>
          {/* --- SEZIONE 1: HERO --- */}
          <Box sx={sectionStyle}>
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
            >
              <span style={{ color: "#666" }}>01</span>
              <span>// Start</span>
            </Typography>

            <Box sx={{ mb: 2 }}>
              <DecryptedText
                text="[TUO NOME]"
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
              performanti.
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
                href="#contact"
                sx={{
                  textDecoration: "none",
                  color: "#666",
                  borderBottom: "1px solid #666",
                  pb: 0.5,
                  transition: "color 0.3s",
                  "&:hover": { color: "#a8e400", borderColor: "#a8e400" },
                }}
              >
                Contact Me
              </Typography>
            </Box>
          </Box>

          {/* --- SEZIONE 2: PROGETTI --- */}
          {/* Aggiungiamo scrollMarginTop per compensare eventuali navbar fisse o padding */}
          <Box id="work" sx={{ ...sectionStyle, scrollMarginTop: "100px" }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
              <span style={{ color: "#a8e400" }}>02.</span> Selected Works
            </Typography>
            <ProjectList />
          </Box>

          {/* --- SEZIONE 3: CONTATTI --- */}
          {/* Contact ha il suo file, ma lo avvolgiamo qui per gestire lo snap */}
          <Box id="contact" sx={{ ...sectionStyle, justifyContent: "center" }}>
            <Contact />
          </Box>

          {/* Footer separato, fuori dallo snap o parte dell'ultima sezione */}
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: "#444",
              pb: 2,
              fontFamily: '"Fira Code", monospace',
              scrollSnapAlign: "end",
            }}
          >
            Built with React & MaterialUI
          </Typography>
        </Container>
      </Layout>
    </>
  );
}

export default App;
