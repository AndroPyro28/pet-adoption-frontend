import { totalmem } from 'os';
import React from 'react'
import { AdoptionRecord, AdoptionUpdate } from '../../../models/Adoption.ts';
import { Pet } from '../../../models/Pet'
import { User } from '../../../models/User'
import {useCreateAdoptionRequestMutation, useUpdateAdoptionRequestMutation} from "../../../services/adoptionRecordApis"
interface Props {
    petData?:Pet;
    user?: User;
    setAdoptionDataPet?: React.Dispatch<React.SetStateAction<Pet>>;
    setAdoptionDataRecord?: React.Dispatch<React.SetStateAction<AdoptionRecord>>;
    date?: string;
    time?: string;
    toast?: any,
    adoptionData?: AdoptionRecord
}

function Logic({petData, user, date, time, setAdoptionDataPet, adoptionData, setAdoptionDataRecord, toast}: Props) {

    const [createAdoptionRequest] = useCreateAdoptionRequestMutation();
    const [updateAdoptionRequest] = useUpdateAdoptionRequestMutation()
    const submitAdoptionForm = async (): Promise<void> => {
        try {
            if(!date || !time) {
                return toast("Please choose a schedule!", {type:'warning'});
            }
            const {id: petId} = petData!;
            const {id: userId} = user!;
            const res = await createAdoptionRequest({adopteeId: petId!, adopterId: userId, schedule: `${date}T${time}:00.000Z`})
            if('data' in res) {
                toast('Adoption application submitted, please wait for our text confirmation!', {type:"success"})
                setTimeout(() => setAdoptionDataPet!({} as Pet), 2000)
            } 
            // else {
            //     return toast('This pet is already on schedule, please pick another pet', {type:"info"})
            // }
        } catch (error: any) {
            console.error(error.message)
        } 
    }

    const handleReject = async () => {
        if(!date || !time) {
            return toast("Please choose a schedule!", {type:'warning'});
        }
        try {
            const {id} = adoptionData !;
            const schedule = `${date}T${time}:00.000Z`;
            const status = "REJECTED"
            const data = {status, schedule}
            const res = await updateAdoptionRequest({id, data} as {id: number, data: AdoptionUpdate});
            if('data' in res) {
                toast('Adoption Rejected', {type:"info"})
                setTimeout(() => setAdoptionDataRecord!({} as AdoptionRecord), 2000)
            } 
        } catch (error) {
            console.error(error)
            return toast('Something went wrong', {type:"info"})
        } 
    }

    const handdleApprove = async () => {
        if(!date || !time) {
            return toast("Please choose a schedule!", {type:'warning'});
        }
        try {
            const {id} = adoptionData !;
            const schedule = `${date}T${time}:00.000Z`;
            const status = 'APPROVED'
            const data = {status, schedule}
            const res = await updateAdoptionRequest({id, data} as {id: number, data: AdoptionUpdate});

            if('data' in res) {
                return toast('Adoption approved', {type:"info"})
            } 
            
        } catch (error) {
            console.error(error)
            return toast('Something went wrong', {type:"info"})
        } 
    }

    return {submitAdoptionForm, handleReject, handdleApprove}
}

export default Logic