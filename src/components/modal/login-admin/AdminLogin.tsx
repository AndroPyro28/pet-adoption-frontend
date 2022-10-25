import { Form, Formik } from 'formik';
import { motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import InputWithIcon from '../../../formik/inputs/inputWithIcon';
import { Buttons, Container, GlobalStyles } from '../../../pages/public/login_signup/components';
import { AdminLoginModalBackdrop, GlobalStyles as GlobalStylesAdminModal} from './components'
import Logic from './Logic';

function AdminLogin({setShowAdminLogin, showAdminLogin, toast}: {setShowAdminLogin:  React.Dispatch<React.SetStateAction<boolean>>, showAdminLogin: boolean, toast: any}) {
    const { initialValuesLogin,
        validationSchemaLogin,
        onSubmitLogin } = Logic({toast})
    return (
        <AdminLoginModalBackdrop showAdminLogin={showAdminLogin}>
            <Formik
                initialValues={initialValuesLogin}
                validationSchema={validationSchemaLogin}
                onSubmit={onSubmitLogin}
            >
                {(formik) => {
                    return (
                        <Form autoComplete="off" className="form form-admin">
                            <GlobalStyles />
                            <GlobalStylesAdminModal />
                            <img src="/images/logo/logowhite.png" width={60} height={60} />
                            <ToastContainer autoClose={1500} />
                            <h1>Admin Login</h1>
                            <a onClick={() => setShowAdminLogin(false)} className="backBtn">
                                <i className="fa-solid fa-arrow-left "></i>
                            </a>
                            <InputWithIcon
                                values={{
                                    // id:'',
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
                            <Link to="/recovery">Forgot password? Click here</Link>
                            <Buttons>
                                <button type="submit" className="loginBtn">
                                    Login
                                </button>
                            </Buttons>
                        </Form>
                    );
                }}
            </Formik>
            </AdminLoginModalBackdrop>
    )
}

export default AdminLogin