import {
  AdoptionContainer,
} from "./components";
import Pet from "../../../components/adoption/Pet";
import {PetAdoption} from "../../../types/pet-types/Adoption"
import {useGetAllAnimalRecordExcludeAdoptedQuery} from "../../../services/animalRecordApis"
import AdoptionModal from "../../../components/modal/adoption/AdoptionFormUser";
import {useState} from "react";
import {Pet as PetInterface} from "../../../models/Pet"
import {toast, ToastContainer} from "react-toastify";

function Adoption() {
 

  const {data: animalRecordData, isLoading, error } = useGetAllAnimalRecordExcludeAdoptedQuery();

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
