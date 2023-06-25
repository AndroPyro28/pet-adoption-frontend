import { UserInfomationContainer, UserInformationList, } from "./components"
import { UpperContents, DataList, Pagination } from "../components";
import User from './User';
import Headers from './Headers';
import { useState, useEffect } from "react";
import exportFromJSON from 'export-from-json'
import { dateTimeLocalFormatter, dateTimeRemoveZ } from "../../../helper/DateTimeFormmater";
import { useSelector } from "react-redux";
import { User as UserInterface } from "../../../models/User";

function UserInformation() {
  const [maxPage, setMaxPage] = useState<number>()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const { dataRecord }: any = useSelector((state) => state)
  const data: UserInterface[] = dataRecord

  useEffect(() => {
    setMaxPage(Math.ceil(data?.length! / 5));
  }, [data])

  const exportToExcel = () => {
    const exportType = exportFromJSON.types.xls;
    const fileName = 'User Record'
    if (data) {
      const formattedData = data.map((d) => {
        const { fist_name, last_name, contact, address, } = d.profile
        const { date, time } = dateTimeLocalFormatter(d.createdAt + '')
        return {
          name: `${fist_name} ${last_name}`,
          email: d.email,
          contactNo: contact,
          address,
          register_date: `${date} at ${time}`
        }
      })
      exportFromJSON({ data: formattedData, fileName, exportType })
    }
  }

  const fetchusers = data?.length! > 0 ? data
    ?.slice(5 * currentPage, 5 * currentPage + 5)
    ?.map((user) => <User key={user.id} data={user} />) :
    <h1>No animals record found!</h1>

  return (
    <UserInfomationContainer>
      <UpperContents>
        <h2>User information</h2>
        {/* <i className="fa-solid fa-ellipsis dotdotdot"></i> */}
        <button onClick={exportToExcel}> <i className="fa-solid fa-file-export"></i> Export to excel</button>
      </UpperContents>

      <UserInformationList>

        <Headers />
        <DataList> {fetchusers} </DataList>
        {
          maxPage! > 0 && <Pagination>
            <button onClick={() => setCurrentPage(prev => prev > 0 ? prev - 1 : prev)}>Prev</button><span>{currentPage + 1}</span> / <span>{maxPage}</span>  <button onClick={() => setCurrentPage(prev => prev + 1 < maxPage! ? prev + 1 : prev)}>Next</button>
          </Pagination>
        }
      </UserInformationList>

    </UserInfomationContainer>
  )
}

export default UserInformation