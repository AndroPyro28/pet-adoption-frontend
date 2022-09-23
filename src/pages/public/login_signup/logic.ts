import * as yup from "yup";
import { SigninUser, SignupUser } from "../../../models/User";
import {
  useSignupMutation,
  useSigninMutation,
} from "../../../services/publicApis";

type logicProps = {
  setCurrentField?: React.Dispatch<React.SetStateAction<number>>;
};

function Logic({ setCurrentField }: logicProps) {

  /*  for sign up concerns */
  const [signup] = useSignupMutation();

  const onSubmitSignup = async (
    values:SignupUser
  ): Promise<void> => {
    try {
      const res = await signup(values);
      console.log(res)
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const validationSchemaSignup = yup.object().shape({
    firstname: yup
      .string()
      .required("This field is required")
      .min(3)
      .matches(/^[a-zA-Z]+$/, "Must container letters only"),
    lastname: yup
      .string()
      .required("This field is required")
      .min(3)
      .matches(/^[a-zA-Z]+$/, "Must container letters only"),
    email: yup
      .string()
      .email("This is invalid email")
      .required("This field is required"),
    address: yup.string().required("This field is required"),
    contact: yup
      .string()
      .required()
      .matches(/^[0-9]*$/, "Digits only"),
    password: yup.string().required("This field is required").min(6),
    confirmPassword: yup
      .string()
      .when("password", (password, field) =>
        password ? field.required().oneOf([yup.ref("password")]) : field
      ),
  });

  const initialValuesSignup = {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      contact: "",
      password: "",
      confirmPassword: "",
    
  };

  const handlePrev = () => {
    if (setCurrentField) {
      setCurrentField((currentValue: number) =>
        currentValue <= 0 ? currentValue : currentValue - 1
      );
    }
  };

  const handleNext = () => {
    if (setCurrentField) {
      setCurrentField((currentValue: number) =>
        currentValue < 3 ? currentValue + 1 : currentValue
      );
    }
  };
  
  /*  for sign in concerns */
  const [signin] = useSigninMutation();
  const initialValuesLogin = {
      email: "",
      password: "",
  };

  const validationSchemaLogin = yup.object().shape({
    email: yup
      .string()
      .email("This is invalid email")
      .required("This field is required"),
    password: yup.string().required("This field is required"),
  });

  const onSubmitLogin = async (values: SigninUser): Promise<void> => {
    try {
      const res = await signin(values);
      console.log(res);
      
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return {
    onSubmitSignup,
    validationSchemaSignup,
    initialValuesSignup,
    handlePrev,
    handleNext,
    initialValuesLogin,
    validationSchemaLogin,
    onSubmitLogin,
  };
}

export default Logic;
