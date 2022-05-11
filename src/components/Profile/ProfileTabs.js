import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import ProfileInfos from "./ProfileInfos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import FavoritesList from "./FavoritesList";
import ReservationsList from "./ReservationsList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box
          sx={{
            display: "flex",
            py: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{
            paddingTop: "3vh",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tab icon={<AccountCircleRoundedIcon />} label="Mon profil" />

          <Tab
            icon={<AssignmentTurnedInRoundedIcon />}
            label="Mes reservations"
          />
          <Tab icon={<FavoriteIcon />} label="Mes favoris" />
        </Tabs>
      </Box>
      <>
        <TabPanel value={value} index={0}>
          <ProfileInfos />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ReservationsList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FavoritesList />
        </TabPanel>
      </>
    </Box>
  );
}
