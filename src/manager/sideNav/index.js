import SideNavRoot from "./sideNavRoot";
import { routesH } from "../hotel/routes";
import { routesA } from "../agence/routes";
import { routesAd } from "../admin/routes";
import { useLocation } from "react-router-dom";
const SideNav = () => {
    const route = useLocation().pathname.split("/").slice(1);

    if (route.includes('administrateur-site')) {
        return <SideNavRoot routes={routesAd} />
    } else if (route.includes('hotel')) {
        return <SideNavRoot routes={routesH} />
    } else if (route.includes('agence')) {
        return <SideNavRoot routes={routesA} />
    }

};
export default SideNav; 