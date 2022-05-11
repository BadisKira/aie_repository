import React from "react";

import { shadows } from "@mui/system";

import { Container } from "@mui/material";
import ProfileTabs from "../components/Profile/ProfileTabs";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import BanniereT2 from "../components/banniereType2";

export default function Profile() {
  return (
    <>
      <NavBar />
      <BanniereT2 title="Profil" />
      <Container maxWidth="md" sx={{ my: 10, p: 0, boxShadow: 4 }}>
        <ProfileTabs />
      </Container>

      <Footer />
    </>
  );
}
