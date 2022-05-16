
import { Box, Button, Stack, Typography, Checkbox, Icon, IconButton, Rating } from "@mui/material";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import WineBarIcon from '@mui/icons-material/WineBar';
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filtrerNote, filtrerEquipement, filterHotels } from "../../redux/hotelSlice";

// const buttonStyle = (theme) => ({
//     display: 'flex', justifyContent: "space-evenly",
//     [theme.breakpoints.down('md')]: {
//         width: "40%",
//         minWidth: "150px",
//         margin: '0 auto'
//     },

// });

const buttonStyle = (theme) => ({
    textTransform: "none", margin: "10px 0px", position: "relative", width: "220px"
})
const SideBar2 = () => {
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    const { typeR, ville } = useParams();
    const dispatch = useDispatch();
    const [equiState, setEquiState] = useState([]);


    const handelRadioEq = (e) => {
        if (e.target.checked) {
            setEquiState(prev => ([...equiState, e.target.value]));
        } else {
            let t = equiState.filter(val => val !== e.target.value);
            setEquiState(prev => t);
        };
        //
    };


    useEffect(() => {
        dispatch(filterHotels({ note: rating, eqs: equiState }));
    }, [equiState]);


    return (
        <Box sx={{ background: "" }}>

            <Stack alignItems={"center"}>
                <Typography component={"h2"} variant="h5" sx={{ textAlign: "center", fontWeight: 600, marginBottom: "5px" }}>
                    Réserver pour:
                </Typography>


                <Button variant="outlined" size="large" sx={buttonStyle}
                    onClick={() => { navigate(`/hotels${typeof ville === "undefined" ? "" : '/' + ville}`) }}
                >
                    <WineBarIcon sx={{ position: "absolute", left: "15px" }} />
                    <p> Hotel</p>
                </Button>
                <Button variant="outlined" size="large" sx={buttonStyle}
                    // onClick={() => { navigate('/') }}
                    onClick={() => { navigate(`/voyages${typeof ville === "undefined" ? "" : '/' + ville}`) }}

                >
                    <WineBarIcon sx={{ position: "absolute", left: "15px" }} />
                    <p> Voyages Organisés </p>
                </Button>
            </Stack>
            {/**LES FILTRAGES NORMALEMENT TU CONNAIS HEIN  */}
            {typeR === 'hotels' ? <>
                <Stack alignItems={"center"} sx={{ maxWidth: "450px", margin: "0px auto" }}>

                    <Typography component={"h2"} variant="h6"
                        sx={{ width: "90%", fontWeight: 540, marginTop: "10px ", border: "1px solid rgba(0,0,0,.5)", padding: "5px 0px" }}>
                        Filtrer les
                        recherches par:
                    </Typography>

                    {/**BOX NUMERO 1  */}
                    <Box sx={{ width: "90%", padding: "10px", border: "1px solid rgba(0,0,0,.5)", borderTop: "none" }}>
                        <Typography component={"p"} variant="h6" >
                            étoiles :
                        </Typography>

                        <Rating

                            name="simple-controlled"
                            value={rating}
                            size="large"
                            onChange={(event, newValue) => {
                                setRating(newValue);
                                dispatch(filterHotels({ note: newValue, eqs: equiState }));
                            }}
                        />
                    </Box>

                    {/**BOX NUMERO 1  */}

                    <Box sx={{ width: "90%", padding: "10px", border: "1px solid rgba(0,0,0,.5)", borderTop: "none" }}>
                        <Typography component={"p"} variant="h6" >
                            equipement :
                        </Typography>
                        <FormControl >
                            <RadioGroup defaultChecked={"Wifi gratuit"}>
                                <FormControlLabel value={"Wifi gratuit"} control={<Checkbox />} onChange={handelRadioEq} label="Wifi gratuit" />
                                <FormControlLabel value={"Sauna"} control={<Checkbox />} onChange={handelRadioEq} label="Sauna" />
                                <FormControlLabel value={"Plage"} control={<Checkbox />} onChange={handelRadioEq} label="Plage" />
                                <FormControlLabel value={"Restaurant"} control={<Checkbox />} onChange={handelRadioEq} label="Restaurant" />
                                <FormControlLabel value={"Parking gratuit"} control={<Checkbox />} onChange={handelRadioEq} label="Parking gratuit" />
                            </RadioGroup>
                        </FormControl>


                    </Box>

                </Stack>

            </> : null}





        </Box>
    );

};

export default SideBar2; 