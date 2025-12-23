import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import logo from "../assets/logo.svg";

const Navbar = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "Progetti", target: "work" },
    { name: "Contatti", target: "contact" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid transparent",
        transition: "all 0.3s ease-in-out",
        padding: isScrolled ? "10px 0" : "20px 0",
        zIndex: 1200,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ px: { xs: 2, md: 4 }, pl: { md: "80px" } }}
      >
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* LOGO */}
          <Box
            onClick={() => onNavClick("home")}
            sx={{ cursor: "none", display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: "80px",
                width: "auto",
              }}
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                onClick={() => onNavClick(link.target)}
                disableRipple
                sx={{
                  color: "#fff",
                  fontFamily: '"Fira Code", monospace',
                  fontSize: "1.2rem",
                  textTransform: "none",
                  cursor: "none",
                  position: "relative",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#95e600",
                    "&::after": {
                      width: "100%",
                    },
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "1px",
                    backgroundColor: "#95e600",
                    transition: "width 0.3s ease",
                  },
                }}
              >
                <span style={{ color: "#95e600", marginRight: "4px" }}>
                  &lt;
                </span>
                {link.name}
                <span style={{ color: "#95e600", marginRight: "4px" }}>
                  /&gt;
                </span>
              </Button>
            ))}
          </Box>

          {/* MENU MOBILE (Opzionale: Icona Hamburger) */}
          {/* Per ora su mobile nascondiamo il menu classico e ci affidiamo alla tua MobileBar in basso */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
