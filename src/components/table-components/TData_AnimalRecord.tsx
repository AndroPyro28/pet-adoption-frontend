import { Pet } from "../../models/Pet";
import { TableData, TableContainer } from "./components";

type TableDataProps = {
  data: Pet;
};

function TableDatas({ data }: TableDataProps) {
  return (
    <TableContainer>
      <TableData className="id"> {data.animalId}</TableData>
      <TableData className="Name"> {data.name}</TableData>
      <TableData className="Breed"> {data.breed}</TableData>
      <TableData className="Type"> {data.type}</TableData>
      <TableData className="Gender"> {data.gender}</TableData>
      {/* <TableData> {data.age}</TableData> */}
      <TableData className="Color"> {data.description}</TableData>
      <TableData className="Status">
        <span className={data.status}>{data.status === 'READY' ? 'AVAILABLE' : data.status} </span>
      </TableData>
    </TableContainer>
  );
}

export default TableDatas;
