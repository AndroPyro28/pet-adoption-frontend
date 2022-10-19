import { SetStateAction, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "react-router-dom";
import { getAllData } from "../../redux/dataSlice";
import { useGetAllAdoptionRequestQuery } from "../../services/adoptionRecordApis";
import { useGetAllAnimalRecordExcludeAdoptedQuery } from "../../services/animalRecordApis";
import { useGetAllUsersWithSearchQuery } from "../../services/authApis";
import { AdminNavbarContainer, Content, ProfileButton, SeachBox } from "./components"
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
  const { profile } = user;
  // useEffect(() => {

  //   if (pathname.includes('adoption-record')) {
  //     const data = search.length > 0 ? adoptions?.filter((adoption) =>
  //       adoption?.adopter.email.includes(search) ||
  //       search.includes(`${adoption?.adopter.profile.fist_name} ${adoption?.adopter.profile.last_name}`)
  //     ) : adoptions
  //     console.log(data);
  //     dispatch(getAllData(data!))
  //   }
    
  //   if (pathname.includes('user-record')) {
  //     const data = search.length > 0 ? users?.filter((user) => user.email.includes(search)) : users
  //     console.log(data);
  //     dispatch(getAllData(data!))
  //   }
  //   if (pathname.includes('animal-record')) {
  //     const data = search.length > 0 ? animals?.filter((animal) =>
  //       animal.type.includes(search) ||
  //       animal.breed.includes(search) ||
  //       animal.name.includes(search)
  //     ) : animals
  //     console.log(data);
  //     dispatch(getAllData(data!))
  //   }
   
  // }, [search, pathname, users, animals, adoptions])

  return (
    <AdminNavbarContainer>
      <Content>
        <i className="fa-solid fa-arrow-left left"></i>
        <i className="fa-solid fa-arrow-right right"></i>
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
      </Content>
    </AdminNavbarContainer>
  )
}

export default AdminNavbar