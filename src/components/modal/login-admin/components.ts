import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  

.AdminLoginModalBackdrop {
  height: 100vh !important;
  width: 100vw !important;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  }
`
export const AdminLoginModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  transition: all .5s ease-in-out;
  opacity: ${({showAdminLogin}: {showAdminLogin: boolean}) => showAdminLogin ? '1' : '0' };
  pointer-events: ${({showAdminLogin}: {showAdminLogin: boolean}) => showAdminLogin ? 'all' : 'none' };
  & > .form-admin {
    width: 40vw;
    height: 80vh;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;

    & > .backBtn {
        position: absolute;
        left: 10px;
        top: 10px;
        font-size: 1.5em;
    }

    @media screen and (max-width: 980px) {
        width: 45vw;
    }
    @media screen and (max-width: 750px) {
        width: 55vw;
        padding: 10px;

    }
    @media screen and (max-width: 550px) {
        width: 65vw;
    }
    @media screen and (max-width: 450px) {
        width: 75vw;
    }
    @media screen and (max-width: 400px) {
        width: 95vw;
    }
  }
`

export const ContainerAdmin = styled.div`
    background: linear-gradient(to bottom, rgb(211,24,51), rgb(102,26,26));
    height: 80vh;
    width: 35vw;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    @media screen and (max-width: 980px) {
        width: 45vw;
    }
    @media screen and (max-width: 750px) {
        width: 55vw;
        padding: 10px;

    }
    @media screen and (max-width: 550px) {
        width: 65vw;
    }
    @media screen and (max-width: 450px) {
        width: 75vw;
    }
    @media screen and (max-width: 400px) {
        width: 95vw;
    }
`