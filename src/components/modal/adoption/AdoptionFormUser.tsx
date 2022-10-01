import React, { useState } from 'react'
import { Pet } from '../../../models/Pet'
import {
  AdoptionBackdrop,
  Title,
  PetDetails,
  AdoptersDetail,
  Detail,
  DateScheduleInput,
  InputDate,
  SubmitButton,
  ExitModal
} from "./components"
import { motion } from "framer-motion"
import { useSelector } from 'react-redux'
import { animateModalVariant } from "../animationVariants"
import Logic from "./Logic"
import { getDateToday, getDateTodayWithArgs } from '../../../helper/DateTimeFormmater'

type PetAdoptionProps = { 
  data: Pet,
  setAdoptionData: React.Dispatch<React.SetStateAction<Pet>>
  toast: any
}

function AdoptionModal({ data: petData, setAdoptionData, toast }: PetAdoptionProps) {

  const { user }: any = useSelector(state => state);
  const { profile } = user;
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const dateToday = getDateTodayWithArgs({date: 0})
  const {submitAdoptionForm} = Logic({petData, user, date, time, setAdoptionDataPet: setAdoptionData, toast })

  return (
    <AdoptionBackdrop>
      <motion.div
        variants={animateModalVariant}
        initial="initial"
        animate="animate"
        exit={'exit'}
        className='form'>
        <ExitModal onClick={() => setAdoptionData({} as Pet)}>
          <i className="fa-solid fa-square-minus minimize"></i>
        </ExitModal>
        <Title>Adoption Form</Title>

        <PetDetails>
          <img src={`/images/img${petData.imageUrl}`} />
          <div className='pet__details'>
            <h4>Pet Details</h4>
            <Detail>{petData.name}</Detail>
            <Detail>{petData.breed}</Detail>
            <Detail>{petData.description}</Detail>
          </div>
        </PetDetails>

        <AdoptersDetail>
          <h4>Adopter's Details</h4>

          <Detail><label>Name</label> <span>{profile.fist_name} {profile.last_name} </span></Detail>
          <Detail><label>Email</label> <span>{user.email}</span></Detail>
          <Detail><label>Address</label> <span>{profile.address}</span></Detail>
          <Detail><label>Contact no.</label> <span>{profile.contact}</span></Detail>
        </AdoptersDetail>

        <DateScheduleInput>
          <InputDate type={'date'} min={dateToday} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)} />
          <span>at</span>
          <InputDate type={'time'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value)} />
        </DateScheduleInput>
        <SubmitButton onClick={submitAdoptionForm}>Apply</SubmitButton>
      </motion.div>
    </AdoptionBackdrop>
  )
}

export default AdoptionModal