import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

const PrivacyModal = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="paper"
      sx={{ zIndex: 10000 }}
      PaperProps={{
        sx: {
          backgroundColor: "#1a1a1a",
          color: "white",
          border: "1px solid #333",
          minWidth: { xs: "90%", md: "500px" },
          maxWidth: "600px",
          borderRadius: "12px",
          backgroundImage: "none",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontFamily: '"Fira Code", monospace',
          color: "#95e600",
          borderBottom: "1px solid #333",
        }}
      >
        // Privacy_Policy.txt
      </DialogTitle>

      <DialogContent dividers sx={{ borderColor: "#333" }}>
        <Box
          sx={{
            color: "#ccc",
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.9rem",
            lineHeight: 1.6,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              mt: 1,
              mb: 1,
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            1. Titolare del Trattamento
          </Typography>
          <Typography paragraph>
            Il sito è gestito da Andrea Vannetti. Per qualsiasi informazione,
            puoi contattarmi all'indirizzo email indicato nella sezione
            contatti.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "white",
              mt: 2,
              mb: 1,
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            2. Dati Raccolti e Finalità
          </Typography>
          <Typography paragraph>
            Questo sito è un portfolio statico e{" "}
            <strong>non raccoglie direttamente dati personali</strong> (non ci
            sono form di registrazione, newsletter o database).
            <br />
            <br />
            Tuttavia, per il funzionamento tecnico, vengono utilizzati servizi
            terzi che potrebbero raccogliere log di sistema (es. Indirizzo IP):
          </Typography>
          <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li>
              <strong>Vercel:</strong> Hosting provider del sito (necessario per
              visualizzare la pagina).
            </li>
            <li>
              <strong>Google Fonts:</strong> Per la visualizzazione dei
              caratteri tipografici.
            </li>
          </ul>

          <Typography
            variant="h6"
            sx={{
              color: "white",
              mt: 2,
              mb: 1,
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            3. Cookie Policy
          </Typography>
          <Typography paragraph>
            Questo sito <strong>non utilizza cookie di profilazione</strong>,
            pubblicitari o di tracciamento analitico (come Google Analytics).
            Pertanto, non è necessario alcun banner di consenso ai sensi della
            normativa cookie vigente.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "white",
              mt: 2,
              mb: 1,
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            4. Diritti dell'utente
          </Typography>
          <Typography paragraph>
            In qualità di utente, hai il diritto di richiedere informazioni sui
            dati trattati (se presenti) scrivendo all'indirizzo email di
            contatto.
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions
        sx={{ p: 2, borderTop: "1px solid #333", backgroundColor: "#151515" }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          cursor="none"
          sx={{
            color: "#95e600",
            borderColor: "#95e600",
            fontFamily: '"Fira Code", monospace',
            cursor: "none",
            "&:hover": {
              backgroundColor: "rgba(168, 228, 0, 0.1)",
              borderColor: "#95e600",
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyModal;
