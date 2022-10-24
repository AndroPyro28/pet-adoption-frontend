import styled from "styled-components";

export const PublicNavbarContainer = styled.nav`
  width: 100%;
  margin: auto;
  padding: 0px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  backdrop-filter: blur(3px);
  z-index: 5;
  /* background: rgba(0, 0, 0, 0.01); */

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
  
  & > .logo {
    width: 130px;
    cursor: pointer;
  }

  & ul {
    display: flex;
    align-items: center;
    @media screen and (max-width:800px) {
        display: none !important;
    }
  }
  & li {
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    position: relative;
  }
  & a {
    text-decoration: none;
    color: ${({color}) => color} !important;
    text-transform: uppercase;
    /* text-shadow: 1px 3px 5px gray; */
  }
  & li.active {
    &::after {
      width: 100%;
    }
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
 
  & > .admin__back__btn {
    text-transform: capitalize;
    padding: 10px 20px;
    background: rgb(211,33,76);
    position: absolute;
    top: 130px;
    left: 50px;
    font-size: 1em;
    color: white !important;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const Write = styled.div`
  color: white;
  background: rgb(211,33,76);
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  text-transform: uppercase;
  border-radius: 50%;
  border: solid 1px rgb(211,33,76);;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    background: none;
    color: red;
  }
`