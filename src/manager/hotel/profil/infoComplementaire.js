import Rating from '@mui/material/Rating';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
const equipement = [
    'Wifi Gratuit',
    "Sauna",
    'Parking Gratuit',
    "Plage",
    'Restaurant'
]



const equiStyle = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: 60,

}
const InfoComplementaire = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Grid item xs={12} sm={4} justifyContent={"center"} alignItems="center" sx={equiStyle} >
                <Rating />

            </Grid>

            <Grid item xs={12} sm={4} justifyContent={"center"} alignItems="center" sx={equiStyle}>
                <div>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Equipement
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        {equipement.map((eq, index) => {
                            return <MenuItem onClick={handleClose} key={"e" + index}>{eq}</MenuItem>

                        })}

                    </Menu>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} justifyContent={"center"} sx={equiStyle}>
                <TextField type='text' label="Hotel's Town" onChange={() => { }} />
            </Grid>

        </>
    )
};

export default InfoComplementaire;



