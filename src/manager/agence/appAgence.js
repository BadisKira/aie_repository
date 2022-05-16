import Layout from "../layout";
import { MaterialUIControllerProvider } from "../context";
import DashboardHotel from "./dashboard";
import ProfilHotel from "./profil";
import Notifications from "./notifications";
import SignUp from "./signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
const AppAgence = () => {
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        // verifier si je suis logger ou pas 
    }, [])
    return (

        <MaterialUIControllerProvider>
            {Cookies.get('jwtA')?.length > 0 ?

                <Layout>
                    <Routes >
                        <Route path="dashboard" element={<DashboardHotel />} />
                        <Route path="profil" element={<ProfilHotel />} />
                        <Route path="notifications" element={<Notifications />} />
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


export default AppAgence; 