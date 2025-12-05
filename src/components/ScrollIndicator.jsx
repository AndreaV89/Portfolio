// src/components/ScrollIndicator.jsx
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

// Animazione di rimbalzo
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const ScrollIndicator = ({ onClick }) => {
  return (
    <Box
      className="hover-target"
      onClick={onClick}
      sx={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        cursor: "noneS",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        opacity: 0.6,
        transition: "opacity 0.3s",
        "&:hover": { opacity: 1 },
        zIndex: 10,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.8rem",
          color: "#666",
        }}
      >
        // scroll_down
      </Typography>

      <Box
        sx={{
          width: "2px",
          height: "40px",
          background: "linear-gradient(to bottom, #95e600, transparent)",
          animation: `${bounce} 2s infinite`,
        }}
      />
    </Box>
  );
};

export default ScrollIndicator;
