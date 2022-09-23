import { Pet } from "../../models/Pet";
import { TableData as TD, TableContainer } from "./components";

type TableDataProps = {
  data: Pet;
};

function TableDatas({ data }: TableDataProps) {
  return (
    <TableContainer>
      <TD> {data.id}</TD>
      <TD> {data.name}</TD>
      <TD> {data.breed}</TD>
      <TD> {data.type}</TD>
      <TD> {data.gender}</TD>
      <TD> {data.age}</TD>
      <TD> {data.description}</TD>
      <TD>
        <span className={data.status}>{data.status} </span>
      </TD>
    </TableContainer>
  );
}

export default TableDatas;
