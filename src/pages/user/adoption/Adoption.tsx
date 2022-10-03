import {
  AdoptionContainer,
  AdoptionFrontPage,
  SearchBar,
  Search
} from "./components";
import Pet from "../../../components/adoption/Pet";
import AdoptionModal from "../../../components/modal/adoption/AdoptionFormUser";
import { useGetAllAnimalRecordExcludeAdoptedQuery } from "../../../services/animalRecordApis"
import { useState } from "react";
import { Pet as PetInterface } from "../../../models/Pet"
import { toast, ToastContainer } from "react-toastify";

function Adoption() {

  const [search, setSearch] = useState<string>('')
  const [adoptionData, setAdoptionData] = useState<PetInterface>({} as PetInterface);

  const { data: animalRecordData, isLoading, error } = useGetAllAnimalRecordExcludeAdoptedQuery({filter:true,search});

  if (error) {
    console.log(error)
  }

  const fetchdata = animalRecordData?.map((data, index) => <Pet data={data} key={index} setAdoptionData={setAdoptionData} />)

  return (<>
    <ToastContainer autoClose={2500} />
    <AdoptionFrontPage>
      {
        adoptionData?.id && <AdoptionModal data={adoptionData} setAdoptionData={setAdoptionData} toast={toast} />
      }
      <SearchBar>
            <span className="dont__shop">Don't Shop</span>
            <span className="adopt">Adopt</span>
          <Search>
            <i className="fa-solid fa-magnifying-glass searchIcon"></i>
            <input placeholder="search..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
            <button>Seach</button>
          </Search>
      </SearchBar>
      
    </AdoptionFrontPage>

    <AdoptionContainer>
      {
        isLoading ? <h1>loading please wait...</h1> : fetchdata
      }
    </AdoptionContainer>
  </>

  );
}

export default Adoption;
