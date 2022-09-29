import { Pet as PetInteface} from "../../models/Pet"
import {
    PetContainer,
    PetImage,
    Breed,
    Name,
    Description,
    ApplyButton,
} from "./components"
type PetAdoptionProps = { data: PetInteface, setAdoptionData: React.Dispatch<React.SetStateAction<PetInteface>> }

function Pet({ data, setAdoptionData }: PetAdoptionProps): JSX.Element {
    return (
        <PetContainer>
            <PetImage src={data.imageUrl} />
            <Name>{data.name}</Name>
            <Breed>{data.breed}</Breed>
            <Description>{data.description}</Description>
            <ApplyButton onClick={() => setAdoptionData(data)}>Apply</ApplyButton>
        </PetContainer>
    )
}

export default Pet