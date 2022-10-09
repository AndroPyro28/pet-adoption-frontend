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
  // const currentRoute = pathname.split('/user/')[1];
  // const excludedRoutes = ['/user', '/user/']
  const [openFeedback, setOpenFeedback] = useState(false);

  const {openFeedbackModal} = Logic({setOpenFeedback})

  return (
    <UserNavbarContainer>
      <UserNavbarTop color={color}>
        <img src="/images/logo/logo.png" className="logo" />
        <ul>
          <li>
            <NavLink to="/user"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/user/tracker"> Tracker </NavLink>
          </li>
          <li>
            <NavLink to="/user/adoption"> Adoption </NavLink>
          </li>
          <li>
            <NavLink to="/user/gallery"> Gallery </NavLink>
          </li>
          <li>
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
