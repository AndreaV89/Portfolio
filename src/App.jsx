// src/App.jsx
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box sx={{ p: 4 }}>
      {/* Test Titolo Sans-Serif */}
      <Typography variant="h2" component="h1" gutterBottom>
        Ciao, sono il Developer
      </Typography>

      {/* Test Sottotitolo Monospaced Verde */}
      <Typography variant="subtitle1">01 &lt;Full Stack Dev /&gt;</Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        Benvenuto nel mio Source Code Spotlight.
      </Typography>
    </Box>
  );
}

export default App;
