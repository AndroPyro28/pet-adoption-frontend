import styled from "styled-components";

export const HamburgerBarBackdrop = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(2px);
    display: none;
    @media screen and (max-width: 800px) {
        display: block;
    }

     & .closeBtn {
        position: fixed;
        top: 20px;
        right: 30px;
        font-size: 2em;
        color: white;
     }
`

export const HamburgerBarContainer  = styled.div`
    width: 75vw;
    background: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    & > a {
        flex: 1;
        color: rgb(210,0,51) !important;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        
        &.active {
            background: rgb(210,0,51);
            color: white !important;
        }
        &.pending {
            color: rgb(210,0,51);
            background: white !important;
        }
    }
`