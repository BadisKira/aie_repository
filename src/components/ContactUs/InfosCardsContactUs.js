import React, { Children } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// import "../styles/ContactUs.css";

const InfosCardsContactUs = ({ cardInfo, children }) => {
  return (
    <Paper className="infoCardsContactUs">
      <Box component="span" className="circleContactUs">
        {children}
      </Box>
      <Typography noWrap variant="body1" marginY={3}>
        {cardInfo}
      </Typography>
    </Paper>
  );
};

export default InfosCardsContactUs;
