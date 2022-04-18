import { Paper, Typography } from "@mui/material";
import "./styles/destination.css"
const Destination = ({ dest, img }) => {
    return (<>
        <Paper elevation={5} className="destination-paper" square
        >
            <img src={process.env.PUBLIC_URL + " /assets/fond.jpg"} alt="" />
            <Typography component={"h2"} variant='h4' className="destination-text">
                {dest}
            </Typography>
        </Paper>
    </>
    )
};

export default Destination; 