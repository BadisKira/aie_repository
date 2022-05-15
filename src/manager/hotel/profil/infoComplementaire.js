import Rating from '@mui/material/Rating';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
const equipement = [
    'Wifi gratuit',
    "Sauna",
    'Parking gratuit',
    "Plage",
    'Restaurant'
]
export const includeArray = (array_container = [], array_content = []) => {
    // si tout les element du content sont dans le container alors
    //retounerr true sinon false

    array_container = array_container.map((r) => r.nom_eq);
    console.log(array_container, "now")
    console.log(array_content);
    let inc = true; let i = 0;
    while (inc && i < array_content.length) {
        inc = array_container.includes(array_content[i]);
        i++;
    };

    console.log(inc);
    return inc;
}



const equiStyle = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: 60,

}
const InfoComplementaire = ({ infoHotel, setInfoHotel }) => {
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
            <Grid item xs={12} sm={4} justifyContent={"center"} alignItems="center" sx={equiStyle}  >
                <Rating value={Number(infoHotel.note)} onChange={(event, newValue) => {
                    setInfoHotel({ ...infoHotel, note: newValue });
                }} />

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
                            return <MenuItem onClick={() => {
                            }} key={"e" + index}>
                                <FormControlLabel
                                    control={<Checkbox checked={includeArray(infoHotel.equipementh, [eq])} />} label={eq}
                                    onChange={(e) => {
                                        let tempEq = infoHotel.equipementh;
                                        if (e.target.checked) {
                                            tempEq = [...tempEq, { nom_eq: eq }];
                                        } else {
                                            tempEq = tempEq.filter(teq => teq.nom_eq != eq);
                                        }
                                        setInfoHotel({ ...infoHotel, equipementh: tempEq });
                                    }}
                                />

                            </MenuItem>

                        })}

                    </Menu>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} justifyContent={"center"} sx={equiStyle}>
                <TextField type='text' label="Hotel's Town" value={infoHotel.villeh} onChange={(e) => { setInfoHotel({ ...infoHotel, villeh: e.target.value }) }} />
            </Grid>

        </>
    )
};

export default InfoComplementaire;



