import { RoutePropTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { useAuthUpdatePasswordPageQuery } from "../services/updatePasswordApis";
import { Navigate } from "react-router-dom";
const UpdatePasswordRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
const { data, isLoading } = useAuthUpdatePasswordPageQuery()

if(isLoading) {
  return <h1>loading...</h1>
}

if(!data) {
  return <Navigate to={'/'} />
}

  return (
      <>
      <Component />
    </>
  );
};

export default UpdatePasswordRoutes;
