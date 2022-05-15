import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import BanniereT2 from "../components/banniereType2";
import Header from "../components/hotelPage/Header";
import BookingForm from "../components/hotelPage/BookingForm";
import HotelImages from "../components/hotelPage/HotelImages";
import HotelInfos from "../components/hotelPage/HotelInfos";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneHotel } from "../redux/hotelSlice";
import Loader from "../components/Loading";
import axios from 'axios';
const HotelPage = () => {
  const params = useParams();
  const { idh } = params;
  const dispatch = useDispatch();
  const [myHotel, setMyHotel] = useState([])

  const getOneHotel = async (idh) => {
    return await axios.get(`http://localhost:80/bookAndGo/api/ADMIN/adminhotel/getOneHotel/${idh}`)
  }


  useEffect(() => {

    //dispatch(getOneHotel(idh));
    getOneHotel(idh)
      .then((res) => {
        const rr = [res.data];
        console.log(rr);

        setMyHotel([res.data]);
      })

    //


  }, []);

  // const hotelData = useSelector(state => state.hotel);
  // console.log("gg " + hotelData.hotels);






  return (
    <>
      <NavBar />
      <BanniereT2 title="Hotel" />
      {myHotel.length === 0 ?
        <div style={{ height: '500px', background: "#fff" }}>
          <Loader />
        </div>
        :
        <Container maxWidth="lg">
          <Grid container columnSpacing={3} rowSpacing={3}>
            <Grid item xs={12} sm={12} md={12}>
              <Header nomh={myHotel[0].nomh} note={myHotel[0].note} emailh={myHotel[0].emailh}
                adresseh={myHotel[0].addresseh}
                villeh={myHotel[0].villeh}
                numh={myHotel[0].numh}


              />
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <BookingForm />
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <HotelImages />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <HotelInfos equipementh={myHotel[0].equipementh} descriptionh={myHotel[0].descriptionh} />
            </Grid>
          </Grid>
        </Container>
      }
      <Footer />
    </>
  );
};

export default HotelPage;
