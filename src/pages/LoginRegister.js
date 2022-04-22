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

import "../components/styles/RegisterLogin.css";


import NavBar from "../components/navbar";
import Footer from "../components/footer";
import BanniereT2 from "../components/banniereType2";
const theme = createTheme();

const RegisterForm = () => {
  const [showMDP, setShowMDP] = useState(false);

  const handleChangeSwitch = (event) => {
    setShowMDP(event.target.checked);
    console.log(showMDP);
  };
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
  };
  return (

    <Box
      component="form"
      noValidate
      onSubmit={handleSubmitRegister}
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            required
            fullWidth
            id="NomRegister"
            label="Nom"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="PrenomRegister"
            label="Prénom"
            name="PrenomRegister"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Adresse E-mail"
            errorMessage="adresse e-mail invalide"
            name="email"
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="NumeroTelephone"
            label="Numéro de téléphone"
            type="tel"
            id="NumTelResgister"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type={showMDP ? "text" : "password"}
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch checked={showMDP} onChange={handleChangeSwitch} />}
            label="Afficher le mot de passe"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const LoginForm = () => {
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmitLogin}
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Adresse e-mail"
        name="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="motDePasse"
        label="Mot de passe"
        type="password"
        id="motDePasse"
      />
    </Box>
  );
};

const LoginRegister = () => {
  const [login, setLogin] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  return (
    <>
      <NavBar />
      <BanniereT2 title="Inscription" />
      <Container maxWidth="lg">
        <Grid container component="main" sx={{ marginY: "10vh" }}>
          <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#3a78c9", width: 84, height: 84 }}>
                {login ? (
                  <LockOutlinedIcon fontSize="large" />
                ) : (
                  <AccountCircleIcon fontSize="large" />
                )}
              </Avatar>
              <Typography variant="h4">
                {login ? "Connexion" : "Créer un compte"}
              </Typography>

              {login ? <LoginForm /> : <RegisterForm />}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#263a49", width: "50%" }}
                onclick={() => setShowSuccessAlert(!showSuccessAlert)}
              >
                {login ? "Se connecter" : "S'inscrire"}
              </Button>
              {login ? (
                <Grid container>
                  <Grid item xs>
                    <Link sx={{ cursor: "pointer" }} variant="body2">
                      mot de passe oublié?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography>Vous êtes nouveau?</Typography>{" "}
                    <Link
                      sx={{ cursor: "pointer" }}
                      variant="body2"
                      onClick={() => setLogin(!login)}
                    >
                      Inscrivez vous
                    </Link>
                  </Grid>
                </Grid>
              ) : (
                <Grid container justifyContent="center">
                  <Grid
                    item
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography>Vous possédez déja un compte?</Typography>{" "}
                    <Link
                      sx={{ cursor: "pointer" }}
                      variant="body2"
                      onClick={() => setLogin(!login)}
                    >
                      Connectez-vous
                    </Link>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage: "url( '../../assets/RegisterLoginImage.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
export default LoginRegister;
