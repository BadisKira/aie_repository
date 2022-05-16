import { Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "../styles/destination.css"
const Destination = ({ dest, img }) => {
    const navigate = useNavigate();
    return (<>
        <Paper elevation={5} className="destination-paper" square
            onClick={() => {
                navigate(`/hotels/${dest}`)
            }}
        >
            <img src={img} alt="" />
            <Typography component={"h2"} variant='h4' className="destination-text">
                {dest}
            </Typography>
        </Paper>
    </>
    )
};

export default Destination; 