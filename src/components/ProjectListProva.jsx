import { Box, Typography, Chip } from "@mui/material";
import { StaggerContainer, StaggerItem, FadeUp } from "./Animations";

const projects = [
  {
    id: "01",
    name: "Succulentarte",
    description: "Catalogo di piante succulente con Dashboard di gestione.",
    stack: "React / Node.js / Vercel",
    image: "/succulentarte.jpg",
    link: "https://succulentarte.com",
    status: "Live",
  },
  {
    id: "02",
    name: "Cresta Dell'Angiolo",
    description:
      "Pagina Web della Cresta dell'Angiolo, cammino escursionistico sui monti del Chianti",
    stack: "Wordpress / React",
    image: "/cresta-angiolo.jpg",
    link: "https://crestadellangiolo.it",
    status: "Developing",
  },
  {
    id: "03",
    name: "Radici in Chianti",
    description:
      "Portale per associazione di promozione sociale e territoriale.",
    stack: "React / Wordpress",
    image: "/radici.jpg",
    link: "#",
    status: "Prototyping",
  },
  {
    id: "04",
    name: "Casanova di Bricciano",
    description:
      "Sito web per una azienda vinicola tra le colline di Gaiole in Chianti",
    stack: "Wordpress",
    image: "/casanova-bricciano.jpg",
    link: "https://www.casanovadibricciano.it/",
    status: "Live",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Live":
      return {
        bg: "rgba(149, 230, 0, 0.2)",
        color: "#95e600",
        border: "#95e600",
      }; // Verde Neon
    case "Developing":
      return {
        bg: "rgba(255, 193, 7, 0.2)",
        color: "#ffc107",
        border: "#ffc107",
      }; // Giallo
    case "Prototyping":
      return {
        bg: "rgba(100, 181, 246, 0.2)",
        color: "#64b5f6",
        border: "#64b5f6",
      }; // Azzurro
    case "Legacy":
      return {
        bg: "rgba(158, 158, 158, 0.2)",
        color: "#bdbdbd",
        border: "#bdbdbd",
      }; // Grigio
    default:
      return { bg: "rgba(255, 255, 255, 0.1)", color: "#fff", border: "#fff" };
  }
};

const ProjectListProva = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <FadeUp>
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
      </FadeUp>

      <StaggerContainer staggerAmount={0.2}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          {projects.map((project) => {
            const statusStyle = getStatusColor(project.status);

            const showLink =
              !["Developing", "Prototyping"].includes(project.status) &&
              project.link &&
              project.link !== "#";

            return (
              <StaggerItem key={project.id}>
                <Box
                  className="hover-target"
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    overflow: "hidden",
                    transition: "border-color 0.3s, transform 0.3s",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    "&:hover": {
                      borderColor: "#95e600",
                      "& .project-img": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  {/* AREA IMMAGINE */}
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: "250px",
                      flexShrink: 0,
                    }}
                  >
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

                    {showLink && (
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
                    )}
                  </Box>
                  {/* AREA CONTENUTO */}
                  <Box
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    {/* HEADER: Titolo + Status Chip */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 1,
                        gap: 1,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 700, color: "#fff", lineHeight: 1.2 }}
                      >
                        {project.name}
                      </Typography>

                      <Chip
                        label={project.status}
                        size="small"
                        sx={{
                          backgroundColor: statusStyle.bg,
                          color: statusStyle.color,
                          border: `1px solid ${statusStyle.border}`,
                          fontFamily: '"Fira Code", monospace',
                          fontWeight: "bold",
                          fontSize: "0.65rem",
                          height: "24px",
                          flexShrink: 0, // Impedisce alla chip di schiacciarsi
                        }}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#aaa",
                        mb: 3,
                        lineHeight: 1.6,
                        wordBreak: "break-word",
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: "auto",
                      }}
                    >
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
              </StaggerItem>
            );
          })}
        </Box>
      </StaggerContainer>
    </Box>
  );
};

export default ProjectListProva;
