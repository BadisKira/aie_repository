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
const arrayTypes = [
  ...new Map(
    rooms.map((item) => [JSON.stringify(item.type), item.type])
  ).values(),
];
// l'objet type
function createData(id, type, price, qte) {
  return { id, type, price, qte };
}

const roomTypes = [];
arrayTypes.map((elt, index) => {
  let price = elt === "Single" ? 15000 : 35000;
  roomTypes.push(createData(index, elt, price.toFixed(2), 0));
});

const BookingForm = () => {
  const today = new Date();
  const oneMonthFromToday = new Date();
  oneMonthFromToday.setMonth(oneMonthFromToday.getMonth() + 1);

  const minFormattedDate = today.toISOString().slice(0, 10);
  const maxFormattedDate = oneMonthFromToday.toISOString().slice(0, 10);
  const [totalPrice, setTotalPrice] = useState(0);
  const [rooms, setRooms] = useState(roomTypes);



  const handleInputChange = (event, room) => {
    let price = 0;
    roomTypes[room.id].qte = Number(event.target.value);
    setRooms(roomTypes);
    roomTypes.forEach((e) => (price += e.qte * e.price));
    setTotalPrice(price);
  };

  const handleSubmitBooking = () => { };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmitBooking}
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
        Formulaire de reservation
      </Typography>
      <Typography variant="body1" color="#ff0000" sx={{ visibility: "hidden" }}>
        {" "}
        nombre de chambre non disponible{" "}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            type="date"
            InputProps={{
              inputProps: { min: minFormattedDate },
            }}
            required
            fullWidth
            helperText="Date d'arrivée"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="date"
            InputProps={{
              inputProps: { min: minFormattedDate, max: maxFormattedDate },
            }}
            required
            fullWidth
            helperText="Date de retour"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Ajouter des chambres</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {rooms.map((elt) => (
                <Box
                  key={elt.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    Chambre {elt.type}{" "}
                  </Typography>
                  <Input
                    onChange={(e) => handleInputChange(e, elt)}
                    size="small"
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 100,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
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
              {totalPrice.toFixed(2)} DZD
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
            href="/paiement"
          >
            Je reserve
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingForm;
