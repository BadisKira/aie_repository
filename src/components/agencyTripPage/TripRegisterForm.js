import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BedIcon from "@mui/icons-material/Bed";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiInput from "@mui/material/Input";
import { TextField } from "@mui/material";

const Input = styled(MuiInput)`
  width: 42px;
`;
const rooms = [
  { id: 121, type: "Single", price: 15000, disp: true },
  { id: 782, type: "Suite", price: 35000, disp: true },
  { id: 778, type: "Single", price: 15000, disp: true },
  { id: 451, type: "Suite", price: 35000, disp: true },
  { id: 763, type: "Suite", price: 35000, disp: true },
  { id: 120, type: "Single", price: 15000, disp: true },
];
// creer un tablea de des types a partir des données de la table chambre

const TripForm = () => {
  const nbrPersonMax = 10;
  let price = 5000;
  const [nbrPerson, setNbrPerson] = useState(0);
  const [tripPrice, setTripPrice] = useState(0);
  const [showError, setShowError] = useState(false);
  const handleChangeNbrPerson = (e) => {
    e.preventDefault();
    setTripPrice(0);
    setNbrPerson(Number(e.target.value));
    setTripPrice(Number(e.target.value) * price);
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    nbrPerson > nbrPersonMax ? setShowError(true) : console.log("submitted");
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmitRegister}
      p={3}
      sx={{
        boxShadow: "3",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        color="primary.dark"
        mb={2}
        sx={{ fontWeight: "bold" }}
      >
        {" "}
        Je m'inscris
      </Typography>
      <Typography
        variant="body1"
        color="#ff0000"
        sx={{ visibility: showError ? "visible" : "hidden" }}
      >
        {" "}
        Pas assez de places disponibles{" "}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Nombre de personnes à inscrire
            </Typography>
            <Input
              onChange={handleChangeNbrPerson}
              value={nbrPerson}
              size="large"
              inputProps={{
                step: 1,
                min: 0,
                max: 20,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1">Prix total à payer</Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#404040" }}
            >
              {" "}
              {tripPrice.toFixed(2)} DZD
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            sx={{ mt: 3 }}
            color="primary"
            type="submit"
            fullWidth
            variant="contained"
          >
            Je reserve
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TripForm;
