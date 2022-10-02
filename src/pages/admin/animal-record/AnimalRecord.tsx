import TableDatas from "../../../components/table-components/TData_AnimalRecord";
import TableHeaders from "../../../components/table-components/TableHeaders";
import { Pet } from "../../../models/Pet";
import {
  AnimalRecordContainer,
} from "./components";
import {UpperContents, RecordListHeaders, RecordList, DataList,} from "../components"
import AnimalRecordModal from "../../../components/modal/animal-record/AnimalRecordModal";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react"
import {useGetAllAnimalRecordQuery} from "../../../services/animalRecordApis"
function AnimalRecord() {
  const [openAnimalRecordModal, setOpenAnimalRecordModal] = useState<Boolean>(false)

  const {data, isLoading, error} = useGetAllAnimalRecordQuery();

  const fetchAnimals = data?.length! > 0 ?
   data?.map((data:Pet, index:number) => <TableDatas data={data} key={index} />) :
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
            "Age",
            "Color",
            "Status",
          ]}
        />
        </RecordListHeaders>

        {
          isLoading ? <h1>loading please wait...</h1> : <DataList> {fetchAnimals} </DataList>
        }
      </RecordList>
    </AnimalRecordContainer>
  );
}

export default AnimalRecord;
