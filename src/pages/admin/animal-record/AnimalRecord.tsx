import TableDatas from "../../../components/table-components/TData_AnimalRecord";
import TableHeaders from "../../../components/table-components/TableHeaders";
import { Pet } from "../../../models/Pet";
import {
  AnimalRecordContainer,
} from "./components";
import {UpperContents, RecordListHeaders, RecordList, DataList, Pagination} from "../components"
import AnimalRecordModal from "../../../components/modal/animal-record/AnimalRecordModal";
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react"
import exportFromJSON from 'export-from-json'
import { useSelector } from "react-redux";

function AnimalRecord() {
  const [openAnimalRecordModal, setOpenAnimalRecordModal] = useState<Boolean>(false)
  const [maxPage, setMaxPage] = useState<number>()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const {dataRecord}:any = useSelector((state) => state)
  const data: Pet[] = dataRecord

  useEffect(() => {
    setMaxPage(Math.ceil(data?.length! / 6));
  }, [data])

  const exportToExcel = () => {
    const exportType = exportFromJSON.types.xls;
    const fileName = 'Animal Record'
    if(data) {
      const formattedData = data.map((d) => {
        const {name, breed, status, gender, animalId, type, age} = d;
        return {
          id: animalId,
          name,
          breed,
          age,
          gender,
          type,
          status,
        }
      })
      exportFromJSON({data: formattedData, fileName , exportType})

    }
  }
  
  const fetchAnimals = data?.length! > 0 ?
    data?.slice(6 * currentPage, 6 * currentPage + 6)
   ?.map((data:Pet, index:number) => <TableDatas data={data} key={index} />) :
   <h1>No animals record found!</h1>

  return (
    <AnimalRecordContainer>
      {
        openAnimalRecordModal && <AnimalRecordModal toast={toast} setOpenAnimalRecordModal={setOpenAnimalRecordModal} />
      }

      <ToastContainer autoClose={1500} />
      <UpperContents>
        <h2>Animal Record</h2>
        <div>
          <button className="exportBtn" onClick={exportToExcel}> <i className="fa-solid fa-file-export"></i> Export to excel</button>
          <button onClick={() => setOpenAnimalRecordModal(true)}><i className="fa-solid fa-file-import"></i> Add Record</button>
        </div>
      </UpperContents>
      <RecordList>
        <RecordListHeaders>
        <TableHeaders
          arrayOfTitles={[
            "id",
            "Name",
            "Breed",
            "Type",
            "Gender",
            "Color",
            "Status",
          ]}
        />
        </RecordListHeaders>

         <DataList> {fetchAnimals}  </DataList>

        {
          maxPage! > 0 && <Pagination>
           <button onClick={() => setCurrentPage(prev => prev > 0 ? prev - 1 : prev )}>Prev</button><span>{currentPage + 1}</span> / <span>{maxPage}</span>  <button onClick={() => setCurrentPage(prev => prev+1 < maxPage! ? prev + 1 : prev )}>Next</button>
          </Pagination>
        }
      </RecordList>
    </AnimalRecordContainer>
  );
}

export default AnimalRecord;
