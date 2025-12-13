import { Box, Typography, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
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
        {" Initialize Link />"}
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
          padding: { xs: "20px", md: "30px" },
          maxWidth: "500px",
          width: "100%",
          fontFamily: '"Fira Code", monospace',
          fontSize: { xs: "0.85rem", md: "0.95rem" },
          position: "relative",
          boxShadow: "0 0 30px rgba(0,0,0,0.3)",
          transition: "border-color 0.3s",
          overflowX: "auto",
          "&:hover": {
            borderColor: "rgba(168, 228, 0, 0.3)",
          },
        }}
      >
        <div>
          <span style={{ color: "#559ad3" }}>const</span>{" "}
          <span style={{ color: "#dcdcaa" }}>ContactInfo</span>
          <span style={{ color: "#FFF" }}> = </span>
          <span style={{ color: "#fdd600" }}>{"()"}</span>
          <span style={{ color: "#5293c8" }}> {"=>"}</span>
          <span style={{ color: "#fdd600" }}> {"{"}</span>
        </div>

        <Box sx={{ pl: { xs: 2, md: 4 }, my: 1 }}>
          {/* Email */}
          <div style={{ marginBottom: "8px" }}>
            <span style={{ color: "#95d2f2" }}>email</span>:
            <a
              href="mailto:a.vannetti08@gmail.com"
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              <span style={{ color: "#ce9178", cursor: "none" }}>
                {" "}
                "a.vannetti08@gmail.com"
              </span>
              ,
            </a>
          </div>

          {/* Telefono */}
          <div style={{ marginBottom: "8px", whiteSpace: "nowrap" }}>
            <span style={{ color: "#95d2f2" }}>Tel.</span>:
            <a
              href="tel:+393470587552"
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              <span style={{ color: "#ce9178", cursor: "none" }}>
                {" "}
                "(+39) 347 0587552"
              </span>
              ,
            </a>
          </div>

          {/* Linkedin */}
          <div>
            <span style={{ color: "#95d2f2" }}>linkedin</span>:
            <a
              href="www.linkedin.com/in/andrea-vannetti-215105153"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "#ce9178", cursor: "none" }}>
                {" "}
                "linkedin.com/in/andrea-vannetti"
              </span>
            </a>
          </div>
        </Box>

        <div style={{ color: "#fff" }}>
          <span style={{ color: "#fdd600" }}>{"}"}</span>;
        </div>
      </Box>

      <Box sx={{ mt: 6, display: { xs: "none", md: "block" } }}>
        <Button
          variant="outlined"
          href="mailto:a.vannetti08@gmail.com"
          sx={{
            cursor: "none",
            color: "#95e600",
            borderColor: "#95e600",
            padding: "15px 40px",
            fontFamily: '"Fira Code", monospace',
            fontSize: "1rem",
            textTransform: "none",
            borderWidth: "2px",
            "&:hover": {
              borderWidth: "2px",
              borderColor: "#95e600",
              backgroundColor: "rgba(168, 228, 0, 0.1)",
              boxShadow: "0 0 20px rgba(168, 228, 0, 0.2)",
            },
          }}
        >
          Contattami()
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
