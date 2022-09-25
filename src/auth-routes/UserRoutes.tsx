import Cookies from "js-cookie";
import UserNavbar from "../components/user_navbar/UserNavbar";
import { RoutePropTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { userToken } from "../types/cookies-types/userToken";
import { useLocation } from "react-router-dom";
import {UserLayout, UserLayout2} from "./components";

const UserRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
  let userCookie: string | undefined = Cookies.get("userToken");
  const {pathname} = useLocation();

  if (!userCookie || userCookie.length <= 0) {
    window.location.assign("/");
  }
  
  let userToken:userToken = JSON.parse(userCookie!);

  if (!userToken || userToken?.role?.length <= 0 && userToken?.role?.length <= 0) {
    window.location.assign("/");
  }

  if (userToken?.role == "admin") {
    window.location.assign("/admin");
  }
  const marginedRoutes = ['/user/adoption', '/user/tracker', '/user/gallery', '/user/about']
  return (
      <UserLayout givePaddingToTop={marginedRoutes.includes(pathname)}>
      <UserNavbar color={pathname === "/user/" || pathname === "/user" ? "white" : "black"}/>
      <Component />
    </UserLayout>
  );
};

export default UserRoutes;
