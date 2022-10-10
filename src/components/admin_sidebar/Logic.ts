import { useLocation } from 'react-router-dom';

function Logic() {
    const {pathname} = useLocation()

    const navLinkStylesFirst = ({isActive}: any) => { // this is temporary cause it bugged
      if(pathname != '/admin') {
        isActive=false
      }
      return {
        background: isActive ? "#EAEAEA" : "",
        color: isActive ? "rgb(65, 65, 65)" : "gray",
      };
    }
  
    const navLinkStyles = ({isActive}: any) => {
      return {
        background: isActive ? "#EAEAEA" : "",
        color: isActive ? "rgb(65, 65, 65)" : "gray",
      };
    }


  return {
    navLinkStylesFirst,
    navLinkStyles
  }
}

export default Logic