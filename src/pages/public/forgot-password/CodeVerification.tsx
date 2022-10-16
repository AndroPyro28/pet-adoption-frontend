import { Container, GlobalStyles, Logo, Buttons } from "../login_signup/components";
import { SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify"
import Logic from "./Logic"
import { useOutletContext } from "react-router-dom";
import {RecoveryContainer, InputField, InputFieldContainer, ErrorMessage} from "./components"
import {Recovery} from "../../../models/ResetPassword"

// interface OutletContextProps {
//   account: string,
//   setAccount: React.Dispatch<SetStateAction<string>>
// }

function CodeVerification() {
  // const { account, setAccount }  = useOutletContext<OutletContextProps>()
  const [recovery, setRecovery] = useState({} as Recovery)
  const [warning1, setWarning1] = useState({} as {warning: string, show: boolean})
  const [warning2, setWarning2] = useState({} as {warning: string, show: boolean})
  const {
    handleChange,
    findAccountAndGetCode,
    sendCodeConfirmation
  } = Logic({setRecovery, recovery, setWarning1, setWarning2});

  return (
    <RecoveryContainer>
      <NavLink to="/login" className={`backBtn`}>
        <i className="fa-solid fa-arrow-left "></i>
      </NavLink>
      <GlobalStyles />
      <img src="/images/logo/logowhite.png" alt="" />

      <h1>Find your account</h1>

      <p> Please enter your email or mobile number to search for your account </p>

      <InputFieldContainer>
        <InputField>
          <input type="text" placeholder="Email or Phone" name="search" onChange={handleChange} />
          <button onClick={findAccountAndGetCode}>Send code</button>
        </InputField>
        { <ErrorMessage> {warning1.warning != "" && warning1.show && warning1.warning } </ErrorMessage> }
      </InputFieldContainer>

      <InputFieldContainer>
        <InputField>
        <input type="text" placeholder="Code" name="code" onChange={handleChange} />
        <button onClick={sendCodeConfirmation}>Confirm</button>
        </InputField>
        { <ErrorMessage> {warning2.warning != "" && warning2.show && warning2.warning } </ErrorMessage> }
      </InputFieldContainer>
    </RecoveryContainer>
  );
}

export default CodeVerification;
