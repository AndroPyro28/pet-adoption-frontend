import { dateTimeLocalFormatter, dateTimeRemoveZ } from '../../helper/DateTimeFormmater';
import { AdoptionRecord } from '../../models/Adoption.ts'
import { Pet } from '../../models/Pet'
import {ListBoxDataContainer, Data, ImageData} from "./components"

export interface Props {
    data: AdoptionRecord
}
function AdoptionListBoxData({data}: Props) {

    const {schedule, adoptee, adopter, id} = data;
    const {fist_name, last_name} = adopter.profile;
    const {name, imageUrl, status, breed} = adoptee
      const dateTimeLocal = dateTimeRemoveZ(schedule);
      const {date, time} = dateTimeLocalFormatter(dateTimeLocal)
      
  return (
    <ListBoxDataContainer>
        <ImageData src={imageUrl} />
        <Data>{name}</Data>
        <Data> {breed} </Data>
        <Data className={status}>{status}</Data>
    </ListBoxDataContainer>
  )
}

export default AdoptionListBoxData