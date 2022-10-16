import { useSelector } from "react-redux"
import {AdminNavbarContainer, Content, ProfileButton, SeachBox} from "./components"
function AdminNavbar() {
  const {user}: any = useSelector(state => state);
  const {profile} = user;
  return (
    <AdminNavbarContainer>
        <Content>
          <i className="fa-solid fa-arrow-left left"></i>
          <i className="fa-solid fa-arrow-right right"></i>
        </Content>
       
        <Content>
          <SeachBox>
          <i className="fa-solid fa-magnifying-glass"></i>
            <input type={'text'} placeholder="Search..."/>
          </SeachBox>
         
          <ProfileButton>
          <span>{profile.fist_name} {profile.last_name}</span> <i className="fa-solid fa-user-shield"></i> 
          </ProfileButton>
        </Content>
    </AdminNavbarContainer>
  )
}

export default AdminNavbar