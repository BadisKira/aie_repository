import React from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import BanniereT2 from "../components/banniereType2";
import Header from "../components/hotelPage/Header";
import BookingForm from "../components/hotelPage/BookingForm";
import HotelImages from "../components/hotelPage/HotelImages";
import HotelInfos from "../components/hotelPage/HotelInfos";

const hotelPage = () => {
  return (
    <>
      <NavBar />
      <BanniereT2 title="Hotel" />
      <Container maxWidth="lg">
        <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <BookingForm />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <HotelImages />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <HotelInfos />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default hotelPage;
