// src/App.jsx
import { useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import Lenis from "lenis";
import SpotlightCursor from "./components/SpotlightCursor";
import Layout from "./components/Layout";
import DecryptedText from "./components/DecryptedText";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import ScrollIndicator from "./components/ScrollIndicator";
import SectionDivider from "./components/SectionDivider";
import Footer from "./components/Footer";

// Ritorna a 100vh fissi per occupare tutto lo schermo
const sectionStyle = {
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  paddingTop: "60px",
  paddingBottom: "60px",
};

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: true,
    });

    lenisRef.current = lenis;

    document.body.classList.add("lenis-active");

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      document.body.classList.remove("lenis-active");
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        duration: 1.5,
      });
    }
  };

  return (
    <>
      <SpotlightCursor />

      <Layout>
        <Container maxWidth="md" sx={{ px: { xs: 0, md: 4 } }}>
          {/* --- HERO SECTION --- */}
          {/* Aggiungiamo 'snap-section' per agganciarlo se riattivi lo snap CSS */}
          <Box className="snap-section" sx={sectionStyle}>
            <Box>
              {/* Titolo Hero: Piccolo e tecnico */}
              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 4, md: 6 },
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "2.125rem" },
                }}
              >
                <span
                  style={{
                    color: "#a8e400",
                    fontFamily: '"Fira Code", monospace',
                  }}
                >
                  01.
                </span>
                <span> {"<Start />"}</span>
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
                Sono un Full Stack Developer specializzato in interfacce moderne
                e performanti.
              </Typography>

              <Box sx={{ display: "flex", gap: 4 }}>
                <Typography
                  variant="subtitle1"
                  className="hover-target"
                  onClick={() => scrollToSection("work")}
                  sx={{
                    cursor: "none",
                    borderBottom: "1px solid #a8e400",
                    pb: 0.5,
                    "&:hover": { color: "#a8e400" },
                  }}
                >
                  View Projects
                </Typography>

                <Typography
                  variant="subtitle1"
                  className="hover-target"
                  onClick={() => scrollToSection("contact")}
                  sx={{
                    cursor: "none",
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
            <ScrollIndicator onClick={() => scrollToSection("work")} />
          </Box>

          {/* --- PROGETTI --- */}
          <Box id="work" className="snap-section" sx={sectionStyle}>
            {/* Titolo Progetti: Grande e Bold (come piaceva a te) */}
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 4, md: 6 },
                fontWeight: 700,
                fontSize: { xs: "1.5rem", md: "2.125rem" },
              }}
            >
              <span
                style={{
                  color: "#a8e400",
                  fontFamily: '"Fira Code", monospace',
                }}
              >
                02.
              </span>
              {"<Selected Works />"}
            </Typography>
            <ProjectList />
          </Box>

          <SectionDivider />

          {/* --- CONTATTI --- */}
          <Box
            id="contact"
            className="snap-section"
            sx={{
              minHeight: "100vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              // CAMBIAMENTO CHIAVE: Non usiamo 'center' qui!
              // Usiamo flex-start per iniziare dall'alto
              justifyContent: "flex-start",
              position: "relative",
              pt: "60px", // Padding per non attaccarsi alla sezione sopra
            }}
          >
            {/* Il titolo qui dentro è rimosso e gestito dal componente Contact.jsx stesso */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Centra verticalmente il box contatti
                width: "100%",
              }}
            >
              <Contact />
            </Box>

            <Footer />
          </Box>
        </Container>
      </Layout>
    </>
  );
}

export default App;
