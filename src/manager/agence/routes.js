import DashboardIcon from '@mui/icons-material/Dashboard';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';


export const routesA = [
    {
        title: "Dashboard",
        icon: <DashboardIcon sx={{ color: "white", margin: "0px 15px" }} fontSize="medium" />,
        location: "/manager/agence/dashboard"
    },
    {
        title: "Notifications",
        icon: <CircleNotificationsIcon sx={{ color: "white", margin: "0px 15px" }} fontSize="medium" />,
        location: "/manager/agence/notifications"
    },
    {
        title: "Profil",
        icon: <PersonIcon sx={{ color: "white", margin: "0px  15px" }} fontSize="medium" />,
        location: "/manager/agence/profil"
    }, {
        title: "Sign out",
        icon: <LogoutIcon sx={{ color: "white", margin: "0px 15px" }} fontSize="medium" />,
        location: "/manager/agence/sign-up"
    }
]