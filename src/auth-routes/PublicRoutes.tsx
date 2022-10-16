import Cookies from "js-cookie";
import PublicNavbar from "../components/public_navbar/PublicNavbar";
import { RoutePropTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { userToken } from "../types/cookies-types/userToken";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { User } from "../models/User";
import { useSelector } from "react-redux";
import {PublicRoutesContainer} from "./components"
const PublicRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
    const { pathname } = useLocation();
    const state: any = useSelector(state => state);
    const user: User = state.user;
    let userToken: userToken | undefined = Cookies.get("userToken");

    if (userToken != undefined || userToken != null || userToken) {

      if(pathname.includes('login') || pathname.includes('signup')) {
        return <Navigate to={'/'} />
      }

      if(user.role === 'USER') {
        return <Navigate to={'/user'} />
      }
    }

  const excludedRoutes = ["/signup", "/login", '/recovery/reset-password', '/recovery/code-verification', '/recovery'];
  return (
    <PublicRoutesContainer>
      {!excludedRoutes.includes(pathname) && (
        <PublicNavbar color={pathname === "/" ? "white" : "black"} />
      )}
      <Component />
    </PublicRoutesContainer>
  );
};

export default PublicRoutes;
