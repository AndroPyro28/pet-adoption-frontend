import * as yup from "yup";
import { SigninUser, SignupUser } from "../../../models/User";
import {
  useSignupMutation,
  useSigninMutation,
} from "../../../services/publicApis";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
type logicProps = {
  setCurrentField?: React.Dispatch<React.SetStateAction<number>>;
  toast?: any;
};

function Logic({ setCurrentField, toast }: logicProps) {
  /*  for sign up concerns */
  const navigate = useNavigate();
  const [signup] = useSignupMutation();

  const onSubmitSignup = async (values: SignupUser): Promise<void> => {
    try {
      const res: any = await signup(values);
      if ("data" in res) {
        toast("Signup successful!", { type: "success" });
        setTimeout(() => navigate("/login"), 2500);
      }
      if ("error" in res) {
        const { message } = res.error.data;
        toast(typeof message == "object" ? message[0] : message, {
          type: "error",
        });
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const validationSchemaSignup = yup.object().shape({
    first_name: yup
      .string()
      .required("This field is required")
      .min(3) 
      .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
    last_name: yup
      .string()
      .required("This field is required")
      .min(3)
      .matches(/^[A-Za-z\s]*$/, "Must container letters only"),
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
    password_confirmation: yup
      .string()
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
  });

  const initialValuesSignup = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    contact: "",
    password: "",
    password_confirmation: "",
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
    role: 'USER'
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
