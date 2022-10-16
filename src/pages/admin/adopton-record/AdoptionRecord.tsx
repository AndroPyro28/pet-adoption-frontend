import TableHeaders from "../../../components/table-components/TableHeaders"
import TData_AdoptionRecord from "../../../components/table-components/TData_AdoptionRecord"
import { AdoptionRecordContainer,  } from "./components"
import { useGetAllAdoptionRequestQuery } from "../../../services/adoptionRecordApis"
import { useEffect, useState } from "react";
import { AdoptionRecord as AdoptionRecordInterface } from "../../../models/Adoption.ts"
import AdoptionFormAdmin from "../../../components/modal/adoption/AdoptionFormAdmin"
import { toast, ToastContainer } from "react-toastify";
import { UpperContents, RecordListHeaders, RecordList, DataList, Pagination } from "../components"
import exportFromJSON from 'export-from-json'
import { dateTimeLocalFormatter, dateTimeRemoveZ } from "../../../helper/DateTimeFormmater";

function AdoptionRecord() {
  const { data, isLoading, error, refetch } = useGetAllAdoptionRequestQuery();
  const [adoptionData, setAdoptionData] = useState<AdoptionRecordInterface>({} as AdoptionRecordInterface);
  const [maxPage, setMaxPage] = useState<number>()
  const [currentPage, setCurrentPage] = useState<number>(0)

  useEffect(() => {
    setMaxPage(Math.ceil(data?.length! / 6));
    refetch()
  }, [data])

  const exportToExcel = () => {
    const exportType = exportFromJSON.types.xls;
    const fileName = 'Adoption Record'
    if(data) {
    const formattedData = data.map((d) => {
     const {fist_name, last_name} = d.adopter.profile
     const {name} = d.adoptee
     const dateTimeLocal = dateTimeRemoveZ(d.schedule);
     const {date, time} = dateTimeLocalFormatter(dateTimeLocal)
      return {
        adopter: `${fist_name} ${last_name}`,
        adoptee: name,
        schedule: `${date} at ${time}`,
        status: d.status
      }
    }) 
      exportFromJSON({data: formattedData, fileName , exportType})
    }
  }
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
        <button onClick={exportToExcel}> <i className="fa-solid fa-file-export"></i> Export to excel</button>
        {/* <i className="fa-solid fa-ellipsis dotdotdot"></i> */}
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
            <button onClick={() => setCurrentPage(prev => prev > 0 ? prev - 1 : prev )}>Prev</button><span>{currentPage + 1}</span> / <span>{maxPage}</span>  <button onClick={() => setCurrentPage(prev => prev + 1< maxPage! ? prev + 1 : prev )}>Next</button>
          </Pagination>
        }

      </RecordList>
     
    </AdoptionRecordContainer>
  )
}

export default AdoptionRecord