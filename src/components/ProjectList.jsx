// src/components/ProjectList.jsx
import { useState } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

// 1. I DATI DEI PROGETTI (Modifica questi in futuro!)
const projects = [
  {
    id: "01",
    name: "Project_Alpha_Ecommerce",
    type: "Web App",
    stack: "React / Node.js / MongoDB",
    progress: 100, // 100% = Completato
    status: "Deployed", // Stato testo
    description: "Piattaforma e-commerce completa con carrello e pagamenti.",
  },
  {
    id: "02",
    name: "Dashboard_Analytics_Pro",
    type: "Dashboard",
    stack: "Vue.js / Firebase",
    progress: 75,
    status: "In Development",
    description:
      "Pannello di controllo per visualizzazione dati in tempo reale.",
  },
  {
    id: "03",
    name: "Mobile_Chat_System",
    type: "Mobile",
    stack: "React Native / Socket.io",
    progress: 45,
    status: "Prototyping",
    description: "App di messaggistica istantanea crittografata.",
  },
];

const ProjectList = () => {
  // Stato per sapere su quale progetto siamo
  const [hoveredProject, setHoveredProject] = useState(null);
  // Stato per la posizione del tooltip (coordinate X e Y)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Funzione che aggiorna la posizione mentre muovi il mouse
  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <Box
      sx={{ mt: 8, position: "relative" }}
      onMouseMove={handleMouseMove} // Ascoltiamo il mouse su tutta la lista
      onMouseLeave={() => setHoveredProject(null)} // Nascondi tooltip se esci dalla lista
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: '"Fira Code", monospace', color: "#666", mb: 4 }}
      >
        ~/projects &gt; ls -la
      </Typography>

      {/* 2. LA LISTA DEI PROGETTI */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {projects.map((project) => (
          <Box
            key={project.id}
            onMouseEnter={() => setHoveredProject(project)}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "15px 20px",
              borderLeft: "2px solid transparent",
              transition: "all 0.2s ease",
              cursor: "none", // Importante: usiamo il tuo cursore custom
              "&:hover": {
                background: "rgba(255, 255, 255, 0.03)", // Leggero sfondo al passaggio
                borderLeft: "2px solid #a8e400", // Barra verde a sinistra
                paddingLeft: "30px", // Spostamento verso destra
              },
            }}
          >
            {/* Numero ID (01, 02...) */}
            <Typography
              sx={{
                fontFamily: '"Fira Code", monospace',
                color: "#666",
                mr: 3,
                fontSize: "0.9rem",
              }}
            >
              {project.id}
            </Typography>

            {/* Nome del Progetto */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color:
                  hoveredProject?.id === project.id ? "#a8e400" : "#e0e0e0", // Diventa verde se selezionato
                fontFamily: '"Inter", sans-serif',
                letterSpacing: "-0.02em",
              }}
            >
              {project.name}
            </Typography>

            {/* Estensione finta .js/.tsx per stile */}
            <Typography
              sx={{
                ml: 1,
                color: "#444",
                fontFamily: '"Fira Code", monospace',
              }}
            >
              .tsx
            </Typography>
          </Box>
        ))}
      </Box>

      {/* 3. IL TOOLTIP FLOTTANTE (Appare solo se hoveredProject esiste) */}
      {hoveredProject && (
        <Box
          sx={{
            position: "fixed",
            // Posizioniamo il tooltip 40px a destra e 20px sotto il mouse
            left: mousePos.x + 40,
            top: mousePos.y + 20,
            width: "300px",
            backgroundColor: "rgba(10, 10, 10, 0.95)", // Quasi nero
            border: "1px solid #333",
            backdropFilter: "blur(10px)",
            padding: 3,
            zIndex: 9999, // Sopra a tutto
            pointerEvents: "none", // Il mouse non ci interagisce
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Intestazione Tooltip */}
          <Typography
            variant="caption"
            sx={{
              color: "#666",
              fontFamily: '"Fira Code", monospace',
              mb: 1,
              display: "block",
            }}
          >
            // Properties
          </Typography>

          <Typography variant="h6" sx={{ color: "white", mb: 0.5 }}>
            {hoveredProject.type}
          </Typography>

          <Typography variant="body2" sx={{ color: "#aaa", mb: 2 }}>
            {hoveredProject.description}
          </Typography>

          {/* Tech Stack */}
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="caption"
              sx={{ color: "#a8e400", fontFamily: '"Fira Code", monospace' }}
            >
              Stack:
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {hoveredProject.stack}
            </Typography>
          </Box>

          {/* Barra di Avanzamento */}
          <Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}
            >
              <Typography variant="caption" sx={{ color: "#666" }}>
                Status: {hoveredProject.status}
              </Typography>
              <Typography variant="caption" sx={{ color: "#a8e400" }}>
                {hoveredProject.progress}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={hoveredProject.progress}
              sx={{
                height: 4,
                backgroundColor: "#333",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#a8e400",
                },
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProjectList;
