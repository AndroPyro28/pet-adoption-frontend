import { dateTimeLocalFormatter, dateTimeRemoveZ } from '../../helper/DateTimeFormmater';
import { AdoptionRecord } from '../../models/Adoption.ts';
import { TableContainer, TableData } from './components'

type TableDataProps = {
    data: AdoptionRecord;
    setAdoptionData: React.Dispatch<React.SetStateAction<AdoptionRecord>>
  };

function TData_AdoptionRecord({data, setAdoptionData}: TableDataProps) {
    const {schedule, adoptee, adopter, id } = data;
    const dateTimeLocal = dateTimeRemoveZ(schedule); // use this when date is from input client side
    // console.log(schedule)
    const {date, time} = dateTimeLocalFormatter(dateTimeLocal)
  return (
    <TableContainer>
    <TableData> {id}</TableData>
      <TableData> {adopter?.profile?.fist_name} {adopter?.profile?.last_name} </TableData>
      <TableData> {adoptee?.name}</TableData>
      <TableData> {date} at {time}</TableData>
      <TableData> <button onClick={() => setAdoptionData(data) }>View Details</button> </TableData>
    </TableContainer>
  )
}

export default TData_AdoptionRecord