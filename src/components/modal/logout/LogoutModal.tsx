import {
    ModalBackdrop, Warning,
    ButtonContainer
} from "./components"
import { motion } from "framer-motion"
import HandleLogout from "../../../helper/handleLogout"
function LogoutModal() {
    const logoutVariants = {
        initial: {
            y: -500
        },
        animate: {
            y: 0,
            transition: {
                duration: 1,
                type: 'spring'
            }
        },
        exit: {
            x: "100vw",
            transition: {
                ease: "easeInOut"
            }
        }
    }
    const {toggleModalLogout, logoutUser} = HandleLogout();
    return (
        <ModalBackdrop>
            <motion.div className='logout__form'
                variants={logoutVariants}
                initial="initial"
                animate="animate"
            >
                <Warning>
                    <i className="fa-solid fa-triangle-exclamation warning"></i> Do you really wish to leave and logout?
                </Warning>

                <ButtonContainer>
                    <button onClick={toggleModalLogout}>No, Cancel</button>
                    <button onClick={logoutUser}>Yes, Logout</button>
                </ButtonContainer>

            </motion.div>
        </ModalBackdrop>
    )
}

export default LogoutModal