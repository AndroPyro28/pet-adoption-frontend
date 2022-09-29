import { AdoptionRequest } from '../../models/Request';
import { TableContainer, TableData } from './components'

type TableDataProps = {
    data: AdoptionRequest;
  };

function TData_AdoptionRecord({data}: TableDataProps) {
  return (
    <TableContainer>
    <TableData> {data.id}</TableData>
      <TableData> {data.adopterId}</TableData>
      <TableData> {data.adopteeId}</TableData>
      <TableData> {data.schedule}</TableData>
      <TableData> <button>View Details</button> </TableData>
    </TableContainer>
  )
}

export default TData_AdoptionRecord