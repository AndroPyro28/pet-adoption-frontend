import React from 'react'
import { HamburgerBarBackdrop, HamburgerBarContainer } from './components'
import {NavLink, useLocation} from "react-router-dom";
import { IconContainer } from '../modal/animal-record/components';

interface pathButton {
    icon?: string;
    content: string;
    path: string;
}

interface Props {
    paths: pathButton[],
    handleClose: React.Dispatch<React.SetStateAction<boolean>>
}

function HamburgerBar({paths, handleClose}: Props) {
    const {pathname} = useLocation()
    
    // const navLinkStyles = ({isActive}: any) => { // this has a bug
    //     return {
    //         background: isActive ? 'rgb(210,0,51)' : 'white',
    //         color: isActive ? 'white' : 'rgb(210,0,51)'
    //     }
    // }

    const navLinkStyles = (path: string, comparePath: string) => {
        return path == comparePath ? 'active' : 'pending'
    }
  return (
    <HamburgerBarBackdrop>
        <IconContainer onClick={() => handleClose(false)}>
            <i className="fa-solid fa-xmark closeBtn"></i>
        </IconContainer>
        <HamburgerBarContainer>
            {
                paths.map(pathButton => (<NavLink to={pathButton.path} className={() => navLinkStyles(pathButton.path, pathname)}>
                    {pathButton.icon && <i className={pathButton.icon} />}  
                    {pathButton.content}
                    </NavLink>))
            }
        </HamburgerBarContainer>
    </HamburgerBarBackdrop>
  )
}

export default HamburgerBar