import { useSelector } from "react-redux"
import { Pet as PetInteface} from "../../models/Pet"
import { User } from "../../models/User";
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

    const state: any = useSelector(state => state);
    const user: User = state.user;
    return (
        <PetContainer>
            <PetImage src={data.imageUrl} />
            <Name>{data.name}</Name>
            <Breed>{data.breed}</Breed>
            <Description>{data.description}</Description>
            {
                user.role === 'USER' && <ApplyButton onClick={() => setAdoptionData(data)}>Apply</ApplyButton>
            }
            
        </PetContainer>
    )
}

export default Pet