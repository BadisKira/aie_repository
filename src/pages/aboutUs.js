import { Container, useTheme, Box } from "@mui/material";
import BanniereT2 from "../components/banniereType2";
import LeftPart from "../components/about/leftPart";
import MiniCards from "../components/about/miniCards";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Owners from "../components/about/owners";

import "../components/styles/about.css";

const AboutUs = () => {
    const theme = useTheme();
    /** */
    return (<>
        <Navbar />
        <BanniereT2 title={"A propos"} />
        <Container
            sx={theme => ({
                [theme.breakpoints.down("md")]: {
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    columnGap: "35px",
                },
                [theme.breakpoints.up('md')]: {
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "35px",
                }
            })}
        >
            <LeftPart />
            <MiniCards />
        </Container>
        <Owners />
        <Footer />
    </>)
};

export default AboutUs; 