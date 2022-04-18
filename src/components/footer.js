import {
    Grid,
    Typography,
    IconButton,
    Box,
    Button,
    Container,
} from "@mui/material";
import "./styles/footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer2elt = ({ icon, msg }) => {
    return (
        <div className="contact-info">
            <IconButton style={{ color: "white" }}>
                {icon}
            </IconButton>

            <Typography component={"p"} variant="subtitle1" >
                {msg}
            </Typography>
        </div>
    )

}
const Footer = () => {
    return (
        <footer>

            <div className="footer-sec1">
                <img className="footer-img" src={process.env.PUBLIC_URL + "/assets/logoBGwhite.svg"} />
                <Typography component='h2' variant="subtitle2" className="reserved" >
                    Copyright © 2022 Book&Go. All rights reserved
                </Typography>
            </div>

            <div className="footer-sec2">
                <Typography variant="h5" component="p" className="contact-title">
                    contactez-nous
                </Typography>


                <Footer2elt icon={<LocalPhoneIcon />} msg="0542253312" />
                <Footer2elt icon={<EmailIcon />} msg="book&go@email.com" />


            </div>

            <div className="footer-sec3">
                <div>
                    <IconButton style={{ backgroundColor: "white" }}>
                        <FacebookIcon style={{ fontSize: "25px" }} />
                    </IconButton>
                    <IconButton style={{ backgroundColor: "white" }}>
                        <InstagramIcon style={{ fontSize: "25px" }} />
                    </IconButton>
                    <IconButton style={{ backgroundColor: "white" }}>
                        <TelegramIcon style={{ fontSize: "25px" }} />
                    </IconButton>

                </div>
            </div>

            {/* </Grid> */}
        </footer >
    );
};

export default Footer;
