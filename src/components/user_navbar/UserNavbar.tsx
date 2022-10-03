import { UserNavbarTop, UserNavbarBottom, UserNavbarContainer, LittleNavigation, User } from "./components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function UserNavbar({ color }: { color: string }) {
  const { pathname } = useLocation();
  const currentRoute = pathname.split('/user/')[1];
  const excludedRoutes = ['/user', '/user/']
  return (
    <UserNavbarContainer>
      <UserNavbarTop color={color}>
        <img src="/images/logo/logo.png" className="logo" />
        <ul>
          <li>
            <NavLink to="/user"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/user/about"> About </NavLink>
          </li>
          <li>
            <NavLink to="/user/gallery"> Gallery </NavLink>
          </li>
          <li>
            <NavLink to="/user/tracker"> Tracker </NavLink>
          </li>
          <li>
            <NavLink to="/user/adoption"> Adoption </NavLink>
          </li>
          <User className="fa-solid fa-circle-user" />
        </ul>
      </UserNavbarTop>
      {
        // !excludedRoutes.includes(pathname) && <UserNavbarBottom>
        //   {/* <span></span> */}

        //   <LittleNavigation>
        //     <NavLink to={`/user`}>
        //       Home
        //     </NavLink>
        //     /
        //     <NavLink to={`/user/${currentRoute}`}>
        //       {currentRoute}
        //     </NavLink>
        //   </LittleNavigation>

        // </UserNavbarBottom>
      }

    </UserNavbarContainer>
  );
}

export default UserNavbar;
