import { PublicNavbarContainer } from "./components";
import { NavLink } from "react-router-dom";
import NavlinkStyles from "../../helper/NavlinkStyles";
function PublicNavbar({ color }: { color: string }) {
  const {navLinkStyleForUserAndPublic} = NavlinkStyles();
  return (
    <PublicNavbarContainer color={color}>
      <img src="/images/logo/logo.png" className="logo" />
      <ul>
        <li>
          <NavLink to="/" > Home </NavLink>
        </li>
        <li>
          <NavLink to="/about" > About </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" > Gallery </NavLink>
        </li>
      </ul>
    </PublicNavbarContainer>
  );
}

export default PublicNavbar;
