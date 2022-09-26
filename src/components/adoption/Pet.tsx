import { PetAdoption } from "../../types/pet-types/Adoption"
import {
    PetContainer,
    PetImage,
    Breed,
    Name,
    Description,
    ApplyButton,
} from "./components"
function Pet({data}: {data: PetAdoption}) {
    return (
        <PetContainer>
            <PetImage src={`/images/img/${data.imgUrl}`} />
            <Name>{data.name}</Name>
            <Breed>{data.breed}</Breed>
            <Description>{data.description}</Description>
            <ApplyButton>Apply</ApplyButton>
        </PetContainer>
    )
}

export default Pet