import React from "react";
import { Box } from "@mui/material";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

function ModifyForm() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            name="Nom"
            required
            fullWidth
            id="NomModifier"
            label="Nom"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            required
            fullWidth
            id="PrenomModifier"
            label="Prénom"
            name="Prenom"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            required
            fullWidth
            id="emailModifier"
            label="Adresse E-mail"
            name="email"
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            required
            fullWidth
            name="NumeroTelephone"
            label="Numéro de téléphone"
            type="tel"
            id="NumTelModifier"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            required
            fullWidth
            name="MDP"
            label="Mot de passe"
            id="passwordModifier"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "#263a49", width: "50%" }}
      >
        Enregistrer
      </Button>
    </Box>
  );
}

export default ModifyForm;
