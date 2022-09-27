import { NavLink } from "react-router-dom";
import {
  AdoptionContainer,
} from "./components";
import Pet from "../../../components/adoption/Pet";
import {PetAdoption} from "../../../types/pet-types/Adoption"
import { AdoptionForm } from "../../../components/modal/adoption/components";
import AdoptionModal from "../../../components/modal/adoption/AdoptionForm";
import {useState} from "react";

function Adoption() {

  const mockData: PetAdoption[] = [
    {
      imgUrl: '/dog1.jpg',
      name: 'determined brutos',
      breed: 'asong kabayo',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      imgUrl: '/dog2.jpg',
      name: 'innocent brian',
      breed: 'asong malupet',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      imgUrl: '/pusa1.jpg',
      name: 'Golden Mingming',
      breed: 'pusang gala',
      description: 'Lorem ipsum dolor sit amet.'
    },
  ]
  // const [adoptionData, setAdoptionData] = useState<PetAdoption>({
  //       imgUrl: '',
  //       name: '',
  //       breed: '',
  //       description: ''
  // });
   const [adoptionData, setAdoptionData] = useState<PetAdoption>({} as PetAdoption);

  const fetchdata = mockData.map((data, index) => <Pet data={data} key={index} setAdoptionData={setAdoptionData} />)
  return (
    <AdoptionContainer>

      {
        adoptionData?.name && <AdoptionModal data={adoptionData} setAdoptionData={setAdoptionData}  />
      }
      
      {fetchdata}

    </AdoptionContainer>
  );
}

export default Adoption;
