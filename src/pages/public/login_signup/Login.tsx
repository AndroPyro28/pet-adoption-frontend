import { Form, Formik } from "formik";
import Logic from "./logic";
import { Container, GlobalStyles, Logo, Buttons } from "./components";
import { useEffect, useState } from "react";
import InputWithIcon from "../../../formik/inputs/inputWithIcon";
import { NavLink } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify"
import AdminLogin from "../../../components/modal/login-admin/AdminLogin";

function Login() {
  const {
    initialValuesLogin,
    validationSchemaLogin,
    onSubmitLogin,
  } = Logic({toast});

  const [showAdminLogin, setShowAdminLogin] = useState(false)

  useEffect(() => {
    window.addEventListener('keydown', (e: any) => {
      if(e.ctrlKey && e.keyCode === 86) {
        setShowAdminLogin(true);
        console.log(e.ctrlKey, e.keyCode)
      }
    })
  }, [])

  return (
    <Container>
      <NavLink to="/" className={`backBtn`}>
        <i className="fa-solid fa-arrow-left "></i>
      </NavLink>
      
      <AdminLogin setShowAdminLogin={setShowAdminLogin} showAdminLogin={showAdminLogin} toast={toast} />

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
              <ToastContainer autoClose={1500} />
              <h1>User Login</h1>
              <InputWithIcon
                values={{
                  name: "email",
                  placeholder: "Enter your email",
                  icon: "fa-solid fa-envelope fa-lg",
                  type: "email",
                  className: "input-field",
                }}
              />
              <InputWithIcon
                values={{
                  name: "password",
                  placeholder: "Enter your password",
                  icon: "fa-solid fa-lock fa-lg",
                  type: "password",
                  className: "input-field",
                }}
              />
              <NavLink to="/recovery">Forgot password? Click here</NavLink>
              <NavLink to="/signup">Don't have an account? Click here</NavLink>
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
