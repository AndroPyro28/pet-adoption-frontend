import { PetAdoption } from "../../types/pet-types/Adoption"
import {
    PetContainer,
    PetImage,
    Breed,
    Name,
    Description,
    ApplyButton,
} from "./components"
type PetAdoptionProps = { data: PetAdoption, setAdoptionData: React.Dispatch<React.SetStateAction<PetAdoption>> }

function Pet({ data, setAdoptionData }: PetAdoptionProps): JSX.Element {
    return (
        <PetContainer>
            <PetImage src={`/images/img/${data.imgUrl}`} />
            <Name>{data.name}</Name>
            <Breed>{data.breed}</Breed>
            <Description>{data.description}</Description>
            <ApplyButton onClick={() => setAdoptionData(data)}>Apply</ApplyButton>
        </PetContainer>
    )
}

export default Pet