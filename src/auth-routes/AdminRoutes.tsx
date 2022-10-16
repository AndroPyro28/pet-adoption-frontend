import Cookies from "js-cookie";
import { RoutePropTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { userToken } from "../types/cookies-types/userToken";
import {
  AdminLayout,
  AdminComponentContainer,
  GlobalStyles,
} from "./components";
import AdminSidebar from "../components/admin_sidebar/AdminSidebar";
import AdminNavbar from "../components/admin_navbar/AdminNavbar";
import { useSelector } from "react-redux";
import { User } from "../models/User";
import LogoutModal from "../components/modal/logout/LogoutModal";
import { Navigate } from "react-router-dom";
import { LoaderBackdrop } from "../components/loader/components";
import Loader from "../components/loader/Loader";

const AdminRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
  const state: any = useSelector(state => state);
  const user: User = state.user;
  const logoutModal = state.logoutModal;
  const loader = state.loader;
  let userCookie: string | undefined = Cookies.get("userToken");
  
  if (!userCookie || userCookie.length <= 0) {
    return <Navigate to={'/'} />
  }

  let userToken: userToken = userCookie!

  if (!userToken || userToken.length <= 0) {
    return <Navigate to={'/'} />
  }

  if(user.role === 'USER') {
    return <Navigate to={'/user'} />
  }
  
  return (
    <AdminLayout>
      <GlobalStyles />
      <AdminSidebar />
        {
            logoutModal && <LogoutModal />
        }
        {
          loader && <Loader />
        }
        
      <AdminComponentContainer>
        <AdminNavbar />
        <Component />
      </AdminComponentContainer>
    </AdminLayout>
  );
};

export default AdminRoutes;
