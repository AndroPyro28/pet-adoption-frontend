import AdoptionRecord from "../../../components/dashboard/AdoptionRecord"
import AdoptionStatus from "../../../components/dashboard/AdoptionStatus"
// import AdoptionStatus from "../../../components/dashboard/AdoptionStatus"
import AnimalList from "../../../components/dashboard/AnimalList"
import {DashboardContainer, FirstCol, SecondCol} from "./components"
import { useGetAllAdoptionRequestQuery } from "../../../services/adoptionRecordApis"
import Calendar from "../../../components/dashboard/Calendar"
function Dashboard() {

  const { data, isLoading, error } = useGetAllAdoptionRequestQuery();

  return (<>
    <DashboardContainer>
      <FirstCol>
        <AnimalList />
        <AdoptionRecord records={data}/>
        <AdoptionStatus records={data}/>
      </FirstCol>

      <SecondCol>
        <Calendar records={data}/>
      </SecondCol>

    </DashboardContainer>
  </>

  )
}

export default Dashboard