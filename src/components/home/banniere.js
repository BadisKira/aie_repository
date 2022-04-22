import { Container, IconButton, Grid, Typography, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
// import '../styles/banniere.css';
import { gsap } from "gsap";
import { CSSRulePlugin } from 'gsap/all';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect } from "react";
gsap.registerPlugin(CSSRulePlugin);

const Banniere = () => {
    const textReveal = CSSRulePlugin.getRule(".central-text::after");

    useEffect(() => {
        gsap.to(textReveal, {
            duration: "1s",
            height: "0px"
        })
    }, [])
    return (
        <div className="banniere-container">
            <Container >
                <Grid container rowSpacing={3} display="flex" justifyContent={"center"} >
                    <Grid item md={12}>
                        <Typography component={"h1"} variant='h3' color={"white"} className="banniere-text" >
                            La meilleure passerelle
                            pour vos voayages
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Typography component={"h3"} variant='subtitle1' color={"white"} className="banniere-text" sx={{ fontWeight: 400 }} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, a, animi voluptatibus, ducimus iusto aperiam iure est facilis dignissimos
                            quas dicta pariatur voluptatum repudiandae totam.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={8} lg={6}>
                        <TextField fullWidth
                            placeholder="Choisir une destination"
                            id="fullWidth"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton sx={{
                                            backgroundColor: "black",
                                            color: "white",
                                            height: '56px',
                                            width: "50px",
                                            borderTopRightRadius: "15px",
                                            borderBottomRightRadius: "15px",
                                            //borderRadius: "15px",
                                            fontSize: "20px",
                                            transform: "translateX(14px)",
                                            "&:hover": {
                                                backgroundColor: "black"
                                            }
                                        }}>
                                            <ArrowForwardIcon sx={{

                                            }} />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            sx={{
                                backgroundColor: "white",
                                borderRadius: '15px',
                                marginTop: "20px"
                            }}></TextField>

                        {/* MuiOutlinedInput-root MuiInputBase-root
                        MuiInputBase-colorPrimary MuiInputBase-fullWidth
                        MuiInputBase-formControl
                        css-md26zr-MuiInputBase-root-MuiOutlinedInput-root */}
                        {/* MuiOutlinedInput-input MuiInputBase-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input */}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default Banniere; 