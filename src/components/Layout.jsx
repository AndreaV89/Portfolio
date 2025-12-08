import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";

const lineNumbers = Array.from({ length: 200 }, (_, i) =>
  (i + 1).toString().padStart(2, "0")
);

const Layout = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      {/* LOGO */}
      <Box
        component="a"
        href="/"
        sx={{
          position: "fixed",
          top: { xs: "15px", md: "15px", lg: "0" },
          left: { xs: "15px", md: "100px" },
          zIndex: 50,
          display: { xs: "none", lg: "block" },
          cursor: "none",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Andrea Vannetti Logo"
          className="hover-target"
          sx={{
            height: { xs: "25px", md: "100px", lg: "100px", xl: "250px" },
            width: "auto",
            transition: "all 0.3s ease",
            filter: "brightness(0.8)",
            "&:hover": {
              filter:
                "brightness(1) drop-shadow(0 0 10px rgba(168, 228, 0, 0.5))",
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>

      {/* GUTTER */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "60px",
          display: { xs: "none", md: "block" },
          textAlign: "right",
          paddingRight: "15px",
          paddingTop: "10px",
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
          userSelect: "none",
          color: "#333",
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.9rem",
          lineHeight: 1.6,
          zIndex: 40,
          backgroundColor: "transparent",
          overflow: "hidden",
        }}
      >
        {lineNumbers.map((num) => (
          <div key={num}>{num}</div>
        ))}
      </Box>

      {/* AREA CONTENUTO */}
      <Box sx={{ width: "100%" }}>{children}</Box>
    </Box>
  );
};

export default Layout;
