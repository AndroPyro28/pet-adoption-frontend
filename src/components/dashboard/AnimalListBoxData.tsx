import { Pet } from '../../models/Pet'
import {ListBoxDataContainer, Data, ImageData} from "./components"

export interface Props {
    data: Pet
}
function AnimalListBoxData({data}: Props) {

  return (
    <ListBoxDataContainer>
        <ImageData src={data.imageUrl} />
        <Data>{data.name}</Data>
        <Data>{data.breed}</Data>
        <Data className={data.status}>{data.status}</Data>
    </ListBoxDataContainer>
  )
}

export default AnimalListBoxData