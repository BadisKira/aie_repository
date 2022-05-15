import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";

const Header = () => {
  let price = 5000;
  return (
    <Box
      py={1}
      px={3}
      mt={3}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "3",
      }}
    >
      <Box>
        <Typography variant="h4" mb={2}>
          Voyage au sommet de yemma gouraya
        </Typography>
        <Typography
          variant="h6"
          color="#434343"
          mb={1}
          sx={{ fontSize: "1rem" }}
        >
          {" "}
          <LocalAirportIcon fontSize="small" /> Agence de voyage kill yourself
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="#434343" sx={{ fontSize: "1rem" }}>
            {" "}
            <DateRangeIcon fontSize="small" /> Date depart: 02-02-2022
          </Typography>
          <Typography
            variant="h6"
            ml={4}
            color="#434343"
            sx={{ fontSize: "1rem" }}
          >
            {" "}
            <DateRangeIcon fontSize="small" /> Date arrivée: 02-10-2022
          </Typography>
        </Box>
        <Typography variant="h6" color="#434343" sx={{ fontSize: "1rem" }}>
          {" "}
          <LocalOfferIcon fontSize="small" /> prix: {price.toFixed(2)} DZD
        </Typography>
      </Box>
      <Box>
        <Button href="/agence/:id">Voir l'agence</Button>
      </Box>
    </Box>
  );
};

export default Header;
