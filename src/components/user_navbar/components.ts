import styled from "styled-components";

export const UserNavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`
export const UserNavbarTop = styled.nav`
  width: 100%;
  margin: auto;
  padding: 0px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(3px);
  height: 120px;
  & > .logo {
    width: 130px;
    cursor: pointer;
  }

  & > .navIconContainer {
    cursor: pointer;
    color: rgb(210,0,51);

    &::after {
      width:0% !important;
    }

    & > .user {
      font-size: 2em;
      align-self: center;
    }

    &.hamburgerContainer {
        display: none;
    }
    & > .hamburger {
      font-size: 1.5em;
    }
    
    @media screen and (max-width:800px) {
        display: block !important;
    }
  }

  & > ul {
    @media screen and (max-width:800px) {
    display: none;
    }
  }
  & li {
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    position: relative;
    align-self: center;
    
    &.active {
      &::after {
        width: 100%;
      }
    }
  }
  & a {
    text-decoration: none;
    color: ${({color}) => color} !important;
    text-transform: uppercase;
    text-shadow: 1px 3px 5px gray;
    /* text-shadow: 1px 3px 5px gray; */
  }
  & li::after {
    content: "";
    height: 3px;
    width: 0;
    background: #d20033;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: 0.5s;
  }
  & li:hover::after {
    width: 100%;
  }
`;

export const UserNavbarBottom = styled.div`
  height: 100px;
  width:100%;
  background: rgba(238, 238, 238, 0.363);
  display: flex;
  align-items: center;
  backdrop-filter: blur(3px);
  & > a {
    margin: 20px;
  }
`

export const LittleNavigation = styled.div`
  margin: 120px;
  font-weight: 550;
  text-transform: capitalize;
  & > a {
    color: black;
    margin: 20px;
    font: inherit;
  }
`


export const FeedbackButton = styled.div`
  @keyframes animateFeedBackBtn {
  0% {
  transform: scale(1);
  }
  100% {
  transform: scale(1.2);
  }
}
  background: white;
  color: maroon;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 1px 3px 5px rgb(46, 46, 46);
  z-index: 2;
  font-size: 2em;
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  animation: animateFeedBackBtn 1s infinite alternate-reverse;
  &:hover {
  color: rgb(210,0,51);

  transform: scale(1.1);
  }
`

export const NavIcon = styled.div`
  display: none;
  
`