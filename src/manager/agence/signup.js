import { Box, Card, Paper, Typography, Grid, MuiLink, Switch, Input, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";



import { useState } from "react";



const SignUp = () => {
    const [showMdp, setShowMdp] = useState(false);
    const handelShowMdp = () => setShowMdp(!showMdp);

    return (
        <Box sx={{ background: "darkcyan", height: "100vh", minHeight: "600px" }}
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
                    minHeight: "150px",
                }}>
                    <TextField size="small" fullWidth variant="outlined" label="email" type={"email"} />
                    <TextField size="small" fullWidth variant="outlined" label="password" type={showMdp ? "text" : "password"} />

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

                    <Button color="primary" variant="contained" fullWidth>
                        Sign up
                    </Button>

                </Box>


            </Box>

            {/**Button retour a l'acceuil */}


            <Button color="info" variant="contained"
                sx={{ position: "absolute", top: 15, right: 15, textTransform: "none" }}>
                <Link to='/' >
                    Quit
                </Link>
            </Button>



        </Box >


    )
};

export default SignUp; 