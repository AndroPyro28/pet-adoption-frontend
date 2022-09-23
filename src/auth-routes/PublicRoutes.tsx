import Cookies from "js-cookie";
import PublicNavbar from "../components/public_navbar/PublicNavbar";
import { RoutePropTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { userToken } from "../types/cookies-types/userToken";
import { useLocation } from "react-router-dom";

const PublicRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
  const { pathname } = useLocation();
  let userCookie: string | undefined = Cookies.get("userToken");

  if (userCookie) {
    let userToken: userToken = JSON.parse(userCookie!);

    if (userToken != undefined || userToken != null || userToken) {
      if (userToken?.token?.length > 0 && userToken?.role === "user") {
        window.location.assign("/user");
      }

      if (userToken?.token?.length > 0 && userToken?.role === "admin") {
        window.location.assign("/admin");
      }
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
