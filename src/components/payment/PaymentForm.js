import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Formulaire CCP
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Name"
            type="text"
            label="Nom et prénom"
            fullWidth
            autoComplete=" "
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="phoneNumber"
            label="Numèro de telephone"
            type="text"
            fullWidth
            autoComplete="  "
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="ccpNumber"
            label="Numero de Compte"
            type="number"
            fullWidth
            autoComplete="1233"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            required
            id="key"
            type="number"
            label="Clé"
            fullWidth
            autoComplete="  "
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            required
            id="code"
            type="password"
            label="Code secret"
            fullWidth
            autoComplete="  "
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
