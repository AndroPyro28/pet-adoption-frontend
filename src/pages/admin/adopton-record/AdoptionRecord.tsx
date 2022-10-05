import TableHeaders from "../../../components/table-components/TableHeaders"
import TData_AdoptionRecord from "../../../components/table-components/TData_AdoptionRecord"
import { AdoptionRecordContainer } from "./components"
import { useGetAllAdoptionRequestQuery } from "../../../services/adoptionRecordApis"
import { useEffect, useState } from "react";
import { AdoptionRecord as AdoptionRecordInterface } from "../../../models/Adoption.ts"
import AdoptionFormAdmin from "../../../components/modal/adoption/AdoptionFormAdmin"
import { toast, ToastContainer } from "react-toastify";
import { UpperContents, RecordListHeaders, RecordList, DataList, Pagination } from "../components"
import { IconContainer } from "../../../components/modal/animal-record/components";
function AdoptionRecord() {
  const { data, isLoading, error } = useGetAllAdoptionRequestQuery();
  const [adoptionData, setAdoptionData] = useState<AdoptionRecordInterface>({} as AdoptionRecordInterface);
  const [maxPage, setMaxPage] = useState<number>()
  const [currentPage, setCurrentPage] = useState<number>(0)

  useEffect(() => {
    setMaxPage(Math.ceil(data?.length! / 6));
  }, [data])

  const fetchRecord = data?.length! > 0 ?
    data?.slice(6 * currentPage, 6 * currentPage + 6)
    .map((record, index) => {
    return <TData_AdoptionRecord data={record} key={record.id} setAdoptionData={setAdoptionData} />
  }) : <h1>No adoption record found!</h1>

  return (
    <AdoptionRecordContainer>
      <ToastContainer autoClose={1500} />
      <UpperContents>
        <h2>Adoption Record</h2>

        <i className="fa-solid fa-ellipsis dotdotdot"></i>
      </UpperContents>

      <RecordList>
        <RecordListHeaders>
          <TableHeaders arrayOfTitles={
            [
              '#', 'Adopter', 'Adoptee', 'Schedule', ''
            ]
          } />
        </RecordListHeaders>


        {
          adoptionData?.id && <AdoptionFormAdmin toast={toast} setAdoptionData={setAdoptionData} adoptionData={adoptionData} />
        }
        {
          isLoading ? <h1>loading please wait...</h1> : <DataList> {fetchRecord} </DataList>
        }
        {
          maxPage! > 0 && <Pagination>
            <button>Prev</button><span>{currentPage + 1}</span> / <span>{maxPage}</span>  <button>Next</button>
          </Pagination>
        }

      </RecordList>

    </AdoptionRecordContainer>
  )
}

export default AdoptionRecord