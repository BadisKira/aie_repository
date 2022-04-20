import {
    Container,
    AppBar,
    Grid,
    Button,
    Box,
    IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useState } from "react";

const SideNav = ({ showSideNav, setShowSideNav }) => {
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
            <Button className="btn-connexion">Se connecter</Button>

        </div>
    );
};

const NavBar = () => {
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.up("md"));
    const [showSideNav, setShowSideNav] = useState(false);

    return (
        <>
            <AppBar
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
                                    <Button
                                        sx={{
                                            backgroundColor: "white",
                                            color: "black",
                                            textTransform: "none",
                                            fontSize: ".9rem",
                                            borderRadius: "10px",
                                            width: "250px !important",
                                            height: "50px",
                                            fontWeight: "600",
                                            "&:hover": {
                                                backgroundColor: "white",
                                            },
                                        }}
                                    >
                                        Se connecter
                                    </Button>
                                </Grid>
                            </>
                        ) : (
                            <>
                                <SideNav showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
                            </>
                        )}
                    </Grid>
                </Container>
            </AppBar>
        </>
    );
};

export default NavBar;
