
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const CardV = ({ destination, price, img }) => {


    return (
        <Card sx={{ maxWidth: 345, margin: "0px auto" }} elevation={7}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/fc/74/caption.jpg?w=300&h=300&s=1"}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div">

                        {destination}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        à 1500.00 DZD par adulte
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );

};
export default CardV;
