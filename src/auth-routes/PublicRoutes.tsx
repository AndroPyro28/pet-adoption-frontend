import Cookies from "js-cookie";
import PublicNavbar from "../components/public_navbar/PublicNavbar";
import { RoutePropTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { userToken } from "../types/cookies-types/userToken";
import { useLocation } from "react-router-dom";
import { User } from "../models/User";
import { useSelector } from "react-redux";

const PublicRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
    const { pathname } = useLocation();
    const state: any = useSelector(state => state);
    const user: User = state.user;
    let userToken: userToken | undefined = Cookies.get("userToken");

    if (userToken != undefined || userToken != null || userToken) {
      if(user.role === 'ADMIN') {
        window.location.assign("/admin");
      }
      if(user.role === 'USER') {
        window.location.assign("/user");
      }
    }

  const excludedRoutes = ["/signup", "/login"];

  return (
    <>
      {!excludedRoutes.includes(pathname) && (
        <PublicNavbar color={pathname === "/" ? "white" : "black"} />
      )}
      <Component />
    </>
  );
};

export default PublicRoutes;
