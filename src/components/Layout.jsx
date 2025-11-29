import { Box, Typography } from "@mui/material";

const lineNumbers = Array.from({ length: 171 }, (_, i) =>
  (i + 1).toString().padStart(2, "0")
);

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        paddingTop: "10px",
      }}
    >
      {/* LOGO PLACEHOLDER (Fisso) */}
      <Box
        sx={{
          position: "fixed",
          top: "30px",
          left: "40px",
          zIndex: 50,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Fira Code", monospace',
            fontWeight: 700,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "5px 15px",
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(5px)",
            "&:hover": {
              borderColor: "#a8e400",
              color: "#a8e400",
              boxShadow: "0 0 15px rgba(168, 228, 0, 0.2)",
            },
            transition: "all 0.3s ease",
          }}
        >
          &lt;Logo /&gt;
        </Typography>
      </Box>

      {/* LA GUTTER */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "40px",
          flexShrink: 0,
          textAlign: "right",
          paddingRight: "20px",
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
          userSelect: "none",
          color: "#333",
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.9rem",
          lineHeight: 1.6,
          paddingBottom: "10px",
        }}
      >
        {lineNumbers.map((num) => (
          <div key={num}>{num}</div>
        ))}
      </Box>

      {/* AREA CONTENUTO */}
      <Box
        sx={{
          flexGrow: 1,
          paddingLeft: { xs: "20px", md: "40px" },
          paddingRight: { xs: "20px", md: "0" },
          paddingBottom: "10px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
