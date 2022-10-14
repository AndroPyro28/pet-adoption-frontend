import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import {
  AdminSidebarContainer,
  LogoutButton,
  ProfileButton,  
} from "./components";
import Logic from "./Logic";
import HandleLogout from "../../helper/handleLogout";
import { useSelector } from 'react-redux';

function AdminSidebar() {
  const { navLinkStylesFirst,
    navLinkStyles } = Logic();
  const { toggleModalLogout } = HandleLogout()
   const { user }: any = useSelector(state => state);
   const {profile} = user;
  return (
    <AdminSidebarContainer>
      <Logo height={120} width={120} />
      <NavLink to="/admin" style={navLinkStylesFirst}>
        <i className="fa-solid fa-house"></i> Dashboard
      </NavLink>
      <NavLink to={"/admin/user-information"} style={navLinkStyles}>
        <i className="fa-solid fa-user"></i> User Information
      </NavLink>
      <NavLink to="/admin/shelter-information" style={navLinkStyles}>
        <i className="fa-solid fa-tents"></i> Shelter Information
      </NavLink>
      <NavLink to="/admin/animal-record" style={navLinkStyles}>
        <i className="fa-solid fa-folder"></i> Animal Record
      </NavLink>
      <NavLink to="/admin/adoption-record" style={navLinkStyles}>
        <i className="fa-solid fa-paw"></i> Adoption Record
      </NavLink>
      <NavLink to="/admin/feedback" style={navLinkStyles}>
        <i className="fa-solid fa-square-rss"></i> Feedback
      </NavLink>

      <LogoutButton onClick={toggleModalLogout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
      </LogoutButton>
      <ProfileButton>
        <i className="fa-solid fa-user-shield"></i> <span>{profile.fist_name} {profile.last_name} </span>
      </ProfileButton>
    </AdminSidebarContainer>
  );
}

export default AdminSidebar;
