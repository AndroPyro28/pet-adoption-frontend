import { Form, Formik } from "formik";
import Logic from "./logic";
import { Container, GlobalStyles, Logo, Buttons } from "./components";
import {useState} from "react"
import InputWithIcon from "../../../formik/inputs/inputWithIcon";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
  const [currentField, setCurrentField] = useState<number>(0);
  const navigate = useNavigate()
  const { initialValuesSignup, validationSchemaSignup, onSubmitSignup, handlePrev, handleNext } =
    Logic({setCurrentField});
    
  const inputFieldArr = [
    [
      <InputWithIcon
        values={{
          name: "firstname",
          placeholder:'Enter your firstname',
          icon:'fa-solid fa-circle-info',
          type: "text",
          className: "input-field",
        }}
      />,
      <InputWithIcon
        values={{
          name: "lastname",
          placeholder:'Enter your lastname',
          icon:'fa-solid fa-circle-info',
          type: "text",
          className: "input-field",
        }}
      />,
    ],
    [
        <InputWithIcon
          values={{
            name: "email",
            placeholder:'Enter your email',
            icon:"fa-solid fa-envelope",
            type: "email",
            className: "input-field",
          }}
        />,
        <InputWithIcon
        values={{
          name: "address",
          placeholder:'Enter your address',
          icon:'fa-solid fa-location-dot',
          type: "text",
          className: "input-field",
        }}
      />,
    ],
    [
      <InputWithIcon
        values={{
          name: "contact",
          placeholder:'Enter your contact number',
          // label: "Contact",
          icon:'fa-solid fa-phone',
          type: "text",
          className: "input-field",
        }}
      />,
    ],
    [
      <InputWithIcon
        values={{
          name: "password",
          placeholder:'Enter your password',
          // label: "Contact",
          icon:'fa-solid fa-lock',
          type: "password",
          className: "input-field",
        }}
      />,
      <InputWithIcon
        values={{
          name: "confirmPassword",
          placeholder:'Comfirm your password',
          // label: "Contact",
          icon:'fa-solid fa-lock',
          type: "password",
          className: "input-field",
        }}
      />,
    ]
  ];
  return (
    <Container>
      <NavLink to="/" className={`backBtn`}>
      <i className="fa-solid fa-arrow-left "></i>
      </NavLink>
      
      <GlobalStyles />
      <Formik
        initialValues={initialValuesSignup}
        validationSchema={validationSchemaSignup}
        onSubmit={onSubmitSignup}
      >
        {(formik) => {
          return <Form autoComplete="off" className="form">
            <Logo src="/images/logo/logowhite.png" width={60} height={60} />
            <h1>Welcome! </h1>

            {
              currentField == 0 &&
              <>
              {
                inputFieldArr[0][0]
              }
              {
                inputFieldArr[0][1]
              }
              </>
            }

            {
              currentField == 1 &&
              <>
              {
                inputFieldArr[1][0]
              }
              {
                inputFieldArr[1][1]
              }
              </>
            }

{
              currentField == 2 &&
              <>
              {
                inputFieldArr[2][0]
              }
              {
                inputFieldArr[2][1]
              }
              </>
            }

{
              currentField == 3 &&
              <>
              {
                inputFieldArr[3][0]
              }
              {
                inputFieldArr[3][1]
              }
              </>
            }


            <NavLink to="/login">Already have an account? sign in here</NavLink>

            <Buttons>
              {
                currentField > 0 && <button onClick={handlePrev}>Prev </button>
              }
              {
                currentField < 3 && <button onClick={handleNext}>Next </button>
              }
              {
                currentField >= 3 && <button className="createBtn" onClick={handleNext}>Create account</button>
              }
            </Buttons>
          </Form>;
        }}
      </Formik>
    </Container>
  );
}

export default Signup;
