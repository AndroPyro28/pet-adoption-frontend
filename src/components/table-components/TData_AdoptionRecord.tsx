import { dateTimeLocalFormatter, dateTimeRemoveZ } from '../../helper/DateTimeFormmater';
import { AdoptionRecord } from '../../models/Adoption.ts';
import { Pet } from '../../models/Pet';
import { TableContainer, TableData } from './components'

type TableDataProps = {
    data: AdoptionRecord;
    setAdoptionData: React.Dispatch<React.SetStateAction<AdoptionRecord>>
  };

function TData_AdoptionRecord({data, setAdoptionData}: TableDataProps) {
    const {schedule, adoptee, adopter, id } = data;
    const {fist_name, last_name} = adopter.profile;
    // const dateTimeLocal = dateTimeRemoveZ(rawDateTimeLocal);
    console.log(schedule)
    const {date, time} = dateTimeLocalFormatter(schedule)
  return (
    <TableContainer>
    <TableData> {id}</TableData>
      <TableData> {fist_name} {last_name} </TableData>
      <TableData> {adoptee?.name}</TableData>
      <TableData> {date} at {time}</TableData>
      <TableData> <button onClick={() => setAdoptionData(data) }>View Details</button> </TableData>
    </TableContainer>
  )
}

export default TData_AdoptionRecord