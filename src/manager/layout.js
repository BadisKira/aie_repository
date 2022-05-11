import SideNav from "./sideNav";
import NavBar from "./navbar/index";
import { Grid, Box, Slide } from "@mui/material";
import { useEffect } from "react";

import {
    useMaterialUIController,
    setMiniSidenav,

} from "./context/index";

const Layout = ({ children }) => {
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav } = controller;
    useEffect(() => {
        // A function that sets the mini state of the sidenav.
        function handleMiniSidenav() {
            setMiniSidenav(dispatch, window.innerWidth < 1200);
        }

        /** 
         The event listener that's calling the handleMiniSidenav function when resizing the window.
        */
        window.addEventListener("resize", handleMiniSidenav);

        // Call the handleMiniSidenav function to set the state with the initial value.
        handleMiniSidenav();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleMiniSidenav);
    }, [dispatch]);


    return (
        <Box sx={{ backgroundColor: "#b0bec5", minHeight: "100vh", height: "auto" }}>
            {miniSidenav ?

                <Box paddingX={3} paddingY={4} >
                    <SideNav />
                    <NavBar />
                    {children}
                </Box>
                :
                <>
                    <Grid container paddingY={4} paddingX={2}>
                        <Grid item xs={3} >
                            <SideNav />
                        </Grid>
                        <Grid item xs={9}  >
                            <NavBar />
                            <br />
                            {children}
                        </Grid>

                    </Grid>
                </>

            }

        </Box>
    )
};
export default Layout; 