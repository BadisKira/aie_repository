import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// import '../styles/about/miniCards.css'
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Round = ({ children }) => {
    return (
        <Box component="span" className="roundMiniCard">
            {children}
        </Box>
    )
};
const MiniCard = () => {
    return (
        <Card sx={{ maxWidth: 280 }}>
            {/* <CardMedia
                component="img"
                height="140"
                image={<Round children={""} />}
                alt="green iguana"
            /> */}
            <Round ><PhoneRoundedIcon sx={{ fontSize: "45px" }} /> </Round>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                    BEST TOUR GUIDES
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Iure doloremque saepe? Ultrices mi aliquam dis tempore incididunt sint, cumque dis temp
                </Typography>
            </CardContent>
        </Card>);
}

function MiniCards() {
    return (

        <Box sx={theme => ({
            display: "flex",
            flexDirection: "column",
            rowGap: "15px",
            alignItems: "flex-end",
            [theme.breakpoints.down("md")]: {
                alignItems: "center",
                marginTop: "15px"


            },
            [theme.breakpoints.up('md')]: {
                flex: 3,
            }
        })}>
            <MiniCard />
            <MiniCard />
            <MiniCard />
        </Box>



    );
}

export default MiniCards; 
