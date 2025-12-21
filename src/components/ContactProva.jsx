import { Box, Typography, IconButton } from "@mui/material";
import { SlideIn, FadeUp } from "./Animations";

// --- ICONE SVG ---
const MailIcon = () => (
  <svg
    width="24"
    height="24"
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
const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MapPinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const GithubIcon = () => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = () => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// --- DATI ---
const contactInfo = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "tuaemail@gmail.com", // CAMBIA QUI
    link: "mailto:tuaemail@gmail.com",
    color: "#95e600",
  },
  {
    icon: <PhoneIcon />,
    label: "Telefono",
    value: "+39 3470857552", // CAMBIA QUI
    link: "tel:+393470587552",
    color: "#4dabf5",
  },
  {
    icon: <MapPinIcon />,
    label: "Dove sono",
    value: "Radda in Chianti (SI), Toscana, Italia",
    link: "https://maps.app.goo.gl/cKSLrChpX3xPmSNu6",
    color: "#ff9100",
  },
];

const Contact = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden", pb: 10 }}>
      {/* 1. Header Sezione */}
      <SlideIn>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            fontSize: { xs: "1.5rem", md: "2.125rem" },
          }}
        >
          <span
            style={{ color: "#95e600", fontFamily: '"Fira Code", monospace' }}
          >
            03.
          </span>{" "}
          {" Contact />"}
        </Typography>
      </SlideIn>

      <FadeUp delay={0.2}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: "white",
            mb: 2,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Mettiti in contatto
        </Typography>
      </FadeUp>

      <FadeUp delay={0.3}>
        <Typography
          variant="h5"
          sx={{
            color: "#e0e0e0",
            mb: 2,
            fontWeight: 500,
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Sono sempre interessato a nuove opportunità e progetti interessanti.
          Parliamo di come possiamo collaborare!
        </Typography>
      </FadeUp>

      <FadeUp delay={0.4}>
        <Typography
          variant="body1"
          sx={{
            color: "#888",
            mb: 8,
            maxWidth: "600px",
            lineHeight: 1.8,
          }}
        >
          Al momento sono disponibile per lavori freelance e opportunità a tempo
          pieno. Che tu abbia un progetto in mente o voglia semplicemente
          parlare di tecnologia, mi piacerebbe sentirti.
        </Typography>
      </FadeUp>

      {/* 2. LISTA CONTATTI (Verticale) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mb: 8,
          maxWidth: "800px",
        }}
      >
        {contactInfo.map((info, index) => (
          <FadeUp key={index} delay={0.5 + index * 0.1}>
            <Box
              component={info.link ? "a" : "div"}
              href={info.link}
              target={info.link ? "_blank" : undefined}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1.5,
                width: "100%",
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "none",
                "&:hover": info.link
                  ? {
                      borderColor: info.color,
                      backgroundColor: "rgba(255,255,255,0.05)",
                      transform: "translateX(10px)",
                    }
                  : {},
              }}
            >
              {/* ICONA A SINISTRA */}
              <Box
                sx={{
                  color: info.color,
                  mr: 3,
                  p: 1.5,
                  borderRadius: "12px",
                  backgroundColor: `${info.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "50px",
                  height: "50px",
                }}
              >
                {info.icon}
              </Box>

              {/* TESTO A DESTRA */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    fontWeight: 700,
                    mb: 0.5,
                  }}
                >
                  {info.label}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    fontFamily: '"Fira Code", monospace',
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    wordBreak: "break-all", // Evita che le mail lunghe rompano il layout su mobile
                  }}
                >
                  {info.value}
                </Typography>
              </Box>
            </Box>
          </FadeUp>
        ))}
      </Box>

      {/* 3. Footer Social */}
      <FadeUp delay={0.8}>
        {/* MODIFICA: "center" invece di "flex-start" */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#95e600",
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2,
              fontFamily: '"Fira Code", monospace',
            }}
          >
            SEGUIMI
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              href="https://github.com/TuoUsername"
              target="_blank"
              sx={{
                color: "#ccc",
                border: "1px solid rgba(255,255,255,0.2)",
                "&:hover": { color: "#95e600", borderColor: "#95e600" },
              }}
            >
              <GithubIcon />
            </IconButton>

            <IconButton
              href="https://linkedin.com/in/TuoUsername"
              target="_blank"
              sx={{
                color: "#ccc",
                border: "1px solid rgba(255,255,255,0.2)",
                "&:hover": { color: "#0077b5", borderColor: "#0077b5" },
              }}
            >
              <LinkedinIcon />
            </IconButton>

            <IconButton
              href="https://instagram.com/TuoUsername"
              target="_blank"
              sx={{
                color: "#ccc",
                border: "1px solid rgba(255,255,255,0.2)",
                "&:hover": { color: "#E1306C", borderColor: "#E1306C" },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </FadeUp>
    </Box>
  );
};

export default Contact;
