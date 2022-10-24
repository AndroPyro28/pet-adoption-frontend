import { motion } from 'framer-motion'
import { ModalBackdrop } from '../logout/components'
import { GlobalStyles, InfoRowProfile, InfoRow, Info } from "./components"
import { useSelector } from "react-redux";
import { UpdateUser, User } from '../../../models/User';
import React, { useState, useEffect } from "react"
import { IconContainer } from '../animal-record/components';
import { animateModalVariant, popUpModalVariants } from '../animationVariants';
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../redux/profileModalSlice"
import Cookies from 'js-cookie';
import Logic from './Logic';
import {ToastContainer, toast} from 'react-toastify'
function UserProfile() {
    const state: any = useSelector(state => state);
    const user: User = state.user;
    const [userProfile, setUserProfile] = useState<User>({} as User)
    const dispatch = useDispatch();
    const [allowChanges, setAllowChanges] = useState(false);
    const [updateValue, setUpdateValue] = useState<UpdateUser>({
        ...user.profile,
        imageUrl: undefined
    } as UpdateUser)

    useEffect(() => {
        setUserProfile(user);
    }, [user])

    const {handleChange, handleLogout, updateUser} = Logic({updateValue, setUpdateValue, setAllowChanges, toast})

    return (
        <ModalBackdrop>
            <GlobalStyles />
            <ToastContainer autoClose={1500} />
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

                {
                    !allowChanges && 
                    <IconContainer onClick={() => setAllowChanges(prev => !prev)}> <i className="fa-solid fa-user-pen user-edit-btn"></i> </IconContainer>
                }
                {
                    allowChanges && <IconContainer onClick={updateUser} > <i className="fa-solid fa-floppy-disk user-edit-btn"></i> </IconContainer>
                }

                <InfoRowProfile>
                    <img src='/images/content/1.jpg' />
                    <Info>
                        <label>{updateValue?.fist_name} {updateValue?.last_name}</label>
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
                        {
                            allowChanges ? <input type="text" name="fist_name" value={updateValue.fist_name} onChange={handleChange} /> : <span>
                                {updateValue?.fist_name}
                            </span>
                        }
                    </Info>
                    <Info>
                        <label>last name</label>

                        {
                            allowChanges ? <input type="text" name="last_name" value={updateValue.last_name} onChange={handleChange} /> : <span>
                                {updateValue?.last_name}
                            </span>
                        }
                    </Info>
                </InfoRow>


                <InfoRow>
                    <Info>
                        <label>Contact</label>
                        {
                            allowChanges ? <input type="number" name="contact" value={updateValue.contact} onChange={handleChange} /> : <span>
                            {updateValue?.contact}
                        </span>
                        }
                    </Info>
                    <Info>
                        <label>Address</label>
                        
                        {
                            allowChanges ? <input type="text" name="address" value={updateValue.address} onChange={handleChange} /> : <span>
                            {updateValue?.address}
                        </span>
                        }
                    </Info>
                </InfoRow>

                <button onClick={handleLogout}>Logout</button>
            </motion.div>
        </ModalBackdrop>
    )
}

export default UserProfile