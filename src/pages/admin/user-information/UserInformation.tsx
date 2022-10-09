import {UserInfomationContainer, UserInformationList, } from "./components"
import {UpperContents, DataList, Pagination} from "../components";
import User from './User';
import Headers from './Headers';
import {useGetAllUsersQuery} from "../../../services/authApis";
import {useState, useEffect} from "react";

function UserInformation() {
  const [maxPage, setMaxPage] = useState<number>()
  const [currentPage, setCurrentPage] = useState<number>(0)

  const {data, isLoading, error} = useGetAllUsersQuery();

  useEffect(() => {
    setMaxPage(Math.ceil(data?.length! / 5));
  }, [data])

  const fetchusers = data?.length! > 0 ? data
  ?.slice(5 * currentPage, 5 * currentPage + 5)
  ?.map((user) => <User key={user.id} data={user} /> ) :  
  <h1>No animals record found!</h1>

  return (
    <UserInfomationContainer>
        <UpperContents>
            <h2>User information</h2>
            <i className="fa-solid fa-ellipsis dotdotdot"></i>
        </UpperContents>

        <UserInformationList>

          <Headers />
            {
             isLoading ? <h1>loading...</h1> :  <DataList> {fetchusers} </DataList>
            }
        {
          maxPage! > 0 && <Pagination>
            <button>Prev</button><span>{currentPage + 1}</span> / <span>{maxPage}</span>  <button>Next</button>
          </Pagination>
        }
        </UserInformationList>
        
    </UserInfomationContainer>
  )
}

export default UserInformation