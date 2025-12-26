// src/components/MobileActions.jsx
import { Box, IconButton, styled, Typography } from "@mui/material";

// --- ICONE SVG (Stesse di prima) ---
const HomeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const ProjectIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);
const MailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GlassBar = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "90%",
  maxWidth: "380px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "10px 15px",
  backgroundColor: "rgba(10, 10, 10, 0.8)",
  backdropFilter: "blur(20px)",
  borderRadius: "30px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
  zIndex: 1300,
  [theme.breakpoints.up("md")]: { display: "none" },
}));

const ActionButton = styled(IconButton)(() => ({
  flexDirection: "column",
  color: "rgba(255, 255, 255, 0.6)",
  padding: "8px 12px",
  borderRadius: "20px",
  transition: "all 0.2s ease",
  "& svg": { mb: 0.5, transition: "transform 0.2s" },
  "&:active": {
    backgroundColor: "rgba(149, 230, 0, 0.1)",
    color: "#95e600",
    "& svg": { transform: "scale(1.1)" },
  },
}));

const MobileActions = ({ onScrollTo }) => {
  const items = [
    { label: "Home", id: "home", icon: <HomeIcon /> },
    { label: "Progetti", id: "work", icon: <ProjectIcon /> },
    { label: "Contatti", id: "contact", icon: <MailIcon /> },
  ];

  return (
    <GlassBar>
      {items.map((item) => (
        <ActionButton key={item.id} onClick={() => onScrollTo(item.id)}>
          {item.icon}
          <Typography
            sx={{
              fontSize: "0.65rem",
              fontFamily: '"Fira Code", monospace',
              fontWeight: 600,
            }}
          >
            {item.label}
          </Typography>
        </ActionButton>
      ))}
    </GlassBar>
  );
};

export default MobileActions;
