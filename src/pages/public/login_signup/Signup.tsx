import { Form, Formik } from "formik";
import Logic from "./logic";
import { Container, GlobalStyles, Logo, Buttons, Progress, ProgressBar } from "./components";
import { useEffect, useState } from "react"
import InputWithIcon from "../../../formik/inputs/inputWithIcon";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"
import { object } from "firebase-functions/v1/storage";

function Signup() {
  const [currentField, setCurrentField] = useState<number>(0);
  const { initialValuesSignup, validationSchemaSignup, onSubmitSignup, handlePrev, handleNext } =
    Logic({ setCurrentField, toast });

  const inputFieldArr = [
    [
      <InputWithIcon
        values={{
          name: "first_name",
          placeholder: 'Enter your firstname',
          icon: 'fa-solid fa-circle-info fa-lg',
          type: "text",
          className: "input-field",
        }}
      />,
      <InputWithIcon
        values={{
          name: "last_name",
          placeholder: 'Enter your lastname',
          icon: 'fa-solid fa-circle-info fa-lg',
          type: "text",
          className: "input-field",
        }}
      />,
    ],
    [
      <InputWithIcon
        values={{
          name: "email",
          placeholder: 'Enter your email',
          icon: "fa-solid fa-envelope fa-lg",
          type: "email",
          className: "input-field",
        }}
      />,
      <InputWithIcon
        values={{
          name: "address",
          placeholder: 'Enter your address',
          icon: 'fa-solid fa-location-dot fa-lg',
          type: "text",
          className: "input-field",
        }}
      />,
    ],
    [
      <InputWithIcon
        values={{
          name: "contact",
          placeholder: 'Enter your contact number',
          // label: "Contact",
          icon: 'fa-solid fa-phone fa-lg',
          type: "text",
          className: "input-field",
        }}
      />,
    ],
    [
      <InputWithIcon
        values={{
          name: "password",
          placeholder: 'Enter your password',
          // label: "Contact",
          icon: 'fa-solid fa-lock fa-lg',
          type: "password",
          className: "input-field",
        }}
      />,
      <InputWithIcon
        values={{
          name: "password_confirmation",
          placeholder: 'Comfirm your password',
          // label: "Contact",
          icon: 'fa-solid fa-lock fa-lg',
          type: "password",
          className: "input-field",
        }}
      />,
    ]
  ];

  const [progress, setProgress] = useState(0);

  return (<>
    <ProgressBar>
      <small>Sign up progress</small>
      <Progress progress={progress}/>
    </ProgressBar>
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
          
          const {errors, touched, values}:any  = formik;
          let successField = 0;
          // console.log({errors, touched, values});

          for(const field in touched) {
            if(!Boolean(errors[field]) && values[field] != "") {
              successField++;
            }
          }

          setProgress(successField);
          return <Form autoComplete="off" className="form" autoSave="off">
            <Logo src="/images/logo/logowhite.png" width={60} height={60} />
            <ToastContainer autoClose={1500} />

            <h1>Welcome! </h1>

            <InputWithIcon
              values={{
                name: "first_name",
                placeholder: 'Enter your firstname',
                icon: 'fa-solid fa-circle-info fa-lg',
                type: "text",
                className: "input-field",
              }}
            />

            <InputWithIcon
              values={{
                name: "last_name",
                placeholder: 'Enter your lastname',
                icon: 'fa-solid fa-circle-info fa-lg',
                type: "text",
                className: "input-field",
              }}
            />
            <InputWithIcon
              values={{
                name: "email",
                placeholder: 'Enter your email',
                icon: "fa-solid fa-envelope fa-lg",
                type: "email",
                className: "input-field",
              }}
            />
            <InputWithIcon
              values={{
                name: "address",
                placeholder: 'Enter your address',
                icon: 'fa-solid fa-location-dot fa-lg',
                type: "text",
                className: "input-field",
              }}
            />
            <InputWithIcon
              values={{
                name: "contact",
                placeholder: 'Enter your contact number',
                // label: "Contact",
                icon: 'fa-solid fa-phone fa-lg',
                type: "text",
                className: "input-field",
              }}
            />
            <InputWithIcon
              values={{
                name: "password",
                placeholder: 'Enter your password',
                // label: "Contact",
                icon: 'fa-solid fa-lock fa-lg',
                type: "password",
                className: "input-field",
              }}
            />
            <InputWithIcon
              values={{
                name: "password_confirmation",
                placeholder: 'Comfirm your password',
                // label: "Contact",
                icon: 'fa-solid fa-lock fa-lg',
                type: "password",
                className: "input-field",
              }}
            />


            <NavLink to="/login">Already have an account? Click here</NavLink>

            <Buttons>
              <button className="createBtn" type="submit">Create account</button>
            </Buttons>
          </Form>;
        }}
      </Formik>
    </Container>
  </>
  );
}

export default Signup;
