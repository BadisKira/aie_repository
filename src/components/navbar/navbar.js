import { Container, AppBar, Grid, Button, Box } from "@mui/material";
import Logo from "../../logo.svg";
const NavBar = () => {

    return (<>
        <AppBar elevation={1} style={{ background: "transparent" }} >
            <Box width={"80%"} marginLeft="auto" marginRight="auto">
                <Grid container alignItems="center" spacing={5} style={{ height: "100%" }} >
                    <Grid item xs={2} style={{ background: "" }} >
                        <img src={process.env.PUBLIC_URL + "/assets/Logo.png"} style={{ width: "auto", height: 75 }} />
                    </Grid>
                    <Grid item container xs={8}
                        direction="row"
                        justifyContent="center"
                        alignItems="center" columnSpacing={3}
                    // borderBottom="solid 2px white"
                    // width="100%"

                    >

                        <Grid item xs={2} >
                            <a href="">Acceuil</a>
                        </Grid>

                        <Grid item xs={2}>
                            <a href="">Hotels</a>
                        </Grid>

                        <Grid item xs={2}>
                            <a href="">Voyages</a>
                        </Grid>

                        <Grid item xs={2}>
                            <a href="">A propos</a>
                        </Grid>

                        <Grid item xs={2}>
                            <a href="">Contact</a>
                        </Grid>

                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" style={{ textTransform: "none", backgroundColor: "black" }} >
                            Connectez-vous
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </AppBar>
    </>)
};

export default NavBar; 