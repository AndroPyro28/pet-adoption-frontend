import { motion } from 'framer-motion'
import { ModalBackdrop } from '../logout/components'
import {GlobalStyles, InfoRowProfile, InfoRow, Info} from "./components"
import { useSelector } from "react-redux";
import { User } from '../../../models/User';
 import {useState, useEffect} from "react"
import { IconContainer } from '../animal-record/components';
import { animateModalVariant, popUpModalVariants } from '../animationVariants';
import {useDispatch} from "react-redux";
import {toggleModal} from "../../../redux/profileModalSlice"
import Cookies from 'js-cookie';
function UserProfile() {
  const state: any = useSelector(state => state);
  const user: User = state.user;
  const [userProfile, setUserProfile] = useState<User>({} as User)
  const dispatch = useDispatch();

  useEffect(() => {
    setUserProfile(user);
  }, [user])

  const handleLogout = () => {
    Cookies.remove('userToken');
    window.location.assign('/');
  }
  
  return (
    <ModalBackdrop>
        <GlobalStyles />
        <motion.div
            className='user__profile'
            variants={popUpModalVariants}
            animate="animate"
            initial="initial"
            exit={'exit'}
        >   
            <IconContainer onClick={() => dispatch(toggleModal(false))}>
                <i className="fa-solid fa-xmark closeBtn"></i>
            </IconContainer>

            <IconContainer>
                <i className="fa-solid fa-user-pen user-edit-btn"></i>
            </IconContainer>
            <InfoRowProfile>
                <img src='/images/content/1.jpg' />
                <Info>
                    <label>{userProfile?.profile?.fist_name} {userProfile?.profile?.last_name}</label>
                    <span>
                        @{userProfile?.email}
                    </span>
                </Info>
            </InfoRowProfile>

            <InfoRow>
                <Info>
                    <label>email</label>
                    <span>
                        {userProfile?.email}
                    </span>
                </Info>
                <Info>
                <label>Role</label>
                    <span>
                    {userProfile?.role}
                    </span>
                   
                </Info>
            </InfoRow>

            <InfoRow>
                <Info>
                    <label>First name</label>
                    <span>
                        {userProfile?.profile?.fist_name}
                    </span>
                </Info>
                <Info>
                <label>last name</label>
                    <span>
                    {userProfile?.profile?.last_name}
                    </span>
                   
                </Info>
            </InfoRow>


            <InfoRow>
                <Info>
                    <label>Contact</label>
                    <span>
                        {userProfile?.profile?.contact}
                    </span>
                </Info>
                <Info>
                <label>Address</label>
                    <span>
                    {userProfile?.profile?.address}
                    </span>
                   
                </Info>
            </InfoRow>

            <button onClick={handleLogout}>Logout</button>
        </motion.div>
    </ModalBackdrop>
  )
}

export default UserProfile