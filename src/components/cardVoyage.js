
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';



const CardVoyage = ({ destination, agence, tarif, img, actions = false }) => {


    return (
        <Card sx={{ maxWidth: 345, margin: "0px auto" }} elevation={7} className="card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={img}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="subtitle1" component="div">

                        {destination}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        à {tarif} DZD par adulte
                    </Typography>

                    {actions &&
                        <>
                            <Typography variant="body2" color="text.secondary">
                                {agence}
                            </Typography>
                        </>
                    }



                </CardContent>
            </CardActionArea>
            {actions &&
                <CardActions>
                    <Button size="medium" variant="contained" sx={{ textTransform: "none" }}>
                        voir tarifs
                    </Button>
                </CardActions>
            }
        </Card>
    );

};
export default CardVoyage;
