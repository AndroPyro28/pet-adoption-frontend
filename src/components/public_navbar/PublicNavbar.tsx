import { PublicNavbarContainer, Write } from "./components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import WriteBlog from "../modal/blog/WriteBlog";
import Updateblog from "../modal/blog/UpdateBlog";
import HamburgerBar from "../hamburger-navbar/HamburgerBar";

function PublicNavbar({ color } : { color: string }) {
  const {user, blog}:any = useSelector(state => state);
  const {pathname} = useLocation();
  const [writeModalToggle, setWriteModalToggle] = useState(false);

  const isAtive = (path: string) => {
    return path === pathname ? 'active' : '';
  }

  const hamburgerContent = [
    {
      content: 'Home',
      path: '/'
    },
    {
      content: 'Gallery',
      path: '/gallery'
    },
    {
      content: 'About',
      path: '/about'
    },
  ]

  const [openHamburgerNav, setOpenHamburgerNav] = useState(false)
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
        {
           user.role === 'ADMIN' && <Write onClick={() => setWriteModalToggle(true)}>Write</Write>
        }
        
        
      </ul>
        <li className="navIconContainer hamburgerContainer" onClick={() => setOpenHamburgerNav(true)}>
          <i className="fa-solid fa-bars hamburger"></i>
        </li>
      {
        user.role === "ADMIN" && 
        <Link className="admin__back__btn" to="/admin">
          <i className="fa-solid fa-arrow-left"></i> go back
        </Link>
      }
      {
        user.role === 'ADMIN' && writeModalToggle && <WriteBlog setWriteModalToggle={setWriteModalToggle} />
      }
      {
        blog.id && user.role === 'ADMIN' && <Updateblog />
      }
        {
          openHamburgerNav && <HamburgerBar paths={hamburgerContent} handleClose={setOpenHamburgerNav}/>
        }
    </PublicNavbarContainer>
  );
}

export default PublicNavbar;