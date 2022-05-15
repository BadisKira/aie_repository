import { Box, Button, Paper, Grid, TextField, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ChambreItem = ({ type = "Simple", infoHotel, setInfoHotel }) => {
    const handelChangeC = (e) => {
        let tempC = infoHotel.chambres;
        console.log("tempc ", tempC);
        tempC = tempC.map((room, index) => {
            if (room.type === "Simple") {
                tempC = [...tempC, { ...tempC[index], [e.target.name]: e.target.value }];
            }
            return tempC;
        })

        setInfoHotel({ ...infoHotel, chambres: tempC });
    }
    const [chambres, setChambres] = useState([{ prix: 0, nbrc: 0 }, { prix: 0, nbrc: 0 }, { prix: 0, nbrc: 0 }]);
    useEffect(() => {
        setChambres((prev) => (infoHotel.chambres));
    }, [infoHotel])

    return (
        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly" }}>
            <Typography > {type} </Typography>
            <TextField size="small" type={"number"} label={"price"} name="prix" value={chambres[0].prix} sx={{ width: "150px" }} />
            <TextField size="small" type={"number"} label="number of rooms" value={chambres[0].nbrc} name="nbrc" sx={{ width: "150px" }} />
        </Box>
    )
}

export default ChambreItem; 