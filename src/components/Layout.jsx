import { Box, Typography } from "@mui/material";

const lineNumbers = Array.from({ length: 200 }, (_, i) =>
  (i + 1).toString().padStart(2, "0")
);

const Layout = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
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
