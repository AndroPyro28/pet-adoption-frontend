import {AdminNavbarContainer, Content, ProfileButton, SeachBox} from "./components"
function AdminNavbar() {
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
          <span>Admin Profile</span> <i className="fa-solid fa-user-shield"></i> 
          </ProfileButton>
        </Content>
    </AdminNavbarContainer>
  )
}

export default AdminNavbar