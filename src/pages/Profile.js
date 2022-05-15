import React, { useEffect } from "react";

import { shadows } from "@mui/system";

import { Container } from "@mui/material";
import ProfileTabs from "../components/Profile/ProfileTabs";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import BanniereT2 from "../components/banniereType2";
import { useDispatch, useSelector } from "react-redux";
import { loginClient, getFavoris, getReservations } from "../redux/clientSlice";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const clientData = useSelector(state => state.client);
  useEffect(() => {
    dispatch(loginClient({ emailBase: Cookies.get('email'), jwt: Cookies.get('jwt'), email: null, mdp: null }));
    dispatch(getFavoris({ emailBase: Cookies.get('email'), idclient: Cookies.get('idclient'), jwt: Cookies.get('jwt') }))
  }, []);

  useEffect(() => {
    console.log("reservathiovie", clientData);
    dispatch(getReservations({ emailBase: Cookies.get('email'), idclient: Cookies.get('idclient'), jwt: Cookies.get('jwt') }));
  }, [])


  return (
    <>
      <NavBar />
      <BanniereT2 title="Profil" />
      <Container maxWidth="md" sx={{ my: 10, p: 0, boxShadow: 4 }}>
        {Cookies.get('jwt') && Cookies.get('jwt') !== "undefined" ? <ProfileTabs /> : <> {Cookies.remove('jwt')}<Navigate replace={true} to={'/'} /> </>
        }
      </Container>
      <Footer />
    </>
  );
}
