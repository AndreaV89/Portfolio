import { Box, Typography, IconButton } from "@mui/material";
import { SlideIn, FadeUp } from "./Animations";

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
const FacebookIcon = () => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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

const contactInfo = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "andreavannetti.dev@gmail.com",
    link: "mailto:andreavannetti.dev@gmail.com",
    color: "#95e600",
  },
  {
    icon: <PhoneIcon />,
    label: "Telefono",
    value: "+39 347 0857552",
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

      {/* Titolo */}
      <FadeUp delay={0.2}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: "white",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "3.5rem" },
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
            lineHeight: 1.4,
            fontSize: { xs: "1rem", md: "1.5rem" },
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

      {/* Lista Contatti */}
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
                    fontSize: { xs: "0.9rem", md: "1.25rem" },
                    wordBreak: "break-all",
                  }}
                >
                  {info.value}
                </Typography>
              </Box>
            </Box>
          </FadeUp>
        ))}
      </Box>

      {/* Social Links */}
      <FadeUp delay={0.8}>
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
              href="https://www.linkedin.com/in/andrea-vannetti-215105153"
              target="_blank"
              sx={{
                color: "#ccc",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "8px",
                cursor: "none",
                padding: "12px",
                "&:hover": { color: "#0077b5", borderColor: "#0077b5" },
              }}
            >
              <LinkedinIcon />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/andrea.vannetti.3/"
              target="_blank"
              sx={{
                color: "#ccc",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "8px",
                cursor: "none",
                padding: "12px",
                "&:hover": { color: "#1877F2", borderColor: "#1877F2" },
              }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              href="https://www.instagram.com/andrea.vannetti/"
              target="_blank"
              sx={{
                color: "#ccc",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "8px",
                cursor: "none",
                padding: "12px",
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
