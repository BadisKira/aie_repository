import { Paper, Box, Stack, Typography } from "@mui/material";
const CardStat = ({ icon, title, value }) => {
    return (
        <Paper elevation={3} sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: '0px 20px',
            alignItems: "baseline",
            height: '120px',
            borderRadius: '15px'
        }}>
            <Paper elevation={12} sx={{
                background: "#2196f3", padding: "7px 12px",
                transform: "translateY(-15px)",
            }}>
                {icon}
            </Paper>
            <Stack>
                <Typography component={"h3"} variant={"subtitle2"}>{title}</Typography>
                <Typography component={"h3"} variant={"h5"} fontWeight={700}>{value}</Typography>
            </Stack>
        </Paper >
    )

};


export default CardStat; 