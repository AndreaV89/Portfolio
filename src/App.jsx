import { useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import Lenis from "lenis";
import SpotlightCursor from "./components/SpotlightCursor";
import Layout from "./components/Layout";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import ScrollIndicator from "./components/ScrollIndicator";
import Footer from "./components/Footer";
import MobileActions from "./components/MobileActions";
import ScrollToTop from "./components/ScrollToTop";
import Maintenance from "./components/Maintenance";
import Navbar from "./components/Navbar";
import {
  ZoomIn,
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "./components/Animations";

import ProjectListProva from "./components/ProjectListProva";
import ContactProva from "./components/ContactProva";

// MAINTENANCE MODE
const IS_MAINTENANCE_MODE = false;

const sectionStyle = {
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  paddingTop: { sm: "100px", md: "100px" },
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
      syncTouch: false,
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
      lenisRef.current.scrollTo(element, { duration: 1.5 });
    }
  };

  if (IS_MAINTENANCE_MODE) {
    return <Maintenance />;
  }

  return (
    <>
      <SpotlightCursor />

      <Navbar onNavClick={scrollToSection} />

      <Layout>
        {/* HERO */}
        <Container
          id="home"
          maxWidth="lg"
          sx={{ px: { xs: 2, md: 4 }, pl: { md: "80px" } }}
        >
          <Box sx={sectionStyle}>
            <Box>
              <SlideIn>
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
                      color: "#95e600",
                      fontFamily: '"Fira Code", monospace',
                    }}
                  >
                    01.
                  </span>
                  <span> {"Start />"}</span>
                </Typography>
              </SlideIn>

              <ZoomIn delay={0.2}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h1" color="white">
                    Andrea Vannetti
                  </Typography>
                </Box>
              </ZoomIn>

              <FadeUp delay={0.4}>
                <Typography variant="h2" sx={{ mb: 4, opacity: 0.8 }}>
                  Crafting immersive{" "}
                  <span style={{ color: "#95e600" }}>digital experiences</span>.
                  <br />
                </Typography>
              </FadeUp>

              <FadeUp delay={0.6}>
                <Typography variant="body1" sx={{ maxWidth: "500px", mb: 6 }}>
                  Trasformo idee complesse in interfacce web intuitive e
                  moderne, curando ogni dettaglio dall'idea al deploy.
                </Typography>
              </FadeUp>

              <StaggerContainer>
                <Box
                  sx={{
                    display: "flex",
                    gap: 4,
                    justifyContent: { xs: "space-around", md: "left" },
                  }}
                >
                  <StaggerItem>
                    <Typography
                      variant="subtitle1"
                      className="hover-target"
                      onClick={() => scrollToSection("work")}
                      sx={{
                        cursor: "none",
                        borderBottom: "1px solid #95e600",
                        pb: 0.5,
                        "&:hover": { color: "#95e600" },
                      }}
                    >
                      Progetti
                    </Typography>
                  </StaggerItem>
                  <StaggerItem>
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
                        "&:hover": { color: "#95e600", borderColor: "#95e600" },
                      }}
                    >
                      Contattami
                    </Typography>
                  </StaggerItem>
                </Box>
              </StaggerContainer>
            </Box>
            <ScrollIndicator onClick={() => scrollToSection("work")} />
          </Box>
        </Container>

        {/* PROGETTI */}
        <Box
          id="work"
          sx={{
            width: "100%",
            py: 30,
            background:
              "linear-gradient(180deg, #0a0a0a 0%, #0f1a05 20%, #0f1a05 80%, #0a0a0a 100%)",
            position: "relative",
          }}
        >
          <Container
            //maxWidth="md"
            sx={{ px: { xs: 2, md: 4 }, pl: { md: "80px" } }}
          >
            <SlideIn>
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
                    color: "#95e600",
                    fontFamily: '"Fira Code", monospace',
                  }}
                >
                  02.
                </span>
                {" Selected Works />"}
              </Typography>
            </SlideIn>
            <ProjectList />
            {/* <ProjectListProva /> */}
          </Container>
        </Box>

        {/* CONTATTI */}
        <Container
          //maxWidth="md"
          sx={{ px: { xs: 2, md: 4 }, pl: { md: "80px" } }}
        >
          <Box
            id="contact"
            className="snap-section"
            sx={{
              ...sectionStyle,
              justifyContent: "flex-start",
              pt: "100px",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Contact />
              {/* <ContactProva /> */}
            </Box>
          </Box>
        </Container>
        <Footer />
        <MobileActions />
        <ScrollToTop />
      </Layout>
    </>
  );
}

export default App;
