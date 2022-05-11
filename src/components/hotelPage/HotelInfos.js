import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HotTubIcon from "@mui/icons-material/HotTub";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import PoolIcon from "@mui/icons-material/Pool";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

const hotelInformation = {
  id: 1,
  name: "",
  address: "",
  rating: 4,
  hotelEmail: "",
  hotelPhone: "",
  description: "",
};

const equipments = [
  {
    id: 1,
    label: "Wifi gratuit",
    icon: <SignalWifi4BarIcon />,
  },
  { id: 2, label: "Paking gratuit", icon: <LocalParkingIcon /> },
  { id: 3, label: "Plage", icon: <BeachAccessIcon /> },
  { id: 4, label: "Piscine", icon: <PoolIcon /> },
  { id: 5, label: "Sauna", icon: <HotTubIcon /> },
];

const HotelInfos = () => {
  const [readMore, setReadMore] = useState(false);
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque nostrum eos commodi laudantium! Suscipit minus nemo ex ratione voluptate temporibus maiores tempora molestiae iste magni, deserunt aspernatur, amet, numquam aliquam excepturi iure quae reprehenderit vero similique sequi? Esse at temporibus repellat laborum tempore! Consequatur maiores corporis voluptate deleniti molestiae ea. Ratione, tenetur repellat! Accusamus sint dicta beatae voluptates recusandae quibusdam perferendis ea, laborum porro, libero, ratione nesciunt modi nostrum impedit iste officia eaque. A ab pariatur quod corrupti quis.";
  return (
    <Box
      p={3}
      mt={3}
      mb={10}
      sx={{
        boxShadow: "3",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography variant="h5" color="primary.dark" sx={{ fontWeight: "bold" }}>
        {" "}
        Plus d'informations
      </Typography>
      <>
        <Typography
          sx={{
            mt: 4,
            mb: 2,
            borderBottom: 1,
            borderColor: "#808080",
            width: "30%",
          }}
          variant="h6"
          component="div"
        >
          A propos de notre hotel
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          {readMore ? description : `${description.substring(0, 250)}...`}

          <Button onClick={() => setReadMore(!readMore)}> Lire plus</Button>
        </Typography>
      </>
      <>
        <Typography
          sx={{
            mt: 4,
            mb: 2,
            borderBottom: 1,
            borderColor: "#808080",
            width: "30%",
          }}
          variant="h6"
          component="div"
        >
          Equippements
        </Typography>
        <List
          dense
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {equipments.map((elt) => (
            <ListItem key={elt.id}>
              <ListItemIcon>{elt.icon}</ListItemIcon>
              <ListItemText primary={elt.label} />
            </ListItem>
          ))}
        </List>
      </>
    </Box>
  );
};

export default HotelInfos;
