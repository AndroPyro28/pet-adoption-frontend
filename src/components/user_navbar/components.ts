import styled from "styled-components";

export const UserNavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`
export const UserNavbarTop = styled.nav`
  width: 85%;
  margin: auto;
  padding: 0px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(3px);
  z-index: 5;
  height: 120px;
  & > .logo {
    width: 130px;
    cursor: pointer;
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
export const User = styled.i`
  font-size: 2em;
  margin-left: 20px;
  color: rgb(210,0,51);
  cursor: pointer;
`