import React from 'react'
import { Pet as PetInteface } from '../../models/Pet'
import { PetContainer, PetImage, Name, Breed, Description, Status, Traits } from "./components"

type PetAdoptionProps = { 
    data: PetInteface;
    setAdoptionData: React.Dispatch<React.SetStateAction<PetInteface>>;
}

function Pet({data, setAdoptionData} : PetAdoptionProps) {
    return (
        <PetContainer onClick={() => setAdoptionData(data)}>
            <PetImage src={data.imageUrl} />
            <Name><span>Name</span>{data.name}</Name>
            <Status status={data.status}><span>Status</span>{data.status === 'READY' ? 'Available' : data?.status}</Status>
            <Breed><span>Breed</span>{data.breed}</Breed>
            <Traits><span>Age</span>{data.age} yrs old</Traits>
            <Traits><span>Traits</span>{data.traits}</Traits>
            <Description><span>Condition</span>{data.condition} / 10 </Description>
        </PetContainer>
    )
}

export default Pet