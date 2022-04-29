
import { Box, Button, Stack, Typography, Checkbox, Icon, IconButton, Rating } from "@mui/material";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import WineBarIcon from '@mui/icons-material/WineBar';

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

    return (
        <Box sx={{ background: "" }}>

            <Stack alignItems={"center"}>
                <Typography component={"h2"} variant="h5" sx={{ textAlign: "center", fontWeight: 600, marginBottom: "5px" }}>
                    Réserver pour:
                </Typography>


                <Button variant="outlined" size="large" sx={buttonStyle}>
                    <WineBarIcon sx={{ position: "absolute", left: "15px" }} />
                    <p> Hotel</p>
                </Button>
                <Button variant="outlined" size="large" sx={buttonStyle}>
                    <WineBarIcon sx={{ position: "absolute", left: "15px" }} />
                    <p> Voyages Organisés </p>
                </Button>
            </Stack>
            {/**LES FILTRAGES NORMALEMENT TU CONNAIS HEIN  */}
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
                        // value={value}
                        size="large"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                </Box>

                {/**BOX NUMERO 1  */}

                <Box sx={{ width: "90%", padding: "10px", border: "1px solid rgba(0,0,0,.5)", borderTop: "none" }}>
                    <Typography component={"p"} variant="h6" >
                        equipement :
                    </Typography>
                    <FormControl >
                        <RadioGroup
                            defaultChecked={1}
                        >
                            <FormControlLabel value={1} control={<Checkbox />} label="Wifi gratuit" />
                            <FormControlLabel value={2} control={<Checkbox />} label="Sauna" />
                            <FormControlLabel value={3} control={<Checkbox />} label="Plage" />
                            <FormControlLabel value={4} control={<Checkbox />} label="Restaurant" />
                            <FormControlLabel value={5} control={<Checkbox />} label="Parking gratuit" />
                        </RadioGroup>
                    </FormControl>


                </Box>

            </Stack>





        </Box>
    );

};

export default SideBar2; 