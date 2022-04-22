import { IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const ArrowUp = ({ targetId }) => {
    const handelClick = () => {

    };
    return (
        <>
            <IconButton sx={theme => ({
                position: "fixed",
                zIndex: "10",
                bottom: "10px",
                right: '10px',
                buttonShadow: 5,
                width: "40px", height: "40px",
                backgroundColor: "rgba(230,230,230,1)",
                boxShadow: '1px 1px 2px rgba(0,0,0,.8) , -1px -1px 2px rgba(0,0,0,.8)  ',
                "&:hover": {
                    backgroundColor: "rgba(230,230,230,1)",
                },
                [theme.breakpoints.down("sm")]: {
                    display: "none"
                }

            })}>
                <a href={`#${targetId}`} style={{}}> <ArrowUpwardIcon sx={{ color: "black", fontSize: "30px" }} /> </a>
            </IconButton>
        </>
    )
};
export default ArrowUp;;