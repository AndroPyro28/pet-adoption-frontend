import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { useLocation } from "react-router-dom";
import {
  AdminSidebarContainer,
  LogoutButton,
  ProfileButton,
} from "./components";

function AdminSidebar() {
  const {pathname} = useLocation()
  const navLinkStylesFirst = ({isActive}: any) => { // this is temporary cause it bugged
    if(pathname != '/admin') {
      isActive=false
    }
    return {
      background: isActive ? "#EAEAEA" : "",
      color: isActive ? "rgb(65, 65, 65)" : "gray",
    };
  }

  const navLinkStyles = ({isActive}: any) => {
    return {
      background: isActive ? "#EAEAEA" : "",
      color: isActive ? "rgb(65, 65, 65)" : "gray",
    };
  }

  return (
    <AdminSidebarContainer>
      <Logo height={120} width={120} />
      <NavLink to="/admin" style={navLinkStylesFirst}>
        <i className="fa-solid fa-house"></i> Home
      </NavLink>
      <NavLink to={"/admin/users"} style={navLinkStyles}>
        <i className="fa-solid fa-user"></i> User Information
      </NavLink>
      <NavLink to="/admin/shelter" style={navLinkStyles}>
        <i className="fa-solid fa-tents"></i> Shelter Information
      </NavLink>

      <NavLink to="/admin/animal-record" style={navLinkStyles}>
        <i className="fa-solid fa-folder"></i> Animal Record
      </NavLink>
      <NavLink to="/admin/adoption-record" style={navLinkStyles}>
        <i className="fa-solid fa-paw"></i> Adoption Record
      </NavLink>

      <LogoutButton>
        <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
      </LogoutButton>

      <ProfileButton>
        <i className="fa-solid fa-user-shield"></i> <span>Admin Profile </span>
      </ProfileButton>
    </AdminSidebarContainer>
  );
}

export default AdminSidebar;
