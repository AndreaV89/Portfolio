// src/components/Contact.jsx
import { Box, Typography, Button } from "@mui/material";

const Contact = () => {
  return (
    // Rimuoviamo id="contact" e i padding esagerati
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
        <span style={{ color: "#a8e400" }}>03.</span> Initialize Link
      </Typography>

      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", mb: 6, color: "#aaa" }}
      >
        Attualmente sono alla ricerca di nuove opportunità. Che tu abbia una
        domanda o voglia solo salutare, la mia inbox è sempre aperta.
      </Typography>

      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          padding: "30px",
          maxWidth: "500px",
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.95rem",
          position: "relative",
          boxShadow: "0 0 30px rgba(0,0,0,0.3)",
          transition: "border-color 0.3s",
          "&:hover": {
            borderColor: "rgba(168, 228, 0, 0.3)",
          },
        }}
      >
        <div style={{ color: "#c678dd" }}>
          const <span style={{ color: "#e5c07b" }}>contactInfo</span> = {"{"}
        </div>

        <Box sx={{ pl: 4, my: 1 }}>
          <div style={{ marginBottom: "8px" }}>
            <span style={{ color: "#e06c75" }}>email</span>:
            <a
              href="mailto:tuo.email@example.com"
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "#98c379", cursor: "none" }}>
                {" "}
                "tuo.email@example.com"
              </span>
              ,
            </a>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <span style={{ color: "#e06c75" }}>github</span>:
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "#98c379", cursor: "none" }}>
                {" "}
                "github.com/..."
              </span>
              ,
            </a>
          </div>
          <div>
            <span style={{ color: "#e06c75" }}>linkedin</span>:
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "#98c379", cursor: "none" }}>
                {" "}
                "linkedin.com/..."
              </span>
            </a>
          </div>
        </Box>

        <div style={{ color: "#c678dd" }}>{"}"};</div>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Button
          variant="outlined"
          href="mailto:tuo.email@example.com"
          sx={{
            color: "#a8e400",
            borderColor: "#a8e400",
            padding: "15px 40px",
            fontFamily: '"Fira Code", monospace',
            fontSize: "1rem",
            textTransform: "none",
            borderWidth: "2px",
            "&:hover": {
              borderWidth: "2px",
              borderColor: "#a8e400",
              backgroundColor: "rgba(168, 228, 0, 0.1)",
              boxShadow: "0 0 20px rgba(168, 228, 0, 0.2)",
            },
          }}
        >
          Say Hello()
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
