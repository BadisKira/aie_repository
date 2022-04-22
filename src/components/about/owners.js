import { Container, Grid } from "@mui/material";

import * as React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function OwnerCard({ nom, job, desc }) {
    const theme = useTheme();

    return (
        <Card elevation={10} sx={{ display: "flex", height: "220px", width: "350px", position: "relative", }}>
            <CardMedia
                component="img"
                sx={theme => ({
                    width: 151,
                    [theme.breakpoints.only("xs")]: {
                        display: "none"
                    }
                })}
                image={process.env.PUBLIC_URL + "/assets/zella.jpg"}
                alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ width: "100%" }}>
                    <Typography component="div" variant="h5">
                        {nom}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {job}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        {desc}
                    </Typography>
                    <Box sx={theme => ({
                        position: "absolute",
                        bottom: "5px",
                        right: "5px",
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "end",
                        columnGap: "10px",
                    })}>
                        <Link to=""> <GitHubIcon fontSize="medium" sx={{ color: "black" }} /></Link>
                        <Link to=''> <LinkedInIcon fontSize="medium" sx={{ color: "black" }} /></Link>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
}
const ownersTab = [
    {
        nom: "Hammadache Badis",
        job: "front-dev",
        desc: "Junior front end developer with React-js",
    },
    {
        nom: "Hocine Esma",
        job: "front-dev&UI designer",
        desc: "Junior front end and tensai designer",
    },
    {
        nom: "Brahami Manel",
        job: "back-dev",
        desc: "Junior back end developer with PHP",
    },
    {
        nom: "Chikh Dounia",
        job: "back-dev",
        desc: "Leader of groupe and Junior back end developer with PHP",
    },
    {
        nom: "Bouzidi Katia",
        job: "back-dev",
        desc: "Junior back end developer with PHP",
    },
];
const Owners = () => {
    return (
        <Container
            sx={{
                marginTop: "50px",
                marginBottom: '50px',
                height: "auto",
                paddingTop: "50px",
                paddingBottom: "50px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography color="" component={"h2"} variant="h4" marginBottom={5}>
                LES CREATOES ET DEV DU SITE Book&Go
            </Typography>

            {/* <Grid
                container
                display="flex"
                spacing={5}
                marginTop={5}
                alignItems={"center"}
                sx={{ backgroundColor: "green" }}
            >
               
                    
                
            </Grid> */}
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "15px",
                justifyContent: "center"

            }}>
                {ownersTab.map((owner, index) => {
                    return (
                        <Box key={index} >
                            <OwnerCard {...owner} />
                        </Box>
                    );
                })}
            </Box>

        </Container>
    );
};

export default Owners;
