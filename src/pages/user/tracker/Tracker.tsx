import { useEffect, useState } from 'react'
import Pet from "../../../components/tracker/Pet";
import { TrackerContainer, TrackerContent, SearchBar, Search, PetList, SearchBarContainer } from "./components"
import { useGetAllAnimalRecordExcludeAdoptedQuery } from "../../../services/animalRecordApis"
import { Pet as PetInterface } from "../../../models/Pet"
import TrackerModal from '../../../components/modal/tracker/TrackerModal';

function Tracker() {
  const [search, setSearch] = useState<string>('')
  const [adoptionData, setAdoptionData] = useState<PetInterface>({} as PetInterface);

  const { data: animalRecordData, isLoading, error, refetch } = useGetAllAnimalRecordExcludeAdoptedQuery({ filter: false, search });
  
  useEffect(() => {
    refetch()
  }, [])

  if(error) {
    console.error(error);
  }
  const fetchdata = animalRecordData?.map((data, index) => <Pet data={data} key={index} setAdoptionData={setAdoptionData} />)
  // will make a pet cards later
  return (
    <TrackerContainer>

    {
      adoptionData.id && <TrackerModal data={adoptionData} setAdoptionData={setAdoptionData}/>
    }
      <TrackerContent>
        <SearchBarContainer>
          <SearchBar>
            <span className="truly__the__most">Truly the most</span>
            <span className="heartfelt__animal">Heartfelt animal</span>
            <span className="shelter">Shelter...</span>
            <Search>
              <i className="fa-solid fa-magnifying-glass searchIcon"></i>
              <input placeholder="search..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
              <button>Seach</button>
            </Search>
          </SearchBar>
        </SearchBarContainer>
       
      </TrackerContent>
      <h1>List of our pets</h1>
       <PetList>
          {
            fetchdata
          }
        </PetList>
    </TrackerContainer>
  )
}

export default Tracker