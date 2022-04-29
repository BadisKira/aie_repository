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
import RegisterForm from "../components/RegisterLogin/RegisterForm";
import LoginForm from "../components/RegisterLogin/LoginForm";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import BanniereT2 from "../components/banniereType2";
import { loginClient, signupClient } from "../redux/clientSlice";
import { useDispatch } from "react-redux";
const theme = createTheme();

const LoginRegister = () => {
  const [login, setLogin] = useState(true);
  const [showMDP, setShowMDP] = useState(false);
  const [errInRegisterForm, seterrInRegisterForm] = useState(false);
  const [errInLoginForm, setErrInLoginForm] = useState(false);
  const dispatch = useDispatch();
  const [registerInfo, setRegisterInfo] = useState({
    nom: "",
    prenom: "",
    email: "",
    numTel: "",
    mdp: "",
  });

  const [registerError, setRegisterError] = useState({
    nom: "",
    prenom: "",
    numTel: "",
    email: "",
  });

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    mdp: "",
  });

  //Mise à jours des champs de connexion
  const handleChangeLogin = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
    console.log(value);
  };

  //Envie du formulaire de connexion
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    // dispatch(loginClient(loginInfo));
    console.log("eren yeager login");

  };

  //mise à jour des champs à chaque changement
  const handleChangeRegister = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setRegisterError({ nom: "", prenom: "", numTel: "", email: "" });
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  //afficher or masqu le mot de passe
  const handleChangeSwitch = (event) => {
    setShowMDP(event.target.checked);
    console.log(showMDP);
  };

  // envoie du formulaire
  const handleSubmitRegister = (event) => {
    event.preventDefault();

    console.log("eren yeager register");

    setRegisterError({ nom: "", prenom: "", numTel: "", email: "" });

    let regNom = new RegExp(/^[A-Za-z]+$/).test(registerInfo.nom);
    let regPrenom = new RegExp(/^[A-Za-z]+$/).test(registerInfo.prenom);
    let regNumTel = new RegExp(/^\d*$/).test(registerInfo.numTel);
    let regEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    ).test(registerInfo.email);

    if (!regNom) {
      seterrInRegisterForm(true);
      setRegisterError((prevstate) => ({
        ...prevstate,
        nom: "le nom doit contenir que des chaines de caractères",
      }));
    }

    if (!regPrenom) {
      seterrInRegisterForm(true);
      setRegisterError((prevstate) => ({
        ...prevstate,
        prenom: "le prénom doit contenir que des chaines de caractères",
      }));
    }

    if (!regNumTel) {
      seterrInRegisterForm(true);
      setRegisterError((prevstate) => ({
        ...prevstate,
        numTel: "Veuillez entrer un numéro de telephone email valide",
      }));
    }

    if (!regEmail) {
      seterrInRegisterForm(true);
      setRegisterError((prevstate) => ({
        ...prevstate,
        email: "Veuillez entrer une adresse email valide",
      }));
    };

    //UGH MOST OF THESE HAVE TO MOVE OUT TO THE PARENT COMPONENT
    if (!errInRegisterForm) {
      dispatch(signupClient(registerInfo));
    }


    console.log(registerInfo);
    console.log(registerError);
  };

  const [banniereText, setBanniereText] = useState('Connexion');

  return (
    <>
      <NavBar />
      <BanniereT2 title={banniereText} />
      <Container maxWidth="lg">
        <Grid container component="main" sx={{ marginY: "10vh" }}>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
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

              {login ? (
                <LoginForm
                  loginInfo={loginInfo}
                  onSubmitLogin={handleSubmitLogin}
                  onChangeLogin={handleChangeLogin}
                />
              ) : (
                <RegisterForm
                  registerError={registerError}
                  registerInfo={registerInfo}
                  showMDP={showMDP}
                  onChangeRegister={handleChangeRegister}
                  onSubmitRegister={handleSubmitRegister}
                  onChangeSwitchRegister={handleChangeSwitch}
                />
              )}

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
                      onClick={() => { setLogin(!login); setBanniereText('Inscription') }}
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
                      onClick={() => { setLogin(!login); setBanniereText('Connexion') }}
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
