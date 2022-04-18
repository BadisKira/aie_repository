import { Container, AppBar, Grid, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import './styles/navbar.css';


const NavBar = () => {

    return (
        <>
            <AppBar elevation={1} className="app-bar" position="absolute" sx={{ backgroundColor: "transparent" }}>
                <Container maxWidth="lg"  >
                    <Grid container columnSpacing={10}>
                        <Grid item xs={2} display="flex" justifyContent="start" >
                            <img
                                src={process.env.PUBLIC_URL + "/assets/logoBGwhite.svg"}
                                style={{ width: "80px", height: "auto" }}
                                alt=""
                            />
                        </Grid>

                        <Grid container item xs={8} >
                            <ul className="nav-list">
                                <li>
                                    <Link to=''>Acceuil</Link>
                                </li>
                                <li>
                                    <Link to=''>Hotels</Link>
                                </li>
                                <li>
                                    <Link to=''>Voyages</Link>
                                </li>
                                <li>
                                    <Link to=''>A propos</Link>
                                </li>
                                <li>
                                    <Link to=''>Contact</Link>
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
                    </Grid>
                </Container>
            </AppBar>
        </>
    );

};

export default NavBar;
