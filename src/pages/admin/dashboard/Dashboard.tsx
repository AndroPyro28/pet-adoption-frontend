import AdoptionsChart from "../../../components/dashboard/AdoptionsChart"
import PetsChart from "../../../components/dashboard/PetsChart"
// import AdoptionStatus from "../../../components/dashboard/AdoptionStatus"
import UsersChart from "../../../components/dashboard/UsersChart"
import {DashboardContainer, FirstCol, SecondCol} from "./components"
import { useGetAllAdoptionRequestQuery } from "../../../services/adoptionRecordApis"
import Calendar from "../../../components/dashboard/Calendar"
import { useEffect } from "react"
function Dashboard() {

  const { data, isLoading, error, refetch } = useGetAllAdoptionRequestQuery();

  useEffect(() => {
    refetch()
  }, [])
  return (<>
    <DashboardContainer>
      <FirstCol>
        <UsersChart />
        <AdoptionsChart />
        <PetsChart />
      </FirstCol>
      <SecondCol>
        <Calendar records={data}/>
      </SecondCol>
    </DashboardContainer>
  </>
  )
}

export default Dashboard