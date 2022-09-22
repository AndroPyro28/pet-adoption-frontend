import Cookies from "js-cookie";
import { useEffect } from "react";
import PublicNavbar from "../components/public_navbar/PublicNavbar";
import { PublicRouteTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { userToken } from "../types/cookies-types/userToken";
import { useLocation } from "react-router-dom";
const PublicRoutes = ({ Component }: PublicRouteTypes): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    let cookie = Cookies.get("userToken");

    let userToken: userToken | undefined = JSON.parse(cookie ?? "{}");

    if (userToken != undefined || userToken != null || userToken) {
      if (userToken?.token?.length > 0 && userToken?.role === "user") {
        window.location.assign("/user");
      }

      if (userToken?.token?.length > 0 && userToken?.role === "admin") {
        window.location.assign("/admin");
      }
    }
  }, []);

  const excludedRoutes = ['/signup', '/login']

  return (
    <>
    {
        !excludedRoutes.includes(pathname) &&
        <PublicNavbar color={pathname === "/" ? "white" : "black"} />
    }
      <Component />
    </>
  );
};

export default PublicRoutes;
