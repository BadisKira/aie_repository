import SideNav from "../sideNav/index";
import Layout from "../layout";
import { MaterialUIControllerProvider } from "../context";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import Hotels from "./hotels";
import Agences from "./agences";
import SignOut from "./sign-out";


const AppAdmin = () => {

    const navigate = useNavigate();

    return (
        <MaterialUIControllerProvider>
            {true ?
                <Layout>

                    <Routes>
                        <Route path="hotels" element={<Hotels />} />
                        <Route path="agences" element={<Agences />} />
                        <Route path='sign-out' element={<SignOut />} />
                        <Route path='*' element={<Hotels />} />
                    </Routes>
                </Layout>
                :
                <Routes>

                </Routes>
            }
        </MaterialUIControllerProvider>
    )

};

export default AppAdmin; 