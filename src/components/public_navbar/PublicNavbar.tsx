import { PublicNavbarContainer } from "./components";
import { NavLink } from "react-router-dom";

function PublicNavbar({ color }: { color: string }) {
  return (
    <PublicNavbarContainer color={color}>
      <img src="/images/logo/logo.png" className="logo" />
      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about"> About </NavLink>
        </li>
        <li>
          <NavLink to="/gallery"> Gallery </NavLink>
        </li>
        <li>
          <NavLink to="/"> Tracker </NavLink>
        </li>
        <li>
          <NavLink to="/"> Adoption </NavLink>
        </li>
      </ul>
    </PublicNavbarContainer>
  );
}

export default PublicNavbar;
