import Cookies from 'js-cookie';
import React from 'react'
import * as yup from 'yup'
import { SigninUser } from '../../../models/User';
import { useSigninMutation } from '../../../services/publicApis';

function Logic({toast}: {toast: any}) {

    const initialValuesLogin = {
        email: "",
        password: "",
        role: 'ADMIN'
      };

    const [signin] = useSigninMutation();
    
      const onSubmitLogin = async (values: SigninUser): Promise<void> => {
    try {
      const res: any = await signin(values);
        
      if ("data" in res) {
        const { access_token } = res.data;
        Cookies.set("userToken", access_token, {
          expires: 1,
          secure: true
        });
        toast("Signin success!", { type: "success" });
        setTimeout(() => window.location.assign("/admin"), 2500);
      } 
      if ("error" in res) {
        console.log(res);
        const { message } = res.error.data;
        toast('Invalid credentials', {
          type: "error",
        });
      }

    } catch (error: any) {
      console.error(error.message);
    }
  };

      const validationSchemaLogin = yup.object().shape({
        email: yup
          .string()
          .email("This is invalid email")
          .required("This field is required"),
        password: yup.string().required("This field is required"),
      });

    return { initialValuesLogin, onSubmitLogin, validationSchemaLogin}
}

export default Logic