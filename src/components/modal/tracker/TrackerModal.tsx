import { ModalBackdrop } from '../logout/components'
import { animateModalVariant } from '../animationVariants'
import { motion } from 'framer-motion'
import {GlobalStyles, PetImage, PetInfo, Title, Info, Data} from "./components"
import { Pet } from '../../../models/Pet'

type PetAdoptionProps = { 
  data: Pet;
  setAdoptionData: React.Dispatch<React.SetStateAction<Pet>>;
}

function TrackerModal({data, setAdoptionData} : PetAdoptionProps) {
  return (
    <ModalBackdrop style={{cursor:"pointer"}} onClick={() => setAdoptionData({} as Pet)}>
      <GlobalStyles />
      <motion.div className='tracker__form'
      variants={animateModalVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      >
        <PetImage src={data.imageUrl} />
        <PetInfo>
            <Info><Title>Name:</Title> <Data>{data.name}</Data></Info>
            <Info><Title>Status:</Title> <Data>{data.status}</Data></Info>
            <Info><Title>Breed:</Title> <Data>{data.breed}</Data></Info>
            <Info><Title>Traits:</Title> <Data>{data.traits}</Data></Info>
            <Info><Title>Condition:</Title> <Data>{data.condition} / 10</Data></Info>
        </PetInfo>
      </motion.div>
    </ModalBackdrop>
  )
}

export default TrackerModal