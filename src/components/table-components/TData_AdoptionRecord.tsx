import { dateTimeLocalFormatter, dateTimeRemoveZ } from '../../helper/DateTimeFormmater';
import { AdoptionRecord } from '../../models/Adoption.ts';
import { TableContainer, TableData } from './components'

type TableDataProps = {
    data: AdoptionRecord;
    setAdoptionData: React.Dispatch<React.SetStateAction<AdoptionRecord>>
  };

function TData_AdoptionRecord({data, setAdoptionData}: TableDataProps) {
    // const {schedule, adoptee, adopter, id } = data;
    console.log(data);
    const dateTimeLocal = dateTimeRemoveZ(data?.schedule); // use this when date is from input client side
    // console.log(schedule)
    const {date, time} = dateTimeLocalFormatter(dateTimeLocal)
  return (
    <TableContainer>
    <TableData className='Id'> {data?.adoptionId || data?.id}</TableData>
      <TableData className='Adopter'> {data?.adopter?.profile?.fist_name} {data?.adopter?.profile?.last_name} </TableData>
      <TableData className='Adoptee'> {data?.adoptee?.name}</TableData>
      <TableData className='Schedule'> {date} at {time}</TableData>
      <TableData className="Action"> <button onClick={() => setAdoptionData(data) }>View Details</button> </TableData>
    </TableContainer>
  )
}

export default TData_AdoptionRecord