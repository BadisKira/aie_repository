import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
    const navigate = useNavigate();
    return (
        <>
            <Typography>Voulez-vous vous deconnecter ?  </Typography>
            <Button size="large" variant='outlined' onClick={() => {
                navigate("/");
            }}>
                Deconnexion
            </Button>
        </>

    )
};

export default SignOut;   