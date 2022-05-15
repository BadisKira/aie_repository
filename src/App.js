import Home from "./pages/home";
import Error404 from './components/Error404';
import AboutUs from './pages/aboutUs';
import ArrowUp from "./components/ArrowUp";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import RegisterForm from "./pages/LoginRegister";
import HotelAndAgences from "./pages/hotelsAndagences";
import AppHotel from "./manager/hotel/appHotel";
import AppAgence from "./manager/agence/appAgence";
import Profile from "./pages/Profile";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkout from "./pages/Checkout"
import HotelPage from "./pages/hotelPage"
import TripsPage from "./pages/tripsPage";
import AppAdmin from "./manager/admin/appAdmin";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#3a78c9",
      dark: "#263a49",
    },
    secondary: {
      main: "#1ea896",
      contrastText: "#757575",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<Error404 />} />
          <Route path='/:typeR/:ville' element={<HotelAndAgences />} />
          <Route path='/:typeR' element={<HotelAndAgences />} />
          <Route path='/propos' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<RegisterForm />} />
          <Route path='/profil/:id' element={<Profile />} />
          <Route path="/hotel/:idh" element={<HotelPage />} />
          <Route path='/voyage/:idv' element={<TripsPage />} />
          <Route path="/paiement" element={<Checkout />} />
          <Route path="/administrateur-site/*" element={<AppAdmin />} />
          <Route path="/manager/hotel/*" element={<AppHotel />} />
          <Route path="/manager/agence/*" element={<AppAgence />} />

        </Routes>
        <ArrowUp targetId={"navbarId"} />
      </>
    </ThemeProvider>
  );
}

export default App;
