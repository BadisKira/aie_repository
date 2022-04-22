import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

import ContactUsForm from "../components/ContactUs/ContactUsForm";
import InformationContactsUS from "../components/ContactUs/InformationContactsUS";

import "../components/styles/ContactUs.css";



import NavBar from "../components/navbar";
import BanniereT2 from "../components/banniereType2";
import Footer from "../components/footer";


//import imageBanner from "publicassets\toomas-tartes-Yizrl9N_eDA-unsplash.jpg";

function ContactUs(props) {
  return (
    <>
      <NavBar />
      <BanniereT2 title={"Contact-us"} />

      <Container sx={{ marginY: "14vh" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <InformationContactsUS />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactUsForm />
          </Grid>
        </Grid>
      </Container>

      {/* /*<div class="BannerImage">
        <img src={imageBanner} alt="Snow" />
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold" }}
          className="centeredTextBannerImage"
        >
          Contactez nous
        </Typography>
      </div>*/ }

      <Footer />

    </>
  );
}

export default ContactUs;
