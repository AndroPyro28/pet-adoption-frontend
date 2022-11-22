import { UserNavbarTop, UserNavbarContainer, FeedbackButton, NavIcon } from "./components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Logic from "./Logic";
import { IconContainer } from "../modal/animal-record/components";
import Feedback from "../modal/feedback/Feedback";
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../../redux/profileModalSlice"
import HamburgerBar from "../hamburger-navbar/HamburgerBar";

function UserNavbar({ color }: { color: string }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [openFeedback, setOpenFeedback] = useState(false);

  const isAtive = (path: string) => {
    return path === pathname ? 'active' : '';
  }


  const {user}: any = useSelector(state => state)

  const [openHamburgerNav, setOpenHamburgerNav] = useState(false);
  const {openFeedbackModal} = Logic({setOpenFeedback})
  
  const hamburgerContent = [
    {
      content: 'Home',
      path: '/user'
    },
    {
      content: 'Tracker',
      path: '/user/tracker'
    },
    {
      content: 'Adoption',
      path: '/user/adoption'
    },
    {
      content: 'Gallery',
      path: '/user/gallery'
    },
    {
      content: 'About',
      path: '/user/about'
    },
    {
      content: 'Feedbacks',
      path: '/user/feedback'
    },
  ]
  return (
    <UserNavbarContainer>
      <UserNavbarTop color={color}>
        <img src="/images/logo/logo.png" className="logo" />
        <ul>
          <li className={isAtive('/user')}>
            <NavLink to="/user"> Home </NavLink>
          </li>
          <li className={isAtive('/user/tracker')}>
            <NavLink to="/user/tracker"> Tracker </NavLink>
          </li>
          <li className={isAtive('/user/adoption')}>
            <NavLink to="/user/adoption"> Adoption </NavLink>
          </li>
          <li className={isAtive('/user/gallery')}>
            <NavLink to="/user/gallery"> Gallery </NavLink>
          </li>
          <li className={isAtive('/user/about')}>
            <NavLink to="/user/about"> About </NavLink>
          </li>
          <li className={isAtive('/user/feedback')}>
            <NavLink to="/user/feedback"> Feedback </NavLink>
          </li>
        </ul>
        
        <li className="navIconContainer hamburgerContainer" onClick={() => setOpenHamburgerNav(true)}>
          <i className="fa-solid fa-bars hamburger"></i>
        </li>
        
        <li onClick={() => dispatch(toggleModal(true))} className="navIconContainer userContainer">
            <span>HI {user.profile.fist_name}</span><i className="fa-solid fa-circle-user user"   />
        </li>

      </UserNavbarTop>
      <IconContainer onClick={openFeedbackModal}>
        <FeedbackButton className="fa-solid fa-envelope-open-text feedbackBtn" ></FeedbackButton>
        </IconContainer>
        {
         openFeedback && <Feedback setOpenFeedback={setOpenFeedback}/>
        }
        {
          openHamburgerNav && <HamburgerBar paths={hamburgerContent} handleClose={setOpenHamburgerNav}/>
        }
    </UserNavbarContainer>
  );
}

export default UserNavbar;
