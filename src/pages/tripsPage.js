import React from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import BanniereT2 from "../components/banniereType2";
import Header from "../components/agencyTripPage/Header";
import TripInfos from "../components/agencyTripPage/TripInfos";
import TripImages from "../components/agencyTripPage/TripImages";
import TripForm from "../components/agencyTripPage/TripRegisterForm";

function TripsPage() {
  return (
    <>
      <NavBar />
      <BanniereT2 title="Voyages" />
      <Container maxWidth="lg">
        <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <TripForm />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <TripImages />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TripInfos />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default TripsPage;
