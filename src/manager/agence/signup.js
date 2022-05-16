import { Box, Card, Paper, Typography, Grid, Snackbar, Alert, Switch, Input, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";


import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginAgence, registerAgence } from "../../redux/agenceSlice";



const SignUp = () => {
    const [showMdp, setShowMdp] = useState(false);
    const handelShowMdp = () => setShowMdp(!showMdp);
    const [pop, setPop] = useState({ show: false, message: "", type: "error" });
    const [formInfo, setFormInfo] = useState({ adminag: "", mdp_adminag: 'adminAgence1', emailagence: "adminAgence1@gmail.com" });
    const [showFormLogin, setShowFormLogin] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelChange = (e) => {
        setFormInfo((prev) => ({ ...formInfo, [e.target.name]: e.target.value }))
    }
    const handelClickSignUp = () => {

        console.log(formInfo);
        if (showFormLogin) { //login 
            if (formInfo.emailagence !== '' && formInfo.mdp_adminag !== "") {

                dispatch(loginAgence({ emailagence: formInfo.emailagence, mdp_adminag: formInfo.mdp_adminag })).then((res) => {
                    if (res) {
                        if (res.payload.error) {
                            console.log(res.payload)
                            setPop({ show: true, message: res.payload.error, type: "error" });
                        } else {
                            // setPop({ show: true, message: "fuck off", type: "success" });
                            navigate('/manager/agence/*');
                        }

                        // window.location.reload();
                    }
                })
            }
        } else { //insc

            dispatch(registerAgence({ adminag: formInfo.adminag, mdp_adminag: formInfo.mdp_adminag, emailagence: formInfo.emailagence }))
                .then(res => {
                    if (res.payload.message) {
                        setPop({ show: true, message: res.payload.message, type: "success" });
                    };
                    if (res.payload.error) {
                        setPop({ show: true, message: res.payload.error, type: "error" });
                    }
                })
                .catch(err => console.log(err));
        }
    };




    return (
        <Box sx={{ background: "#741258", height: "100vh", minHeight: "600px" }}
            display="flex" alignItems="center" justifyContent={"center"}>

            <Box component="form" sx={theme => ({
                width: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "white",
                minHeight: "450px",
                borderRadius: '15px',
                [theme.breakpoints.only('xs')]: {
                    width: "100%",
                }
            })}>
                <Paper
                    sx={theme => ({
                        width: "90%",
                        height: "150px",
                        borderRadius: '15px',
                        backgroundColor: "#2196f3",
                        transform: "translateY(-30px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",


                    })}>
                    <Typography component='h2' variant='h5' fontWeight={"800"} sx={{ color: "white" }}>
                        Sign Up
                    </Typography>
                    <Box>
                        <GoogleIcon size="small" sx={{ color: "white", margin: "0 5px" }} />
                        <FacebookIcon size="small" sx={{ color: "white", margin: "0 5px" }} />
                        <GitHubIcon size="small" sx={{ color: "white", margin: "0 5px" }} />
                    </Box>
                </Paper>


                {/** VERITABLES FORM DE MERDE MTN  */}
                <Box sx={{
                    marginTop: "10px",
                    width: "90%",
                    display: "flex", flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    minHeight: "170px",
                }}>
                    <TextField size="small" fullWidth variant="outlined" name="emailagence" label="E-mail" type={"email"} value={formInfo.emailagence} onChange={handelChange} />

                    {!showFormLogin &&
                        <TextField size="small" fullWidth variant="outlined" name="adminag" label="Admin-pseudo" type={"text"} value={formInfo.adminag} onChange={handelChange} />
                    }
                    <TextField size="small" fullWidth variant="outlined" name="mdp_adminag"
                        label="password" type={showMdp ? "text" : "password"}
                        value={formInfo.mdp_adminag} onChange={handelChange}
                    />

                </Box>
                <Box alignSelf={"start"} display="flex" alignItems={"center"}>
                    <Switch checked={showMdp} onChange={handelShowMdp} />
                    <Typography>show password</Typography>
                </Box>


                <Box sx={{
                    marginTop: 'auto',
                    width: '90%',
                    marginBottom: "20px"

                }}>

                    <Button color="primary" variant="contained" fullWidth
                        onClick={handelClickSignUp}>
                        {showFormLogin ? "Login" : "Sign in"}
                    </Button>

                    <Typography component='p' variant='body2'
                        sx={{
                            marginTop: 2, cursor: 'pointer', '&:hover': {
                                color: "#2196f3"
                            }
                        }}
                        onClick={() => { setShowFormLogin(!showFormLogin) }}>
                        {showFormLogin ? 'Creer votre compte ' : 'Vous avez un compte ? connectez vous'}
                    </Typography>

                </Box>



            </Box>

            {/**Button retour a l'acceuil */}


            <Button color="info" variant="contained"
                sx={{ position: "absolute", top: 15, right: 15, textTransform: "none" }}>
                <Link to='/' >
                    Quit
                </Link>
            </Button>


            <>
                <Snackbar open={pop.show}
                    anchorOrigin={{ vertical: 'bottom', horizontal: "left" }}
                    autoHideDuration={3000}
                >
                    <Alert onClose={() => { setPop({ ...pop, show: false }) }} severity={pop.type}
                        sx={{
                            width: "300px",
                            color: "black"
                        }} >
                        {pop.message}
                    </Alert>
                </Snackbar>
            </>


        </Box >


    )
};

export default SignUp; 