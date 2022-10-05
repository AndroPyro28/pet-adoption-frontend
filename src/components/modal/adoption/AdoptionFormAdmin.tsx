import React, { useState } from 'react'
import {
  AdoptionBackdrop,
  Title,
  PetDetails,
  AdoptersDetail,
  Detail,
  DateScheduleInput,
  InputDate,
  ApproveButton,
  SubmitButton as RejectButton,
  ExitModal
} from "./components"
import { motion } from "framer-motion"
import { animateModalVariant } from "../animationVariants"
import { getDateTodayWithArgs } from '../../../helper/DateTimeFormmater'
import { AdoptionRecord } from '../../../models/Adoption.ts'
import { ButtonContainer } from '../logout/components'
import Logic from './Logic'
import { dateTimeRemoveZ, dateTimeLocalFormatter } from "../../../helper/DateTimeFormmater"
import { IconContainer } from '../animal-record/components'

type PetAdoptionProps = {
  setAdoptionData: React.Dispatch<React.SetStateAction<AdoptionRecord>>
  adoptionData: AdoptionRecord
  toast: any,
}

function AdoptionFormAdmin({ adoptionData, setAdoptionData, toast }: PetAdoptionProps) {

  const dateToday = getDateTodayWithArgs({ date: 0 })
  const { adoptee, adopter } = adoptionData;
  const { profile } = adopter!;
  const dateLocal = dateTimeRemoveZ(adoptionData.schedule)
  const [date, setDate] = useState<string>(dateLocal.split('T')[0])
  const [time, setTime] = useState<string>(dateLocal.split('T')[1].substring(0, dateLocal.split('T')[1].indexOf(':00')))
  const { handleUpdateAdoptionRequest } = Logic({ date, time, toast, adoptionData, setAdoptionDataRecord: setAdoptionData });
 
  return (
    <AdoptionBackdrop>
      <motion.div
        variants={animateModalVariant}
        initial="initial"
        animate="animate"
        exit={'exit'}
        className='form'>
        <ExitModal onClick={() => setAdoptionData({} as AdoptionRecord)}>
          <i className="fa-solid fa-square-minus minimize"></i>

        </ExitModal>


        <IconContainer>
        <i className="fa-regular fa-calendar-xmark deleteAdoption"></i>
        </IconContainer>
        <Title>Adoption Form</Title>

        <PetDetails>
          <img src={adoptee?.imageUrl} />
          <div className='pet__details'>
            <h4>Pet Details</h4>
            <Detail>{adoptee?.name}</Detail>
            <Detail>{adoptee?.breed}</Detail>
            <Detail>{adoptee?.description}</Detail>
            <Detail status={adoptionData?.status}>{adoptionData?.status}</Detail>
          </div>
        </PetDetails>
        <AdoptersDetail>
          <h4>Adopter's Details</h4>
          <Detail><label>Name</label> <span>{profile.fist_name} {profile.last_name} </span></Detail>
          <Detail><label>Email</label> <span>{adopter?.email}</span></Detail>
          <Detail><label>Address</label> <span>{profile.address}</span></Detail>
          <Detail><label>Contact no.</label> <span>{profile.contact}</span></Detail>
        </AdoptersDetail>



        {
          adoptionData?.status == "PENDING" && <>
            <DateScheduleInput>
              <InputDate type={'date'} value={date} min={dateToday} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)} />
              <span>at</span>
              <InputDate type={'time'} value={time} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value)} />
            </DateScheduleInput>

            <ButtonContainer>
              <RejectButton onClick={() => handleUpdateAdoptionRequest("REJECTED")}>Reject</RejectButton>
              <ApproveButton onClick={() => handleUpdateAdoptionRequest("APPROVED")}>Approve</ApproveButton>
            </ButtonContainer>
          </>
        }
      </motion.div>
    </AdoptionBackdrop>
  )
}

export default AdoptionFormAdmin