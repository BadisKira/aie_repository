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
import { loginClient } from "../../redux/clientSlice";


const LoginForm = (props) => {
  const { loginInfo, onSubmitLogin, onChangeLogin } = props;

  return (
    <Box
      component="form"
      noValidate
      onSubmit={onSubmitLogin}
      sx={{
        mt: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="emailLogin"
        label="Adresse e-mail"
        name="email"
        autoFocus
        value={loginInfo.email}
        onChange={onChangeLogin}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="mdp"
        label="Mot de passe"
        type="password"
        id="motDePasseLogin"
        value={loginInfo.mdp}
        onChange={onChangeLogin}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "#263a49",
          width: "50%",
          textAlign: "center",
        }}
      >
        Se connecter
      </Button>
    </Box>
  );
};

export default LoginForm;
