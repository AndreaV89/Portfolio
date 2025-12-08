import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0a0a0a",
    },
    primary: {
      // main: "#a8e400",
      main: "#95e600",
    },
    text: {
      primary: "#ffffff",
      secondary: "#888888",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      color: "#e0e0e0",
    },
    subtitle1: {
      fontFamily: '"Fira Code", monospace',
      fontSize: "1rem",
      color: "#95e600",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.8,
      color: "#999",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0a0a0a",
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",

          scrollbarColor: "#95e600 #0a0a0a",
          scrollbarWidth: "thin",
          cursor: "none",
        },
        "a, button": {
          cursor: "none",
        },
      },
    },
  },
});

export default theme;
