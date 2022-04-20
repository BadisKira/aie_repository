import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

// import "../styles/ContactUs.css";



import InfosCardsContactUs from "./InfosCardsContactUs";

const InformationContactsUS = (props) => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flew-start",
      }}
    >
      <div>
        <Typography
          variant="h3"
          sx={{ color: "#263a49", fontWeight: "bold", marginBottom: "2vh" }}
        >
          Envoyez vos messages
        </Typography>
        <Typography variant="body1" sx={{ color: "#2a2a2a", marginY: "3vh" }}>
          N'hesitez pas à poser vos question ou à nous donner votre avis
          directement en nous envoyant un message par email, vous pouvez nous
          suivre sur les reseaux sociaux, ou bien nous contacter par téléphone.
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box component="span" className="SmallerCircleContactUs">
            <FaInstagram color="#fff" fontSize={24} />
          </Box>
          <Box component="span" className="SmallerCircleContactUs">
            <FaFacebookF color="#fff" fontSize={24} />
          </Box>
          <Box component="span" className="SmallerCircleContactUs">
            <FaTelegramPlane color="#fff" fontSize={24} />
          </Box>
        </Box>
      </div>
      <Grid
        container
        justifyContent="center"
        marginTop={5}
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={6}>
          <InfosCardsContactUs cardInfo={"+3127859847562"}>
            <PhoneRoundedIcon fontSize="large" sx={{ color: "#fff" }} />
          </InfosCardsContactUs>
        </Grid>
        <Grid item xs={6}>
          <InfosCardsContactUs cardInfo={"Book&Go@gmail.com"}>
            <MailRoundedIcon fontSize="large" sx={{ color: "#fff" }} />
          </InfosCardsContactUs>
        </Grid>
      </Grid>
    </div>
  );
};

export default InformationContactsUS;
