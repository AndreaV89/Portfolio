// Prova
import { Box, Typography, Grid, Chip, IconButton } from "@mui/material";

const projects = [
  {
    id: "01",
    name: "Succulentarte",
    description:
      "E-commerce e catalogo di piante succulente con Dashboard di gestione.",
    stack: "React / Node.js / Vercel",
    image: "/social-preview.jpg",
    link: "https://succulentarte.com",
    status: "Live",
  },
  {
    id: "02",
    name: "Cresta Dell'Angiolo",
    description:
      "Sito web per un cammino escursionistico nel cuore del Chianti.",
    stack: "Wordpress / React",
    image: "/social-preview.jpg",
    link: "https://crestadellangiolo.it",
    status: "Dev",
  },
  {
    id: "03",
    name: "Radici in Chianti",
    description:
      "Portale per associazione di promozione sociale e territoriale.",
    stack: "React / Wordpress",
    image: "/social-preview.jpg",
    link: "#",
    status: "Prototyping",
  },
  {
    id: "04",
    name: "Portfolio V1",
    description: "La prima versione di questo sito portfolio personale.",
    stack: "React / MaterialUI",
    image: "/social-preview.jpg",
    link: "#",
    status: "Legacy",
  },
];

const ProjectListProva = () => {
  return (
    <Box sx={{ mt: 4 }}>
      {/* Titolo */}
      <Typography
        variant="h3"
        sx={{
          color: "white",
          mb: 6,
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        I miei <span style={{ color: "#95e600" }}>progetti</span>
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            {/* Card Progetto */}
            <Box
              className="hover-target"
              sx={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                transition: "border-color 0.3s, transform 0.3s",
                "&:hover": {
                  borderColor: "#95e600",
                  //transform: "translateY(-5px)",
                  "& .project-img": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              {/* 1. AREA IMMAGINE */}
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "250px",
                }}
              >
                {/* Immagine */}
                <Box
                  component="img"
                  src={project.image}
                  alt={project.name}
                  className="project-img"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Icona Link */}
                <Box
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(4px)",
                    borderRadius: "50%",
                    width: 35,
                    height: 35,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    //border: "1px solid rgba(255,255,255,0.2)",
                    transition: "all 0.2s",
                    cursor: "none",
                    "&:hover": {
                      backgroundColor: "#95e600",
                      color: "black",
                      borderColor: "#95e600",
                    },
                  }}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </Box>
              </Box>

              {/* 2. CONTENUTO */}
              <Box sx={{ p: 3 }}>
                {/* Titolo */}
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                >
                  {project.name}
                </Typography>

                {/* Descrizione */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#aaa",
                    mb: 3,
                    lineHeight: 1.6,
                    minHeight: "3em",
                  }}
                >
                  {project.description}
                </Typography>

                {/* Stack */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.stack.split(" / ").map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(149, 230, 0, 0.1)",
                        color: "#95e600",
                        fontFamily: '"Fira Code", monospace',
                        border: "1px solid rgba(149, 230, 0, 0.2)",
                        fontSize: "0.75rem",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectListProva;
