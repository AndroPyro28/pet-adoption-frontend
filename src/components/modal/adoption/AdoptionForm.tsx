import React from 'react'
import { PetAdoption } from '../../../types/pet-types/Adoption'
import {
  AdoptionBackdrop,
  AdoptionForm,
  Title,
  PetDetails,
  AdoptersDetail,
  Detail,
  DateScheduleInput,
  InputDate,
  SubmitButton,
  ExitModal
} from "./components"
import {motion} from "framer-motion"
type PetAdoptionProps = { data: PetAdoption, setAdoptionData: React.Dispatch<React.SetStateAction<PetAdoption>> }

function AdoptionModal({ data, setAdoptionData }: PetAdoptionProps) {

  const modalVariant = {
    initial: {
      y: -500
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        type:"spring"
      },
    },
    exit: {
      x:"100vw",
      transition:{ 
        ease:"easeInOut"
      }
    }
  };

  return (
    <AdoptionBackdrop>
      <motion.div 
      variants={modalVariant}
      initial="initial"
      animate="animate"
      exit={'exit'}
      className='form'>
        <ExitModal onClick={() => {
          setAdoptionData({} as PetAdoption)
        }}>
          X
        </ExitModal>
        <Title>Adoption Form</Title>

        <PetDetails>
          <img src={`/images/img${data.imgUrl}`} />
          <div className='pet__details'>
            <h4>Pet Details</h4>
            <Detail>{data.name}</Detail>
            <Detail>{data.breed}</Detail>
            <Detail>{data.description}</Detail>
          </div>
        </PetDetails>

        <AdoptersDetail>
          <h4>Adopter's Details</h4>

          <Detail><label>Name</label> <span>Andro Eugenio</span></Detail>
          <Detail><label>Email</label> <span>Menandroeugenio1028@gmail.com</span></Detail>
          <Detail><label>Address</label> <span>San Sebastian Hagonoy Bulacan</span></Detail>
          <Detail><label>Contact no.</label> <span>09561289642</span></Detail>
        </AdoptersDetail>

        <DateScheduleInput>
          <InputDate type={'date'} />
          <span>at</span>
          <InputDate type={'time'} />
        </DateScheduleInput>
        <SubmitButton>Apply</SubmitButton>
      </motion.div>
    </AdoptionBackdrop>
  )
}

export default AdoptionModal