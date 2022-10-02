import { Pet } from "../../models/Pet";
import { TableData, TableContainer } from "./components";

type TableDataProps = {
  data: Pet;
};

function TableDatas({ data }: TableDataProps) {
  return (
    <TableContainer>
      <TableData> {data.id}</TableData>
      <TableData> {data.name}</TableData>
      <TableData> {data.breed}</TableData>
      <TableData> {data.type}</TableData>
      <TableData> {data.gender}</TableData>
      <TableData> {data.age}</TableData>
      <TableData> {data.description}</TableData>
      <TableData>
        <span className={data.status}>{data.status} </span>
      </TableData>
    </TableContainer>
  );
}

export default TableDatas;
