import { Box, Button, Paper, Grid, TextField, Stack } from "@mui/material";
import ImageStack from "./imageStack";
import InfoComplementaire from "./infoComplementaire";
import TextareaAutosize from '@mui/base/TextareaAutosize';


const ProfilHotel = () => {
    const handelClick = () => {

    };
    return (
        <Paper elevation={5} sx={{ padding: '20px' }} >
            <Box component={'form'}>
                <Grid container columnGap={5} alignItems={""} rowGap={5}>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Stack spacing={3}>
                            <TextField type="text" size={"large"} label="Hotel's Name" fullWidth InputProps={{ style: { fontSize: 30 } }}
                            />
                            <TextField type="text" size={"medium"} label="Hotel's adress" fullWidth />
                            <TextareaAutosize placeholder="Hotel's description" style={{
                                width: "100%",
                                height: "150px",
                                fontSize: "1.1rem",
                                fontFamily: "sans-serif",
                                padding: '5px', resize: "none", outline: "none"
                            }} />
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <fieldset style={{ padding: "25px 10px" }}>
                            <legend style={{ paddingLeft: " 10px 15px" }}>Admin's Informations</legend>
                            <Stack spacing={2} >

                                <TextField type="text" size={"small"} label="admin's Name" />
                                <TextField type="password" size={"small"} label="admin's password" />

                            </Stack>
                        </fieldset>
                    </Grid>

                    <fieldset style={{ padding: "25px 10px", width: "100%" }}>
                        <legend style={{ paddingLeft: " 10px 15px" }}>Hotel's additional informations</legend>

                        <Grid item xs={12} container >
                            <InfoComplementaire />
                        </Grid>
                    </fieldset>

                    <Grid item xs={12} container spacing={2} justifyContent="center">
                        <ImageStack />
                    </Grid>
                </Grid>

                <Box sx={{ width: '100%', margin: '20px 0px 10px 0px' }} justifyContent="center" alignItems='center' display={"flex"}>
                    <Button variant='contained' onClick={handelClick}
                        sx={{
                            width: "120px",
                            height: '40px',
                            textTransform: "none",
                        }}>
                        Valider
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
};

export default ProfilHotel; 