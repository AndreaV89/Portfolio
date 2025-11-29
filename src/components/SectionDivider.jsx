// src/components/SectionDivider.jsx
import { Box, Typography } from "@mui/material";

const SectionDivider = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4, // Padding verticale per dare aria
        opacity: 0.2,
        userSelect: "none",
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Fira Code", monospace',
          color: "#fff",
          letterSpacing: "5px",
        }}
      >
        /* ----------------------- */
      </Typography>
    </Box>
  );
};

export default SectionDivider;
