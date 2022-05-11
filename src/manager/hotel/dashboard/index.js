import { Box, Stack, Grid } from "@mui/material";
import CardStat from "./cardStat";
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import StarsIcon from '@mui/icons-material/Stars';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Reservations from "./reservations";

const cardStatsData = [
    {
        icon: <AccountBalanceIcon fontSize="large" sx={{ color: "white" }} />,
        title: "Revenue",
        value: 32000
    },
    {
        icon: <StarsIcon fontSize='large' sx={{ color: "white" }} />,
        title: "Notes",
        value: 3.5
    }, {
        icon: <BookmarkOutlinedIcon fontSize='large' sx={{ color: "white" }} />,
        title: "Reservations",
        value: 157
    }
]

const DashboardHotel = () => {
    return (
        <Stack>
            {/**CARD PART **/}
            <Grid container rowSpacing={3} columnSpacing={2} >
                {cardStatsData.map((card, index) => {
                    return (
                        <Grid key={"cs" + index} item xs={12} md={4} >
                            <CardStat icon={card.icon} value={card.value} title={card.title} />
                        </Grid>
                    )
                })}
            </Grid>

            <br />
            <br />



            <Reservations />


        </Stack>
    )
};

export default DashboardHotel; 