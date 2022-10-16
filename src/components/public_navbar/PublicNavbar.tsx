import { PublicNavbarContainer, Write } from "./components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import WriteBlog from "../modal/blog/WriteBlog";

function PublicNavbar({ color } : { color: string }) {
  const {user}:any = useSelector(state => state);
  const {pathname} = useLocation();
  const [writeModalToggle, setWriteModalToggle] = useState(false);

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
        <Write onClick={() => setWriteModalToggle(true)}>Write</Write>
      </ul>
      {
        user.role === "ADMIN" && 
        <Link className="admin__back__btn" to="/admin">
          <i className="fa-solid fa-arrow-left"></i> go back
        </Link>
      }
      {
        user.role === 'ADMIN' && writeModalToggle && <WriteBlog setWriteModalToggle={setWriteModalToggle} />
      }
    </PublicNavbarContainer>
  );
}

export default PublicNavbar;