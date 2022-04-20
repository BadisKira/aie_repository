import { Box, Typography, Paper, useTheme } from "@mui/material";
// import "../styles/about/leftPart.css";

const LeftPart = () => {
    const theme = useTheme();

    return (
        <Box sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
                width: "90%",
            },
            [theme.breakpoints.down("sm")]: {
                width: "100%",
            },
            [theme.breakpoints.up("sm")]: {
                flex: 6,
            },
        })}>
            <Box
                className="aboutLeftPart"
                sx={(theme) => ({
                    borderRadius: "20px",
                    display: "block",
                    flex: 6,
                    height: "480px",
                    position: "relative",
                    width: "95%",
                    [theme.breakpoints.down("sm")]: {
                        width: "100%",
                    },
                })}
            >
                <img
                    className="leftPartimg"
                    src={
                        "http://demo.stairthemes.com/html/traveler/assets/images/img27.jpg"
                    }
                />
                <Paper elevation={1} className="little-paper">
                    <Typography
                        component="h2"
                        sx={(theme) => ({
                            backgroundColor: "aquamarine",
                            fontWeight: 800,
                            color: "white",
                            textAlign: "start",
                            wordWrap: "break-word",
                            padding: "15px 20px",
                            borderRadius: "15px",

                            [theme.breakpoints.down("sm")]: {
                                fontSize: "22px",
                                width: "100%",

                            },
                            [theme.breakpoints.up("sm")]: {
                                fontSize: "26px",
                                width: "250px",
                                height: "200px",
                                position: "absolute",
                                top: "50%",
                                left: "100%",
                                transform: "translate(-70% , -50%)",
                            },
                        })}
                    >
                        WE ARE BEST FOR TOURS & TRAVEL SINCE 1985 !
                    </Typography>
                </Paper>
            </Box>

            <Box>
                <Typography component="h2" variant="h3"
                    sx={(theme) => ({
                        fontWeight: 800,
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "30px",
                            width: "100%",
                            marginTop: "120px",

                        },
                        [theme.breakpoints.up("sm")]: {
                            fontSize: "40px",
                        },
                    })}
                >
                    HOW WE ARE BEST FOR TRAVEL !
                </Typography>
                <Typography component="p" variant='subtitle1' color="secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                    expedita porro nihil amet natus? Aliquid sunt nemo iusto, aut odio
                    cupiditate inventore eligendi omnis laboriosam nisi aliquam ipsam eum
                    expedita explicabo, facilis sit autem, pariatur praesentium architecto
                    eaque fugit suscipit enim aspernatur harum. Temporibus facere a
                    eveniet quod, iure nam delectus placeat sunt odio sit, minus sint
                    nemo, est illum doloribus ea quisquam! Consectetur inventore commodi
                    corporis. Libero, fuga pariatur.
                </Typography>
            </Box>
        </Box >
    );
};
export default LeftPart;
