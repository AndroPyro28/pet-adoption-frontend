import { Form, Formik } from "formik";
import Logic from "./logic";
import { Container, GlobalStyles, Logo, Buttons } from "./components";
import { useState } from "react";
import InputWithIcon from "../../../formik/inputs/inputWithIcon";
import { NavLink } from "react-router-dom";
function Login() {
  const {
    initialValuesLogin,
    validationSchemaLogin,
    onSubmitLogin,
  } = Logic({});

  return (
    <Container>
      <NavLink to="/" className={`backBtn`}>
        <i className="fa-solid fa-arrow-left "></i>
      </NavLink>

      <GlobalStyles />
      <Formik
        initialValues={initialValuesLogin}
        validationSchema={validationSchemaLogin}
        onSubmit={onSubmitLogin}
      >
        {(formik) => {
          return (
            <Form autoComplete="off" className="form">
              <Logo src="/images/logo/logowhite.png" width={60} height={60} />
              <h1>Login</h1>
              <InputWithIcon
                values={{
                  name: "email",
                  placeholder: "Enter your email",
                  icon: "fa-solid fa-envelope",
                  type: "email",
                  className: "input-field",
                }}
              />
              <InputWithIcon
                values={{
                  name: "password",
                  placeholder: "Enter your password",
                  icon: "fa-solid fa-lock",
                  type: "password",
                  className: "input-field",
                }}
              />
              ,<NavLink to="/signup">Don't have an account? sign up here</NavLink>
              <Buttons>
                <button type="submit" className="loginBtn">
                  {" "}
                  Login{" "}
                </button>
              </Buttons>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default Login;
