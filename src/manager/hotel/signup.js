import { Box, Card, Paper, Typography, Grid, MuiLink, Switch, Input, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { loginManagerHotel } from "../../redux/hotelSlice";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import PopUp from "../../components/popUp";




const SignUp = () => {
    const [showMdp, setShowMdp] = useState(false);
    const handelShowMdp = () => setShowMdp(!showMdp);
    const [formInfo, setFormInfo] = useState({ adminh: "", passwordh: 'Admin Hotel 1', emailh: "Adminhotel17@gmail.com" });
    const [showFormLogin, setShowFormLogin] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const hotelData = useSelector(state => state.hotel);


    const handelClickSignUp = () => {

        console.log(formInfo);
        if (showFormLogin) { //login 
            if (formInfo.emailh !== '' && formInfo.passwordh !== "") {

                dispatch(loginManagerHotel({ emailh: formInfo.emailh, passwordh: formInfo.passwordh })).then((res) => {
                    if (res) {
                        navigate('/manager/hotel/sign-up');
                        //window.location.reload();
                    }
                })
            }
        } else { //insc
            axios.post('http://localhost:80/bookAndGo/api/ADMIN/adminhotel/registerAdminh', { adminh: formInfo.adminh, passwordh: formInfo.passwordh, emailh: formInfo.emailh })
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err));
        }
    };


    useEffect(() => {
        console.log(hotelData);
    }, [hotelData]);

    const handelChange = (e) => {
        setFormInfo((prev) => ({ ...formInfo, [e.target.name]: e.target.value }))
    }

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
                        {showFormLogin ? "Login" : "Sign in"}
                    </Typography>
                    <Box>
                        <GoogleIcon size="small" sx={{ color: "white", margin: "0 5px" }} />
                        <FacebookIcon size="small" sx={{ color: "white", margin: "0 5px" }} />
                        <GitHubIcon size="small" sx={{ color: "white", margin: "0 5px" }} />
                    </Box>
                </Paper>


                <Box sx={{
                    marginTop: "10px",
                    width: "90%",
                    display: "flex", flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    minHeight: "170px",
                }}>
                    <TextField size="small" fullWidth variant="outlined" name="emailh" label="E-mail" type={"email"} value={formInfo.emailh} onChange={handelChange} />

                    {!showFormLogin &&
                        <TextField size="small" fullWidth variant="outlined" name="adminh" label="Admin-pseudo" type={"text"} value={formInfo.adminh} onChange={handelChange} />
                    }
                    <TextField size="small" fullWidth variant="outlined" name="passwordh"
                        label="password" type={showMdp ? "text" : "password"}
                        value={formInfo.passwordh} onChange={handelChange}
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




            {/* {hotelData.etat === "rejected" &&
                <PopUp type="error" text={hotelData.message} />
            } */}

        </Box >


    )
};

export default SignUp; 