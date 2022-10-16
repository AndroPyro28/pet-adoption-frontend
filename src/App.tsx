import {GlobalStyles, AppComponent} from "./appComponents";
import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
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
import { authenticationSuccess, authenticationFailed, authUser } from "./redux/userSlice";
import Cookies from "js-cookie";
import Home from "./pages/user/home/Home";
import UserInformation from "./pages/admin/user-information/UserInformation";
import Tracker from "./pages/user/tracker/Tracker";
import CodeVerification from "./pages/public/forgot-password/CodeVerification";
import RecoveryContainer from "./pages/public/forgot-password/RecoveryContainer";
import UpdatePasswordRoutes from "./auth-routes/UpdatePasswordRoutes";
import UpdatePassword from "./pages/public/forgot-password/UpdatePassword";
import ShelterInformation from "./pages/admin/shelter-information/ShelterInformation";
import Feedback from "./pages/admin/feedbacks/Feedback";
import 'react-quill/dist/quill.snow.css';
const router = createBrowserRouter([
  {
    path:"*",
    element:<h1>page not found</h1>
  },
  {
    path: '/',
    element: <PublicRoutes Component={Index} />,
  },
  {
    path: 'gallery',
    element: <PublicRoutes Component={Gallery} />,
  },
  {
    path: 'about',
    element: <PublicRoutes Component={About} />,
  },
  {
    path: 'signup',
    element: <PublicRoutes Component={Signup} />,
  },
  {
    path: 'login',
    element: <PublicRoutes Component={Login} />,
  },
  {
    path:'recovery',
    children: [
      {
        path:'',
        element: <PublicRoutes Component={CodeVerification} />
      },
      {
        path:'reset-password',
        element: <UpdatePasswordRoutes Component={UpdatePassword} />
      },
    ]
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        element: <UserRoutes Component={Index} />,
      },
      {
        path:'gallery',
        element:<UserRoutes Component={Gallery} />
      },
      {
        path:'about',
        element:<UserRoutes Component={About} />
      },
      {
        path:'adoption',
        element:<UserRoutes Component={Adoption} />
      },
      {
        path:'tracker',
        element:<UserRoutes Component={Tracker} />
      },
    ]
  },
  {
    path:'admin',
    children: [
      {
        path:'',
        element: <AdminRoutes Component={Dashboard} />
      },
      {
        path:'user-information',
        element: <AdminRoutes Component={UserInformation} />
      },
      {
        path:'animal-record',
        element: <AdminRoutes Component={AnimalRecord} />
      },
      {
        path:'shelter-information',
        element: <AdminRoutes Component={ShelterInformation} />
      },
      {
        path:'adoption-record',
        element: <AdminRoutes Component={AdoptionRecord} />
      },
      {
        path:'feedback',
        element: <AdminRoutes Component={Feedback} />
      },
    ]
  }
])

function App() {
  
  const dispatch = useDispatch<any>();
  const {data, isLoading, error} = useAuthMeQuery();
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
      <RouterProvider router={router} />
    </AppComponent>
  );
}

export default App;
