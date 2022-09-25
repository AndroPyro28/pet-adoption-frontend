import React from 'react'

function NavlinkStyles () {

    const navLinkStyleForUserAndPublic = ({isActive}: any) => {
        return {
            borderBottom: isActive ? "rgb(223,79,114) solid 3px" : "none"
        }
    }

    return {navLinkStyleForUserAndPublic}
}

export default NavlinkStyles