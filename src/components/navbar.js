import {
    Container,
    AppBar,
    Grid,
    Button,
    Box,
    Avatar,
    IconButton,
} from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./styles/navbar.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientSlice, logoutClient } from "../redux/clientSlice";
import Cookies from "js-cookie";


const SideNav = ({ showSideNav, setShowSideNav, dispatch, navigate }) => {
    const clientData = useSelector(state => state.client);



    return (
        <div className={showSideNav ? "side-nav side-nav-shown" : "side-nav"}>
            <IconButton className="close-btn" onClick={() => { setShowSideNav(false) }}>
                <CloseSharpIcon fontSize="large" />
            </IconButton>
            <ul className="nav-list">
                <li>
                    <Link to="/">Acceuil</Link>
                </li>
                <li>
                    <Link to="/hotels">Hotels</Link>
                </li>
                <li>
                    <Link to="/voyages">Voyages</Link>
                </li>
                <li>
                    <Link to="/propos">A propos</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            {Cookies.get('jwt') ?

                <>
                    <Button onClick={() => {
                        navigate(`/profil/${clientData.idclient}`);
                    }}>
                        Profile
                    </Button>
                </>
                :
                <Button className="btn-connexion">

                    <Link to='/login' style={{ color: "white", fontSize: '15px' }}>
                        Se connecter
                    </Link>
                </Button>
            }

        </div>
    );
};

const NavBar = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.up("md"));
    const [showSideNav, setShowSideNav] = useState(false);
    const clientData = useSelector(state => state.client);
    const dispatch = useDispatch();


    return (
        <>
            <AppBar
                id="navbarId"
                elevation={1}
                className="app-bar"
                position="absolute"
                sx={{ backgroundColor: "transparent" }}
            >
                <Container maxWidth="lg">
                    <Grid container columnSpacing={10}>
                        <Grid item xs={2} display="flex" justifyContent="start">
                            <img
                                src={process.env.PUBLIC_URL + "/assets/logoBGwhite.svg"}
                                style={{ width: "80px", height: "auto" }}
                                alt=""
                            />
                        </Grid>
                        {
                            !media &&
                            <Grid item xs={2} sx={{ marginLeft: "auto", marginRight: "40px" }}>
                                <IconButton onClick={() => { setShowSideNav(true) }}>
                                    <MenuIcon sx={{ color: "white", fontSize: "40px" }} />
                                </IconButton>
                            </Grid>
                        }

                        {media ? (
                            <>
                                <Grid container item xs={8}>
                                    <ul className="nav-list">
                                        <li>
                                            <Link to="/">Acceuil</Link>
                                        </li>
                                        <li>
                                            <Link to="/hotels">Hotels</Link>
                                        </li>
                                        <li>
                                            <Link to="/voyages">Voyages</Link>
                                        </li>
                                        <li>
                                            <Link to="/propos">A propos</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid
                                    item
                                    xs={2}
                                    display="flex"
                                    justifyContent="end"
                                    alignItems="center"
                                >
                                    {Cookies.get('jwt') ?

                                        <>
                                            <Avatar sx={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    navigate(`/profil/${Cookies.get("idclient")}`);
                                                }}
                                            >
                                                {clientData?.nom[0]}
                                            </Avatar>
                                        </>
                                        :
                                        <Link to='/login' style={{
                                            color: "black",
                                            fontSize: '15px',
                                            width: 'auto',
                                            minWidth: '120px',
                                            maxWidth: "150px",
                                        }}>

                                            <Button
                                                sx={{
                                                    backgroundColor: "white",
                                                    color: "black",
                                                    textTransform: "none",
                                                    fontSize: ".9rem",
                                                    borderRadius: "10px",
                                                    width: "100%",
                                                    height: "50px",
                                                    fontWeight: "600",
                                                    "&:hover": {
                                                        backgroundColor: "white",
                                                    },
                                                }}
                                            >
                                                Se connecter
                                            </Button>
                                        </Link>

                                    }
                                </Grid>
                            </>
                        ) : (
                            <>
                                <SideNav showSideNav={showSideNav} setShowSideNav={setShowSideNav} dispatch={dispatch} navigate={navigate} />
                            </>
                        )}
                    </Grid>
                </Container>
            </AppBar>
        </>
    );
};

export default NavBar;
