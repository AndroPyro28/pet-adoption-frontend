import { dateTimeLocalFormatter, dateTimeRemoveZ } from '../../helper/DateTimeFormmater';
import { AdoptionRecord } from '../../models/Adoption.ts';
import { Pet } from '../../models/Pet';
import { TableContainer, TableData } from './components'

type TableDataProps = {
    data: AdoptionRecord;
    setAdoptionData: React.Dispatch<React.SetStateAction<AdoptionRecord>>
  };

function TData_AdoptionRecord({data, setAdoptionData}: TableDataProps) {
    const {schedule: rawDateTimeLocal, adoptee, adopter, id } = data;
    const {fist_name, last_name} = adopter.profile;
    // console.log(adoptee);
    const {name} = adoptee!;
    const dateTimeLocal = dateTimeRemoveZ(rawDateTimeLocal);

    const {date, time} = dateTimeLocalFormatter(dateTimeLocal)
  return (
    <TableContainer>
    <TableData> {id}</TableData>
      <TableData> {fist_name} {last_name} </TableData>
      <TableData> {name}</TableData>
      <TableData> {date} at {time}</TableData>
      <TableData> <button onClick={() => setAdoptionData(data) }>View Details</button> </TableData>
    </TableContainer>
  )
}

export default TData_AdoptionRecord