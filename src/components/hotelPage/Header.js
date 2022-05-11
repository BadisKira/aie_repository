import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CircleIcon from "@mui/icons-material/Circle";
import GradeIcon from "@mui/icons-material/Grade";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Notes = {
  0.5: "Alarmant",
  1: "très mauvais",
  1.5: "mauvais",
  2: "mauvais",
  2.5: "Moyen",
  3: "Bon",
  3.5: "Très bon",
  4: "Très bon",
  4.5: "Excellent",
  5: "Parfait",
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ratingValue, setRatingValue] = React.useState(2);
  return (
    <Box
      py={1}
      px={3}
      mt={3}
      sx={{ display: "flex", justifyContent: "space-between", boxShadow: "3" }}
    >
      <Box>
        <Typography variant="h4">Hotel du Nord</Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#3a78c9",
              },
            }}
            name="feedBackRating"
            value={4}
            readOnly
            icon={<CircleIcon fontSize="inherit" />}
            emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
            precision={0.5}
          />
          <Typography variant="body1" sx={{ ml: 2 }}>
            {Notes[4]}
          </Typography>
        </Box>
        <Typography variant="h6" color="#434343" sx={{ fontSize: "1rem" }}>
          {" "}
          <LocationOnRoundedIcon fontSize="small" /> Bd Colonel Amirouche,
          Béjaïa
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography mr={3} color="#434343" variant="subtitle1">
            <LocalPhoneIcon fontSize="small" /> 034112578{" "}
          </Typography>
          <Typography mr={3} color="#434343" variant="subtitle1">
            {" "}
            <EmailIcon fontSize="small" /> HotelDuNord@gmail.com
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button onClick={handleOpen}>Noter l'hotel</Button>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" component="legend">
              Attribuez une note à cet hotel
            </Typography>
            <Rating
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#3a78c9",
                },
              }}
              size="large"
              name="rateHotel"
              defaultValue={2}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={0.5}
              icon={<CircleIcon fontSize="inherit" />}
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
            />
            <Button type="submit" onClick={handleClose}>
              Ok
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Header;
