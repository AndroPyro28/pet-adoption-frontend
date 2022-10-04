import { Form, Formik } from "formik";
import { Container, GlobalStyles, Logo, Buttons } from "../login_signup/components";
import { useState } from "react";
import InputWithIcon from "../../../formik/inputs/inputWithIcon";
import { NavLink } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify"
import Logic from "./Logic";

function UpdatePassword() {
    const {initialValues,
        validationSchema,
        onSubmit} = Logic({toast});
  return (
    <Container>
      <NavLink to="/" className={`backBtn`}>
        <i className="fa-solid fa-arrow-left "></i>
      </NavLink>
      <GlobalStyles />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form autoComplete="off" className="form">
              <Logo src="/images/logo/logowhite.png" width={60} height={60} />
              <ToastContainer autoClose={1500} />
              <h1>Reset Password</h1>
              <p>Please enter your new password to confirm</p>
              <InputWithIcon
                values={{
                  name: "password",
                  placeholder: "Password",
                  icon: "fa-solid fa-lock fa-lg",
                  type: "password",
                  className: "input-field",
                }}
              />
              <InputWithIcon
                values={{
                  name: "password_confirmation",
                  placeholder: "Confirm password",
                  icon: "fa-solid fa-lock fa-lg",
                  type: "password",
                  className: "input-field",
                }}
              />
              <Buttons>
                <button type="submit" className="loginBtn">
                    Confirm Changes
                </button>
              </Buttons>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default UpdatePassword;
