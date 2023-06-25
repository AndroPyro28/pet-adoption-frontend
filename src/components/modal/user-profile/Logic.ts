import Cookies from 'js-cookie';
import React from 'react'
import { UpdateUser } from '../../../models/User';
import { useUpdateUserMutation } from '../../../services/authApis';

interface Props {
    updateValue: UpdateUser,
    setUpdateValue: React.Dispatch<React.SetStateAction<UpdateUser>>,
    setAllowChanges: React.Dispatch<React.SetStateAction<boolean>>,
    toast: any
}
function Logic({updateValue, setUpdateValue, toast, setAllowChanges}: Props) {

    const handleLogout = () => {
        Cookies.remove('userToken');
        window.location.assign('/');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const [updateUserMutation] = useUpdateUserMutation()
    const updateUser = async () => {
        try {
            if(Object.values(updateValue).some(value => value === '')) {
                throw new Error('Fill up all the requirements to update.')
            }
            console.log(updateValue);
            const res: any = await updateUserMutation(updateValue);
            const {error, data} = res;

            if('error' in res) {
                throw new Error(error.data.message)
            }
            if('data' in res) {
                setAllowChanges(false)
            }   
        } catch (error: any) {
            console.log(error);
            toast(error.message, {type: 'warning'})
        }
    }
  return {
handleLogout,
handleChange,
updateUser
  }
}

export default Logic