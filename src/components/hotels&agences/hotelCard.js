import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';




const func_desc = (desc, taille = 150) => {
    console.log('big shit');
    if (desc.length > taille) {
        return desc.slice(0, taille) + '...';
    } else {
        return desc;
    }
};

const favHeartStyle = {
    position: "absolute",
    top: "7px",
    left: "7px",
    cursor: "pointer",
    color: "red"

}

const HotelCard = ({ key, title, img, desc, evaluation = 3.5, equipement = ["Wifi gratuit", "Sauna", 'Parking gratuit'], fav }) => {
    const [favH, setFavH] = useState(fav);
    const theme = useTheme();;
    const media = useMediaQuery(theme.breakpoints.down('md'));
    const mediaBreaker = "md";

    return (
        < >

            <Card key={key} sx={theme => ({
                width: "100% !important",
                display: "flex",
                position: "relative",
                [theme.breakpoints.down('sm')]: {
                    flexDirection: "column",
                    maxWidth: "400px",
                    margin: "0 auto"
                }

            })} elevation={4}>
                <CardMedia
                    component="img"
                    sx={theme => ({
                        [theme.breakpoints.up(mediaBreaker)]: {
                            width: 300,
                            minWidth: 300,
                            height: "auto",
                        },
                        [theme.breakpoints.down(mediaBreaker)]: {
                            width: "50%",
                            height: "auto",
                            maxHeight: 250,
                            borderRadius: "5px"

                        },
                        [theme.breakpoints.down("sm")]: {
                            width: "100%",
                            height: "auto",
                            maxHeight: 250,
                            borderRadius: "0"

                        }
                    })}
                    image={img}
                />
                <Box >
                    <CardContent
                        sx={{
                            flex: "1 0 auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: '100%',
                            width: ' 100% !important',
                        }}
                    >
                        <Box>
                            <Typography component="div" variant="h4" sx={theme => ({
                                [theme.breakpoints.down(mediaBreaker)]: {
                                    fontSize: "27px"
                                }
                            })}>
                                {title}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                                sx={theme => ({
                                    [theme.breakpoints.down(mediaBreaker)]: {
                                        fontSize: "14px"
                                    }
                                })}

                            >
                                {media === true ?
                                    func_desc(desc, 100)
                                    : <>
                                        {desc}
                                    </>
                                }
                            </Typography>
                        </Box>

                        <Box
                            display="flex"
                            alignItems={"center"}
                            justifyContent="space-between"
                            sx={theme => ({
                                width: "100% !important",

                                [theme.breakpoints.down(mediaBreaker)]: {
                                    flexDirection: "column",
                                    alignItems: "start"
                                }
                            })}
                        >
                            <Stack>
                                <ul
                                    style={{
                                        display: "flex",
                                        columnGap: "5px",
                                        listStyle: "none",
                                        color: "blue",
                                    }}
                                >
                                    {equipement.map((equipement, index) => (
                                        <li key={equipement + index} style={{ fontFamily: "sans-serif", fontSize: '13px' }}>
                                            {equipement}
                                        </li>
                                    )
                                    )}

                                </ul>

                                <Rating
                                    name="half-rating-read"
                                    defaultValue={evaluation}
                                    precision={0.1}
                                    readOnly
                                    size="small"
                                />
                            </Stack>

                            <Button color="primary" variant="contained" sx={{ textTransform: "none" }}>
                                Voir Tarifs
                            </Button>
                        </Box>
                    </CardContent>
                </Box>

                {
                    favH === true ?
                        <FavoriteIcon fontSize="medium" onClick={() => { setFavH((prevState) => ({ favH: false })) }}
                            sx={favHeartStyle} />
                        :
                        <FavoriteBorderIcon
                            fontSize="medium" onClick={() => { setFavH(true) }}
                            sx={favHeartStyle} />
                }

            </Card >
        </ >
    );
};

export default HotelCard;
