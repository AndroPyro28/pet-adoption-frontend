import { SetStateAction, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "react-router-dom";
import { getAllData } from "../../redux/dataSlice";
import { useGetAllAdoptionRequestQuery } from "../../services/adoptionRecordApis";
import { useGetAllAnimalRecordExcludeAdoptedQuery } from "../../services/animalRecordApis";
import { useGetAllUsersWithSearchQuery } from "../../services/authApis";
import HamburgerBar from "../hamburger-navbar/HamburgerBar";
import { AdminNavbarContainer, Content, LogoutButton, ProfileButton, SeachBox } from "./components"
function AdminNavbar() {
  const { user }: any = useSelector(state => state);
  const [search, setSearch] = useState({
    animal:'',
    adoption:'',
    user:''
  })
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { data: users, refetch: refetchUsers, isLoading: loadingUsers } = useGetAllUsersWithSearchQuery(search.user)
  if(pathname.includes('user')) {
     dispatch(getAllData(users))
  }

  const { data: animals, refetch: refetchAnimals, isLoading: loadingAnimals } = useGetAllAnimalRecordExcludeAdoptedQuery({ filter: false, search:search.animal })
  if(pathname.includes('animal')) {
  dispatch(getAllData(animals))
  }
  const { data: adoptions, refetch: refetchAdoptions, isLoading: loadingAdoptions } = useGetAllAdoptionRequestQuery(search.adoption);
  if(pathname.includes('adoption')) {
    dispatch(getAllData(adoptions))
  }
  const [openHamburgerNav, setOpenHamburgerNav] = useState(false)

  const { profile } = user;
  
  const hamburgerContent = [
    {
      content: 'Dashboard',
      path: '/admin'
    },
    {
      content: 'User-information',
      path: '/admin/user-information'
    },
    {
      content: 'Shelter-information',
      path: '/admin/shelter-information'
    },
    {
      content: 'Animal-record',
      path: '/admin/animal-record'
    },
    {
      content: 'Adoption-record',
      path: '/admin/adoption-record'
    },
    {
      content: 'Feedbacks',
      path: '/admin/feedback'
    },
    {
      content: 'Manage Pages',
      path: '/'
    },
  ]
  
  return (
    <AdminNavbarContainer>
      <Content onClick={() => setOpenHamburgerNav(true)}>
        <i className="fa-solid fa-bars hamburgerNavbar"></i>
      </Content>

      <Content>
        <SeachBox>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type={'text'} placeholder="Search..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(prev => {
              const {value} = e.target;
              if(pathname.includes('user')) {
                return {...prev, user: value}
              }
              if(pathname.includes('animal')) {
                return {...prev, animal: value}
              }
              if(pathname.includes('adoption')) {
                return {...prev, adoption: value}
              }
              return prev;
            })
          }
          } />
        </SeachBox>

        <ProfileButton>
          <span>{profile.fist_name} {profile.last_name}</span> <i className="fa-solid fa-user-shield"></i>
        </ProfileButton>
        <LogoutButton>
          Logout
        </LogoutButton>
      </Content>
        {
          openHamburgerNav && <HamburgerBar paths={hamburgerContent} handleClose={setOpenHamburgerNav}/>
        }
    </AdminNavbarContainer>
  )
}

export default AdminNavbar