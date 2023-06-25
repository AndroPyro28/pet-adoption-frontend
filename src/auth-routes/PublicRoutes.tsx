import Cookies from "js-cookie";
import PublicNavbar from "../components/public_navbar/PublicNavbar";
import { RoutePropTypes } from "../types/auth-routes-types/PublicRoutes.Types";
import { userToken } from "../types/cookies-types/userToken";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { User } from "../models/User";
import { useSelector } from "react-redux";
import {PublicRoutesContainer} from "./components"
import { IconContainer } from "../components/modal/animal-record/components";
import { useEffect, useState } from "react";
import { ChatBotBody } from "../components/chatbot/components";
import Chatbot from "../components/chatbot/Chatbot";
const PublicRoutes = ({ Component }: RoutePropTypes): JSX.Element => {
    const [toggleChatbot, setToggleChatbot] = useState(false)
    const { pathname } = useLocation();
    const state: any = useSelector(state => state);
    const user: User = state.user;
    let userToken: userToken | undefined = Cookies.get("userToken");

    useEffect(() => {
      const onEntry = setTimeout(() => {
        setToggleChatbot(true)
      }, 2000)
      
       return () => {
        clearTimeout(onEntry)
       }

    }, [])


    if (userToken != undefined || userToken != null || userToken) {

      if(pathname.includes('login') || pathname.includes('signup')) {
        return <Navigate to={'/'} />
      }

      if(user.role === 'USER') {
        return <Navigate to={'/user'} />
      }
    }

    

  const excludedRoutes = ["/signup", "/login", '/recovery/reset-password', '/recovery/code-verification', '/recovery'];
  return (
    <PublicRoutesContainer>
      {!excludedRoutes.includes(pathname) && (
        <PublicNavbar color={pathname === "/" ? "white" : "black"} />
      )}
      <Component />
      {
        !user?.role && !user?.role && <IconContainer onClick={() => setToggleChatbot(prev => !prev)}>
          <i className="fa-solid fa-comment chatbot"></i>
        </IconContainer>
      }
      {
        toggleChatbot && !user?.role && <Chatbot setToggleChatbot={setToggleChatbot} />
      }
    </PublicRoutesContainer>
  );
};

export default PublicRoutes;
