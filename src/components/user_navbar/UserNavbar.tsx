import { UserNavbarTop, UserNavbarContainer, User, FeedbackButton } from "./components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Logic from "./Logic";
import { IconContainer } from "../modal/animal-record/components";
import Feedback from "../modal/feedback/Feedback";
import {useDispatch} from "react-redux";
import {toggleModal} from "../../redux/profileModalSlice"
function UserNavbar({ color }: { color: string }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [openFeedback, setOpenFeedback] = useState(false);

  const isAtive = (path: string) => {
    return path === pathname ? 'active' : '';
  }

  const {openFeedbackModal} = Logic({setOpenFeedback})

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
          <li onClick={() => dispatch(toggleModal(true))}>
            <User className="fa-solid fa-circle-user"   />
          </li>
        </ul>
      </UserNavbarTop>
      <IconContainer onClick={openFeedbackModal}>
        <FeedbackButton className="fa-solid fa-envelope-open-text feedbackBtn" ></FeedbackButton>
        </IconContainer>
        {
         openFeedback && <Feedback setOpenFeedback={setOpenFeedback}/>
        }
    </UserNavbarContainer>
  );
}

export default UserNavbar;
