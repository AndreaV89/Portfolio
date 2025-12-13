import { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import PrivacyModal from "./PrivacyModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openPrivacy, setOpenPrivacy] = useState(false);

  return (
    <>
      <Box
        component="footer"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 15,
          mb: 0,
          pb: 4,
          opacity: 0.8,
          transition: "opacity 0.3s",
          "&:hover": { opacity: 1 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "65%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, #95e600 50%, transparent 100%)",
            opacity: 0.3,
            mb: 6,
          }}
        />
        <Typography
          variant="body2"
          sx={{
            color: "#666",
            fontFamily: '"Fira Code", monospace',
            fontSize: "0.85rem",
            textAlign: "center",
          }}
        >
          Built with ❤️ using React & MaterialUI
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "#444",
            fontFamily: '"Fira Code", monospace',
            fontSize: "0.75rem",
            mt: 1,
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <span>© {currentYear} Andrea Vannetti</span>

          <Link
            component="button"
            onClick={() => setOpenPrivacy(true)}
            underline="hover"
            sx={{
              color: "#444",
              textDecoration: "none",
              "&:hover": { color: "#95e600" },
              cursor: "none",
              fontFamily: "inherit",
              fontSize: "inherit",
              border: "none",
              background: "none",
              padding: 0,
            }}
            className="hover-target"
          >
            Privacy Policy
          </Link>
        </Typography>
      </Box>
      <PrivacyModal open={openPrivacy} onClose={() => setOpenPrivacy(false)} />
    </>
  );
};

export default Footer;
