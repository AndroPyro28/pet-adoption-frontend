import {GlobalStyles, AppComponent} from "./appComponents";
import { Routes, Route, useLocation } from "react-router-dom";
import PublicRoutes from "./auth-routes/PublicRoutes";
import Index from "./pages/public/index/Index";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Gallery from "./pages/public/gallery/Gallery";
import About from "./pages/public/about/About";
import Logic from "./pages/public/login_signup/logic";
import Signup from "./pages/public/login_signup/Signup";
import Login from "./pages/public/login_signup/Login";

function App() {

  useEffect(() => {
    let cookie:string | undefined = Cookies.get("userToken") !;

    if(cookie?.length == 0) {
      Cookies.remove('userToken');
    }
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
        </Routes> 
        
    </AppComponent>
  );
}

export default App;
