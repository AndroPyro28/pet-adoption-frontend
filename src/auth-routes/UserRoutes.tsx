import Cookies from "js-cookie";
import UserNavbar from "../components/user_navbar/UserNavbar";
import { RoutePropTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { userToken } from "../types/cookies-types/userToken";
import { useLocation } from "react-router-dom";
import {UserLayout} from "./components";
import { useSelector } from "react-redux";
import { User } from "../models/User";
import { Navigate } from "react-router-dom";
import UserProfile from "../components/modal/user-profile/UserProfile";
import Loader from "../components/loader/Loader";
const UserRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
  const state: any = useSelector(state => state);
  const user: User = state.user;
  const profileModal = state.profileModal;
  const loader = state.loader;

  const {pathname} = useLocation();
  let userCookie: string | undefined = Cookies.get("userToken");

  if (!userCookie || userCookie.length <= 0) {
    return <Navigate to={'/'} />
  }

  let userToken: userToken = userCookie!

  if (!userToken || userToken.length <= 0) {
    return <Navigate to={'/'} />
  }

  if(user.role === 'ADMIN') {
    return <Navigate to={'/admin'} />
  }

  const marginedRoutes = ['/user/adoption', '/user/tracker', '/user/gallery', '/user/about']
  const colorChanger = pathname === "/user/" || pathname === "/user" || pathname === "/user/tracker" || pathname  === '/user/adoption'
  return (
      <UserLayout givePaddingToTop={ false /* marginedRoutes.includes(pathname) */ }>
        {
            profileModal && <UserProfile />
        }
        {
          loader && <Loader />
        }
      <UserNavbar color={ colorChanger ? "white" : "black"}/>
      <Component />
    </UserLayout>
  );
};

export default UserRoutes;
