import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const PopUp = ({ type, text, show }) => {
    const [alert, setShowAlert] = useState(show);
    return (
        <Snackbar open={alert}
            anchorOrigin={{ vertical: 'bottom', horizontal: "left" }}
            autoHideDuration={3000}
        >
            <Alert onClose={() => { setShowAlert(false) }} severity={type}
                sx={{
                    width: "300px",
                    color: "black"
                }} >
                {text}
            </Alert>
        </Snackbar>
    )
};
export default PopUp; 