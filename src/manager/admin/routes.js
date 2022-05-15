import HotelIcon from '@mui/icons-material/Hotel';
import LogoutIcon from '@mui/icons-material/Logout';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
//adilin deux truc kn


export const routesAd = [
    {
        title: "Hotels",
        icon: <HotelIcon sx={{ color: "white", margin: "0px 15px" }} fontSize="medium" />,
        location: "/administrateur-site/hotels"
    },
    {
        title: "Agences",
        icon: <TravelExploreIcon sx={{ color: "white", margin: "0px 15px" }} fontSize="medium" />,
        location: "/administrateur-site/agences"
    },
    {
        title: "Sign out",
        icon: <LogoutIcon sx={{ color: "white", margin: "0px 15px" }} fontSize="medium" />,
        location: "/administrateur-site/sign-out"
    }
]