import { Box, Typography } from "@mui/material";

const BanniereT2 = ({ title }) => {
    return (
        <Box sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/fond1.jpg"})`,
            backgroundSize: 'cover',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
                width: "100%",
                height: "450px",

            }
        }}>
            <Typography component='h1' variant="h1" sx={theme => ({
                fontWeight: 700,
                color: "white",
                position: "relative",
                zIndex: 2,
                [theme.breakpoints.down('md')]: {
                    fontWeight: 600,
                    fontSize: "50px"
                }
            })}>
                {title}
            </Typography>
        </Box>
    );
};

export default BanniereT2; 