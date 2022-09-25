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
const AdminRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
  let userCookie: string | undefined = Cookies.get("userToken");

  if (!userCookie || userCookie.length <= 0) {
    window.location.assign("/");
  }

  let userToken: userToken = JSON.parse(userCookie!);

  if (
    !userToken ||
    (userToken?.role?.length <= 0 && userToken?.role?.length <= 0)
  ) {
    window.location.assign("/");
  }

  if (userToken?.role == "user") {
    window.location.assign("/user");
  }

  return (
    <AdminLayout>
      <GlobalStyles />
      <AdminSidebar />
      <AdminComponentContainer>
        <AdminNavbar />
        <Component />
      </AdminComponentContainer>
    </AdminLayout>
  );
};

export default AdminRoutes;
