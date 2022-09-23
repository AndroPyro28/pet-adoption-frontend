import {GlobalStyles, AppComponent} from "./appComponents";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./auth-routes/PublicRoutes";
import Index from "./pages/public/index/Index";
import { useEffect } from "react";
import Gallery from "./pages/public/gallery/Gallery";
import About from "./pages/public/about/About";
import Signup from "./pages/public/login_signup/Signup";
import Login from "./pages/public/login_signup/Login";
import AdminRoutes from "./auth-routes/AdminRoutes";
import UserRoutes from "./auth-routes/UserRoutes";
import Home from "./pages/user/home/Home";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AnimalRecord from "./pages/admin/animal-record/AnimalRecord";
import AdoptionRecord from "./pages/admin/adopton-record/AdoptionRecord";

function App() {

  useEffect(() => {
    // let cookie:string | undefined = Cookies.get("userToken") !;

    // if(cookie?.length == 0) {
    //   Cookies.remove('userToken');
    // }
  }, []);

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
            <Route path="/user" element={<UserRoutes Component={Home} />} /> 

            {/* admin routes */}

            <Route path="/admin/animal-record" element={<AdminRoutes Component={AnimalRecord} />} />
            <Route path="/admin/adoption-record" element={<AdminRoutes Component={AdoptionRecord} />} />
            <Route path="/admin" element={<AdminRoutes Component={Dashboard} />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes> 
        
    </AppComponent>
  );
}

export default App;
