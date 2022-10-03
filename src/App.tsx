import {GlobalStyles, AppComponent} from "./appComponents";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./auth-routes/PublicRoutes";
import Index from "./pages/public/index/Index";
import Gallery from "./pages/public/gallery/Gallery";
import About from "./pages/public/about/About";
import Signup from "./pages/public/login_signup/Signup";
import Login from "./pages/public/login_signup/Login";
import AdminRoutes from "./auth-routes/AdminRoutes";
import UserRoutes from "./auth-routes/UserRoutes";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AnimalRecord from "./pages/admin/animal-record/AnimalRecord";
import AdoptionRecord from "./pages/admin/adopton-record/AdoptionRecord";
import Adoption from "./pages/user/adoption/Adoption";
import { useAuthMeQuery } from "./services/authApis";
import {useDispatch, useSelector} from "react-redux";
import { authenticationSuccess, authenticationFailed } from "./redux/userSlice";
import Cookies from "js-cookie";
import Home from "./pages/user/home/Home";
import LogoutModal from "./components/modal/logout/LogoutModal";
import UserInformation from "./pages/admin/user-information/UserInformation";
import Tracker from "./pages/user/tracker/Tracker";

function App() {
  
  const {data, isLoading, error} = useAuthMeQuery();
  const dispatch = useDispatch();
    if(!isLoading) {
      if(error) {
        dispatch(authenticationFailed({}));
        Cookies.remove('userToken');
      } else {
          !data ? Cookies.remove('userToken') : dispatch(authenticationSuccess(data));
      }
    }
  
  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <AppComponent>
      <GlobalStyles />
        <Routes>
            <Route path="/" element={<PublicRoutes Component={Index} />} />
            <Route path="/gallery" element={<PublicRoutes Component={Gallery} />} />
            <Route path="/about" element={<PublicRoutes Component={About} />} /> 
            <Route path="/signup" element={<PublicRoutes Component={Signup} />} /> 
            <Route path="/login" element={<PublicRoutes Component={Login} />} /> 

            {/* user routes */}

            <Route path="/user" element={<UserRoutes Component={Index} />} />
            <Route path="/user/gallery" element={<UserRoutes Component={Gallery} />} />
            <Route path="/user/about" element={<UserRoutes Component={About} />} /> 
            <Route path="/user/adoption" element={<UserRoutes Component={Adoption} />} /> 
            <Route path="/user/tracker" element={<UserRoutes Component={Tracker} />} /> 

            {/* admin routes */}

            <Route path="admin/animal-record" element={<AdminRoutes Component={AnimalRecord} />} />
            <Route path="admin/adoption-record" element={<AdminRoutes Component={AdoptionRecord} />} />
            <Route path="admin/user-information" element={<AdminRoutes Component={UserInformation} />} />
            <Route path="admin/" element={<AdminRoutes Component={Dashboard} />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes> 
        
    </AppComponent>
  );
}

export default App;
