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
import {useGetAllAnimalRecordQuery} from "../../../services/animalRecordApis"


function AnimalRecord() {
  const [openAnimalRecordModal, setOpenAnimalRecordModal] = useState<Boolean>(false)
  const [maxPage, setMaxPage] = useState<number>()
  const [currentPage, setCurrentPage] = useState<number>(0)

  const {data, isLoading, error} = useGetAllAnimalRecordQuery();

  useEffect(() => {
    setMaxPage(Math.ceil(data?.length! / 6));
  }, [data])
  
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

        <button onClick={() => setOpenAnimalRecordModal(true)}>+ Add Record</button>
      </UpperContents>

      <RecordList>
        <RecordListHeaders>
        <TableHeaders
          arrayOfTitles={[
            "#",
            "Name",
            "Breed",
            "Type",
            "Gender",
            "Color",
            "Status",
          ]}
        />
        </RecordListHeaders>

        {
          isLoading ? <h1>loading please wait...</h1> : <DataList> {fetchAnimals}  </DataList>
        }

        {
          maxPage! > 0 && <Pagination>
            <button>Prev</button><span>{currentPage + 1}</span> / <span>{maxPage}</span>  <button>Next</button>
          </Pagination>
        }
      </RecordList>
    </AnimalRecordContainer>
  );
}

export default AnimalRecord;
