import TableDatas from "../../../components/table-components/TData_AnimalRecord";
import TableHeaders from "../../../components/table-components/TableHeaders";
import { Pet } from "../../../models/Pet";
import {
  AnimalRecordContainer,
  UpperContents,
  RecordList,
} from "./components";
function AnimalRecord() {
  const mockData: Pet[] = [
    {
      id: 1,
      name: "jonas",
      breed: "poodle",
      type: "dog",
      gender: "male",
      age: 72,
      description: "white",
      status: "adopted",
    },
    {
      id: 2,
      name: "lodia",
      breed: "cat",
      type: "dog",
      gender: "female",
      age: 72,
      description: "white",
      status: "ready",
    },
    {
      id: 2,
      name: "lodia",
      breed: "cat",
      type: "dog",
      gender: "female",
      age: 72,
      description: "white",
      status: "pending",
    },
  ];

  const fetchAnimals = mockData.map((data, index) => {
    return <TableDatas data={data} />;
  });
  
  return (
    <AnimalRecordContainer>
      <UpperContents>
        <h2>Animal Record</h2>

        <button>+ Add Record</button>
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
        {fetchAnimals}
      </RecordList>
    </AnimalRecordContainer>
  );
}

export default AnimalRecord;
