import { SetStateAction, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "react-router-dom";
import { getAllData } from "../../redux/dataSlice";
import { useGetAllAdoptionRequestQuery } from "../../services/adoptionRecordApis";
import { useGetAllAnimalRecordExcludeAdoptedQuery } from "../../services/animalRecordApis";
import { useGetAllUsersWithSearchQuery } from "../../services/authApis";
import {AdminNavbarContainer, Content, ProfileButton, SeachBox} from "./components"
function AdminNavbar() {
  const {user}: any = useSelector(state => state);
  const [search, setSearch] = useState<string>('')
  const dispatch = useDispatch();
  const {pathname} = useLocation();

    const {data:users, refetch: refetchUsers, isLoading:loadingUsers} = useGetAllUsersWithSearchQuery(search)
    if(pathname.includes('user')) {
      dispatch(getAllData(users))

    }

    const {data:animals, refetch: refetchAnimals, isLoading:loadingAnimals} = useGetAllAnimalRecordExcludeAdoptedQuery({filter:false, search})
    if(pathname.includes('animal')) {
      dispatch(getAllData(animals))
    }
    const { data:adoptions, refetch: refetchAdoptions, isLoading:loadingAdoptions } = useGetAllAdoptionRequestQuery(search);
    if(pathname.includes('adoption')) {
      dispatch(getAllData(adoptions))

    }
  const {profile} = user;


  // useEffect(() => {
  //   if(pathname.includes('user')) {
  //     refetchUsers()
  //   }
  
  //   if(pathname.includes('animal')) {
  //     refetchAnimals()
  //   }
  
  //   if(pathname.includes('adoption')) {
  //     refetchAdoptions()
  //   }
    
  //   }, [search, pathname])

  return (
    <AdminNavbarContainer>
        <Content>
          <i className="fa-solid fa-arrow-left left"></i>
          <i className="fa-solid fa-arrow-right right"></i>
        </Content>
       
        <Content>
          <SeachBox>
          <i className="fa-solid fa-magnifying-glass"></i>
            <input type={'text'} placeholder="Search..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(prev => e.target.value)}/>
          </SeachBox>
         
          <ProfileButton>
          <span>{profile.fist_name} {profile.last_name}</span> <i className="fa-solid fa-user-shield"></i> 
          </ProfileButton>
        </Content>
    </AdminNavbarContainer>
  )
}

export default AdminNavbar