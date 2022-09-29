import {
  AdoptionContainer,
} from "./components";
import Pet from "../../../components/adoption/Pet";
import {PetAdoption} from "../../../types/pet-types/Adoption"
import {useGetAllAnimalRecordQuery} from "../../../services/animalRecordApis"
import AdoptionModal from "../../../components/modal/adoption/AdoptionForm";
import {useState} from "react";
import {Pet as PetInterface} from "../../../models/Pet"
import {toast, ToastContainer} from "react-toastify";

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

  const {data: animalRecordData, isLoading, error } = useGetAllAnimalRecordQuery();

  if(error) {
    console.log(error)
  }

   const [adoptionData, setAdoptionData] = useState<PetInterface>({} as PetInterface);
  
  const fetchdata = animalRecordData?.map((data, index) => <Pet data={data} key={index} setAdoptionData={setAdoptionData} />)
  
  return (<>
      <ToastContainer autoClose={2500} />

      <AdoptionContainer>
      {
        isLoading && <h1>loading please wait...</h1>
      }

      {
        adoptionData?.id && <AdoptionModal data={adoptionData} setAdoptionData={setAdoptionData} toast={toast}  />
      }
      
      {fetchdata}

    </AdoptionContainer>
  </>

  );
}

export default Adoption;
