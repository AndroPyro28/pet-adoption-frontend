import TableHeaders from "../../../components/table-components/TableHeaders"
import TData_AdoptionRecord from "../../../components/table-components/TData_AdoptionRecord"
import { AdoptionRequest } from "../../../models/Request"
import { RecordList, UpperContents } from "../animal-record/components"
import {AdoptionRecordContainer} from "./components"
function AdoptionRecord() {

  const mockData: AdoptionRequest[] = [
    {
      id: 1,
      adopter: 'jean',
      adoptee: 'andro',
      schedule: 'May 26 | 03:30 pm'
    },
    {
      id: 2,
      adopter: 'john',
      adoptee: 'stewie',
      schedule: 'May 27 | 03:30 pm'
    },
    {
      id: 3,
      adopter: 'peter',
      adoptee: 'meg',
      schedule: 'May 28 | 03:30 pm'
    },

  ]

  const fetchRecord = mockData.map((record, index) => <TData_AdoptionRecord data={record} key={index} />)
  return (
    <AdoptionRecordContainer>
      <UpperContents>
        <h2>Adoption Record</h2>

        <i className="fa-solid fa-ellipsis dotdotdot"></i>
      </UpperContents>

      <RecordList>
      <TableHeaders arrayOfTitles={
        [
          '#', 'Adopter', 'Adoptee', 'Schedule', ''
        ]
      } />

      {fetchRecord}
      
      </RecordList>
    </AdoptionRecordContainer>
  )
}

export default AdoptionRecord