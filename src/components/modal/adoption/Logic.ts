import { totalmem } from 'os';
import React from 'react'
import { Pet } from '../../../models/Pet'
import { User } from '../../../models/User'
import {useCreateAdoptionRequestMutation} from "../../../services/adoptionRecordApis"
interface Props {
    petData:Pet;
    user: User;
    setAdoptionData: React.Dispatch<React.SetStateAction<Pet>>;
    date: string;
    time: string;
    toast: any
}

function Logic({petData, user, date, time, setAdoptionData, toast}: Props) {
    const [createAdoptionRequest] = useCreateAdoptionRequestMutation();
    const submitAdoptionForm = async (): Promise<void> => {
        try {
            if(!date || !time) {
                return toast("Please choose a schedule!", {type:'warning'});
            }
            const {id: petId} = petData;
            const {id: userId} = user;
            const res = await createAdoptionRequest({adopteeId: petId!, adopterId: userId, schedule: `${date}T${time}:00.000Z`})
            if('data' in res) {
                return toast('Adoption application submitted, please wait for our text confirmation!', {type:"success"})
            } else {
            return toast('This pet is already on schedule, please pick another pet', {type:"info"})
            }
        } catch (error: any) {
            console.error(error.message)
        }
    }

    return {submitAdoptionForm}
}

export default Logic