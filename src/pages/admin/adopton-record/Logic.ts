import React from 'react'
import { Pet } from '../../../models/Pet';
import { User } from '../../../models/User';

interface Props {
    data:Pet;
    user: User;
    setAdoptionData: React.Dispatch<React.SetStateAction<Pet>>;
    date: string;
    time: string;
    toast: any
}

function Logic() {
    const submitAdoptionForm = async ({data, user, date, time, setAdoptionData, toast}: Props): Promise<void> => {
        try {
            if(!date || !time) {
                return toast("Please choose a schedule!", {type:'warning'});
            }
            const {id: petId} = data;
            const {id: userId} = user;
            
        } catch (error: any) {
            console.error(error.message)
        }
    }

    return {submitAdoptionForm}
}

export default Logic