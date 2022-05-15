import SideNav from "../sideNav/index";
import Layout from "../layout";
import { MaterialUIControllerProvider } from "../context";
import DashboardHotel from "./dashboard";
import ProfilHotel from "./profil";
import Notifications from "./notifications";
import SignUp from "./signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { getHotelInfoAdmin } from "../../redux/hotelSlice";

const AppHotel = () => {
    const navigate = useNavigate();
    // const hotelData = useSelector(state => state.hotel);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('APPhOTEL')
        dispatch(getHotelInfoAdmin({ emailh: "Adminhotel17@gmail.com", passwordh: "AdminHotel1" }));
    }, []);

    return (

        <MaterialUIControllerProvider>
            {Cookies.get('jwth')?.length > 0 ?

                <Layout>
                    <Routes >
                        <Route path="dashboard" element={<DashboardHotel />} />
                        <Route path="profil" element={<ProfilHotel />} />
                        <Route path="notifications" element={<Notifications />} />
                        <Route path="sign-out" element={<>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: "center", justifyContent: 'center' }}>
                                <Button
                                    size="large"
                                    variant="contained"
                                    onClick={() => {
                                        Cookies.remove('jwth');
                                        navigate('/manager/hotel/sign-up');
                                    }}>Se deconnecter</Button>
                            </Box>
                        </>} />
                        <Route path="*" element={<Navigate to="dashboard" />} />
                    </Routes>
                </Layout>

                :
                <Routes>
                    <Route path='sign-up' element={<SignUp />} />
                    <Route path="*" element={<Navigate to="sign-up" />} />
                </Routes>
            }

        </MaterialUIControllerProvider>
    );
};


export default AppHotel; 