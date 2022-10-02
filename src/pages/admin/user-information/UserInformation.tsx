import {UserInfomationContainer, UserInformationList, } from "./components"
import {UpperContents, DataList} from "../components";
import User from './User';
import Headers from './Headers';
import {useGetAllUsersQuery} from "../../../services/authApis";

function UserInformation() {

  const {data, isLoading, error} = useGetAllUsersQuery();
  const fetchusers = data?.map((user) => <User data={user} />)
  return (
    <UserInfomationContainer>

        <UpperContents>
            <h2>User information</h2>
            <i className="fa-solid fa-ellipsis dotdotdot"></i>
        </UpperContents>

        <UserInformationList>

          <Headers />

          <DataList>
            {
             isLoading ? <h1>loading...</h1> : fetchusers
            }
          </DataList>

        </UserInformationList>
        
    </UserInfomationContainer>
  )
}

export default UserInformation