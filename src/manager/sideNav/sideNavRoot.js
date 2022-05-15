import { Box, Typography, Stack, Divider, IconButton, AppBar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import ClearIcon from '@mui/icons-material/Clear';
import {
    useMaterialUIController,
    setTranslateMiniSideNav
} from "../context";
import { useState } from "react";
import { AltRoute } from "@mui/icons-material";



const SideNavRoot = ({ routes }) => {
    const route = useLocation().pathname.split("/").slice(1);
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, translateMiniSideNav } = controller;
    const GetRoutes = () => {

        return (<Stack
            sx={{
                width: "80%",
            }}
        >
            {
                routes.map(({ title, icon, location }, index) => {
                    return (
                        <Link to={location} key={index} >
                            <Box sx={{
                                display: "flex",
                                width: "100%",
                                alignItems: "center",
                                margin: "10px 0px",
                                height: "50px",
                                borderRadius: "10px",
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.5)"
                                }
                            }} >
                                {icon}
                                <Typography component={'h3'} variant='subtitle1' sx={{
                                    color: "white", fontSize: "1rem"
                                }}>{title}</Typography>
                            </Box>
                        </Link>

                    )
                })
            }
        </Stack>)
    }


    return (
        <>
            <Box sx={{
                boxShadow: "1px 1px 2px rgba(0,0,0,.6),-1px -1px 1px rgba(0,0,0,.6)",
                position: "fixed",
                zIndex: miniSidenav === true ? 10000 : 1,
                width: "280px",
                left: miniSidenav === true ? `${translateMiniSideNav}px` : '30px',
                minHeight: "500px",
                height: "92vh",
                borderRadius: "10px",
                backgroundColor: "#37474f",
                marginRight: '15px', display: 'flex'
                , flexDirection: "column", alignItems: "center"
            }}>
                <Box sx={{
                    width: "100%",
                    textAlign: "center",
                    padding: "45px 0px",
                    position: "relative"

                }}>

                    <Typography component="h2" variant='subtitle1' fontWeight={600} sx={{ color: "white" }}>
                        {route.includes('administrateur-site')
                            ? "Administrateur"
                            : " HOTEL'S name  "
                        }
                    </Typography>
                    <Divider variant="middle" sx={{ backgroundColor: "rgba(255,255,255,0.4)", transform: "translateY(20px)" }} />

                </Box>
                <GetRoutes />


            </Box>

        </>)
};

export default SideNavRoot; 