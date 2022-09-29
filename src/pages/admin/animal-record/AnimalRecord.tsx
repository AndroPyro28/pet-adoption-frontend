import TableDatas from "../../../components/table-components/TData_AnimalRecord";
import TableHeaders from "../../../components/table-components/TableHeaders";
import { Pet } from "../../../models/Pet";
import {
  AnimalRecordContainer,
  UpperContents,
  RecordList,
} from "./components";
import AnimalRecordModal from "../../../components/modal/animal-record/AnimalRecordModal";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react"
import {useGetAllAnimalRecordQuery} from "../../../services/animalRecordApis"
function AnimalRecord() {
  const [openAnimalRecordModal, setOpenAnimalRecordModal] = useState<Boolean>(false)

  const {data, isLoading, error} = useGetAllAnimalRecordQuery();

  const fetchAnimals = data?.map((data:Pet, index:number) => <TableDatas data={data} key={index} />);
  
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

        {
          isLoading ? <h1>loading please wait...</h1> : fetchAnimals
        }
      </RecordList>
    </AnimalRecordContainer>
  );
}

export default AnimalRecord;
