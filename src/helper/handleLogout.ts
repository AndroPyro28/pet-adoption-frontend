import React from 'react'
import Cookies from 'js-cookie'
import {useDispatch, useSelector} from "react-redux";
import { toggleModal } from '../redux/logoutModalSlice';

function HandleLogout() {
    const {logoutModal}: any = useSelector(state => state);
    const dispatch = useDispatch();

    const toggleModalLogout = () => {
          dispatch(toggleModal(!logoutModal))
    };

    const logoutUser = () => {
      Cookies.remove('userToken');
      window.location.reload();
    }

  return {
    toggleModalLogout,
    logoutUser
  }
}

export default HandleLogout