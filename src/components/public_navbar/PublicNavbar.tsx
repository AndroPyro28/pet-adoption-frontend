import { PublicNavbarContainer, Write } from "./components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicNavbar({ color }: { color: string }) {
  const {user}:any = useSelector(state => state)
  const {pathname} = useLocation();

  const isAtive = (path: string) => {
    return path === pathname ? 'active' : '';
  }
  
  return (
    <PublicNavbarContainer color={color}>
      <img src="/images/logo/logo.png" className="logo" />
      <ul>
        <li className={isAtive('/')}>
          <NavLink to="/" > Home </NavLink>
        </li>
        <li className={isAtive('/about')}>
          <NavLink to="/about" > About </NavLink>
        </li>
        <li className={isAtive('/gallery')}>
          <NavLink to="/gallery" > Gallery </NavLink>
        </li>
        <Write>Write</Write>
      </ul>
      {
        user.role === "ADMIN" && <Link className="admin__back__btn" to="/admin">
        <i className="fa-solid fa-arrow-left"></i> go back
      </Link>
      }

    </PublicNavbarContainer>
  );
}

export default PublicNavbar;
