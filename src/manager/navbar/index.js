import {
    useMaterialUIController,
    setTransparentNavbar,
    setTranslateMiniSideNav
} from "../context/index";



import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';

// react-router components
import { useLocation, Link } from "react-router-dom";

import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import NavText from "./navText";
const NavBar = ({ absolute, light, isMini }) => {
    const [navbarType, setNavbarType] = useState("fixed");
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, transparentNavbar, fixedNavbar, translateMiniSideNav } = controller;
    const route = useLocation().pathname.split("/").slice(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        // Setting the navbar type
        if (fixedNavbar) {
            setNavbarType("sticky");
        } else {
            setNavbarType("static");
        }

        // A function that sets the transparent state of the navbar.
        function handleTransparentNavbar() {

            setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
        }

        /** 
         The event listener that's calling the handleTransparentNavbar function when 
         scrolling the window.
        */
        window.addEventListener("scroll", handleTransparentNavbar);

        // Call the handleTransparentNavbar function to set the state with the initial value.
        handleTransparentNavbar();

        // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleTransparentNavbar);
    }, [dispatch, fixedNavbar]);

    const handelMenuClick = () => {
        if (isMenuOpen) {
            setTranslateMiniSideNav(dispatch, (-280 - 30))
        } else {
            setTranslateMiniSideNav(dispatch, 30);
        }
        setIsMenuOpen(!isMenuOpen);
    }




    return (
        <AppBar
            //position={absolute ? "sticky" : "static"}
            position={navbarType}
            color="inherit"
            elevation={5}
            // sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
            sx={(theme) => ({
                backdropFilter: transparentNavbar || absolute ? "none" : `saturate(200%) blur(2rem)`,

                backgroundColor:
                    `${transparentNavbar || absolute
                        ? `inherit`
                        : "rgba(255,255,255,0.8)"}`,
                // top: `${absolute ? 0 : 0.75}rem`,
                top: "1rem",
                //transform: "translateY(150px)",
                minHeight: "4.5rem",
                display: "grid",
                alignItems: "center",
                borderRadius: '10px',
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                paddingRight: absolute ? "0.5rem" : 0,
                paddingLeft: absolute ? "1rem" : 0,
                boxShadow: !transparentNavbar ? '1px 1px 1px rgba(0,0,0,.3) ,-1px -1px 1px rgba(0,0,0,.1)' : 0,

                "& .MuiToolbar-root": {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                    [theme.breakpoints.up("sm")]: {
                        minHeight: "auto",
                        padding: `0.25rem 1rem`,
                    },
                },


            })}
        >
            <Toolbar sx={(theme) => ({
                flexDirection: "row",
                alignItems: "center",
                paddingTop: "0",
                paddingBottom: "0",
                pt: 0.5,
                pb: 0.5,

                [theme.breakpoints.up("md")]: {

                },
            })}>
                <Box color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme, isMini) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",


                    [theme.breakpoints.up("md")]: {
                        justifyContent: isMini ? "space-between" : "stretch",
                        width: isMini ? "100%" : "max-content",
                    },

                    [theme.breakpoints.up("xl")]: {
                        justifyContent: "stretch !important",
                        width: "max-content !important",
                    },
                })}>

                    <NavText icon={<HomeIcon size='small' sx={{ color: "rgba(0,0,0,0.7)", transform: "translateY(3px)" }} />} title={route[route.length - 1]} route={route} light={light} />
                </Box>

                {!miniSidenav ? null : (<Box pr={1}>
                    <IconButton onClick={handelMenuClick}>
                        {isMenuOpen ? <MenuOpenIcon /> : <MenuIcon />}

                    </IconButton>
                </Box>)}

            </Toolbar>
        </AppBar >
    )
};

export default NavBar