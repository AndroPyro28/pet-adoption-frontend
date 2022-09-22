import styled from "styled-components";

export const PublicNavbarContainer = styled.nav`
  width: 85%;
  margin: auto;
  padding: 0px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  backdrop-filter: blur(3px);
  z-index: 5;

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