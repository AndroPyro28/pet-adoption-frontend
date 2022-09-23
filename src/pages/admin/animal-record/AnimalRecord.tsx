import TableDatas from "../../../components/table-components/TableDatas";
import TableHeaders from "../../../components/table-components/TableHeaders";
import { Pet } from "../../../models/Pet";
import {
  AnimalRecordContainer,
  TitleAndButtons,
  AnimalRecordList,
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
      <TitleAndButtons>
        <h2>Animal Record</h2>

        <button>+ Add Record</button>
      </TitleAndButtons>

      <AnimalRecordList>
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
      </AnimalRecordList>
    </AnimalRecordContainer>
  );
}

export default AnimalRecord;
