import Cookies from "js-cookie";
import UserNavbar from "../components/user_navbar/UserNavbar";
import { RoutePropTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { userToken } from "../types/cookies-types/userToken";
import { useLocation } from "react-router-dom";
import {UserLayout} from "./components";
import { useSelector } from "react-redux";
import { User } from "../models/User";
import LogoutModal from "../components/modal/logout/LogoutModal";

const UserRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
  const state: any = useSelector(state => state);
  const user: User = state.user;
  const logoutModal = state.logoutModal;
  const {pathname} = useLocation();
  let userCookie: string | undefined = Cookies.get("userToken");
  if (!userCookie || userCookie.length <= 0) {
    window.location.assign("/");
  }

  let userToken: userToken = userCookie!

  if (!userToken || userToken.length <= 0) {
    window.location.assign("/");
  }

  if(user.role === 'ADMIN') {
    window.location.assign("/admin");
  }

  const marginedRoutes = ['/user/adoption', '/user/tracker', '/user/gallery', '/user/about']
  return (
      <UserLayout givePaddingToTop={ false /* marginedRoutes.includes(pathname) */ }>
        {
            logoutModal && <LogoutModal />
        }
      <UserNavbar color={pathname === "/user/" || pathname === "/user" || pathname === "/user/tracker" ? "white" : "black"}/>
      <Component />
    </UserLayout>
  );
};

export default UserRoutes;
