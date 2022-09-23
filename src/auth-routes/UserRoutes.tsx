import Cookies from "js-cookie";
import { RoutePropTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { userToken } from "../types/cookies-types/userToken";

const UserRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
  let userCookie: string | undefined = Cookies.get("userToken");

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

  return (
    <>
      <Component />
    </>
  );
};

export default UserRoutes;
