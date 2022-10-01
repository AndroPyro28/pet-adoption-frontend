import TableHeaders from "../../../components/table-components/TableHeaders"
import TData_AdoptionRecord from "../../../components/table-components/TData_AdoptionRecord"
import { RecordList, UpperContents } from "../animal-record/components"
import { AdoptionRecordContainer } from "./components"
import { useGetAllAdoptionRequestQuery } from "../../../services/adoptionRecordApis"
import { useState } from "react";
import { AdoptionRecord as AdoptionRecordInterface } from "../../../models/Adoption.ts"
import AdoptionFormAdmin from "../../../components/modal/adoption/AdoptionFormAdmin"
import { toast, ToastContainer } from "react-toastify";

function AdoptionRecord() {
  const { data, isLoading, error } = useGetAllAdoptionRequestQuery();
  const [adoptionData, setAdoptionData] = useState<AdoptionRecordInterface>({} as AdoptionRecordInterface);

  // const mockData: AdoptionRequest[] = [
  //   {
  //     id: 1,
  //     adopterId: 'jean',
  //     adopteeId: 'andro',
  //     schedule: 'May 26 | 03:30 pm'
  //   },
  //   {
  //     id: 2,
  //     adopterId: 'john',
  //     adopteeId: 'stewie',
  //     schedule: 'May 27 | 03:30 pm'
  //   },
  //   {
  //     id: 3,
  //     adopterId: 'peter',
  //     adopteeId: 'meg',
  //     schedule: 'May 28 | 03:30 pm'
  //   },

  // ]

  const fetchRecord = data?.map((record, index) => {
    return <TData_AdoptionRecord data={record} key={record.id} setAdoptionData={setAdoptionData} />
  })

  return (
    <AdoptionRecordContainer>
      <ToastContainer autoClose={1500} />
      <UpperContents>
        <h2>Adoption Record</h2>

        <i className="fa-solid fa-ellipsis dotdotdot"></i>
      </UpperContents>

      <RecordList>
        <TableHeaders arrayOfTitles={
          [
            '#', 'Adopter', 'Adoptee', 'Schedule', ''
          ]
        } />

        {
          adoptionData?.id && <AdoptionFormAdmin toast={toast} setAdoptionData={setAdoptionData} adoptionData={adoptionData} />
        }
        {
          isLoading && <h1>loading please wait...</h1>
        }
        {fetchRecord}

      </RecordList>
    </AdoptionRecordContainer>
  )
}

export default AdoptionRecord