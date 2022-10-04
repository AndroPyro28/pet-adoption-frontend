import React from 'react'
import * as yup from "yup"
import {SetStateAction} from 'react'
import {useNavigate} from "react-router-dom";
import { Recovery,UpdatePassword as UpdatePasswordInterface } from '../../../models/ResetPassword';
import {useFindAccountMutation, useSendCodeMutation} from "../../../services/publicApis";
import {useUpdatePasswordMutation} from "../../../services/updatePasswordApis";
import Cookies from "js-cookie";

interface Props {
    setRecovery?: React.Dispatch<SetStateAction<Recovery>>;
    recovery?: Recovery;
    setWarning1?: React.Dispatch<SetStateAction<{
    warning: string;
    show: boolean;
}>>
    setWarning2?: React.Dispatch<SetStateAction<{
    warning: string;
    show: boolean;
}>>
    toast?: any
}

function Logic({setRecovery, recovery, setWarning1, setWarning2, toast}: Props) {
    const navigate = useNavigate()
    const [sendCode] = useSendCodeMutation()
    const [findAccount] = useFindAccountMutation()
    const [updatePassword] = useUpdatePasswordMutation()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRecovery!(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const findAccountAndGetCode = async (): Promise<void> => {
      try {
        if(!recovery?.search) {
          return setWarning1!({
            warning: "This field is required",
            show: true
          })
        }
        
        const res:any = await findAccount(recovery.search);

        if(res.error) {
          return setWarning1!({
            warning: res.error.data.message,
            show: true
          })
        }
        setWarning1!({
          warning: res.data.message,
          show: true
        })
        setTimeout(() => setWarning1!({warning: '', show: false}), 5000)
      } catch (error) {
        console.error(error)
      }
    }

    const sendCodeConfirmation = async (): Promise<void> => {
      try {
        if(!recovery?.code && !recovery?.search) {
           setWarning1!({
            warning: "This field is required",
            show: true
          })
          return  setWarning2!({
            warning: "This field is required",
            show: true
          })
        }
        const res:any = await sendCode(recovery);
        if('error' in res) {
          return  setWarning2!({
            warning: res.error.data.message,
            show: true
          })
        } else {
          const {access_token} = res.data;
          Cookies.set('resetToken', access_token, {
            expires: new Date(new Date().getTime() + 5 * 60 * 1000) // 5 mins
          });
          navigate('/recovery/reset-password')
        }
      } catch (error) {
        console.error('yes',error)
      }
    }

    const initialValues = {
      password: "",
      password_confirmation: "",
    }

    const validationSchema = yup.object().shape({
      password: yup.string().required('This field is required').min(6, 'Password must be minimum 6 characters'),
      password_confirmation: yup
      .string()
      .required('This field is required')
      .when("password", (password, field) =>
        password
          ? field
              .required('This field is required')
              .oneOf(
                [yup.ref("password")],
                "password and confirm password do not match"
              )
          : field
      ),
    })
    const onSubmit = async (values: UpdatePasswordInterface): Promise<void> => {
      try {
        const res: any = await updatePassword(values);
        if('data' in res) {
          toast(res.data.message, {type:"success"});
          Cookies.remove('resetToken');
          setTimeout(() => navigate('/login'), 2500) 
        } else {
          toast('Someting went wrong', {type:"error"});
        }
      } catch (error) {
        console.error(error)
      }
    }
    return {
      handleChange,
      findAccountAndGetCode,
      sendCodeConfirmation,
      initialValues,
      validationSchema,
      onSubmit,
    }
}

export default Logic