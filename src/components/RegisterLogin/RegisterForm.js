import { React, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const RegisterForm = (props) => {
  const {
    registerError,
    registerInfo,
    showMDP,
    onSubmitRegister,
    onChangeRegister,
    onChangeSwitchRegister,
  } = props;

  return (
    <Box
      component="form"
      noValidate
      onSubmit={onSubmitRegister}
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
            name="nom"
            required
            fullWidth
            id="NomRegister"
            label="Nom"
            autoFocus
            error={Boolean(registerError.nom)}
            helperText={registerError.nom}
            value={registerInfo.nom}
            onChange={onChangeRegister}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="PrenomRegister"
            label="Prénom"
            name="prenom"
            error={Boolean(registerError.prenom)}
            helperText={registerError.prenom}
            value={registerInfo.Prenom}
            onChange={onChangeRegister}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="emailRegister"
            label="Adresse E-mail"
            errormessage="adresse e-mail invalide"
            name="email"
            type="email"
            error={Boolean(registerError.email)}
            helperText={registerError.email}
            value={registerInfo.email}
            onChange={onChangeRegister}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="numTel"
            label="Numéro de téléphone"
            type="tel"
            id="NumTelResgister"
            error={Boolean(registerError.numTel)}
            helperText={registerError.numTel}
            value={registerInfo.numTel}
            onChange={onChangeRegister}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="mdp"
            label="Mot de passe"
            type={showMDP ? "text" : "password"}
            id="password"
            value={registerInfo.mdp}
            onChange={onChangeRegister}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch checked={showMDP} onChange={onChangeSwitchRegister} />
            }
            label="Afficher le mot de passe"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "#263a49", width: "50%" }}
      >
        S'inscrire
      </Button>
    </Box>
  );
};

export default RegisterForm;
