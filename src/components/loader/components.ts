import styled from "styled-components";

export const LoaderBackdrop = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 50%);
    z-index: 1000;
`

export const Spinner = styled.i`
@keyframes animateLoader {
    0% {
        scale: 1;
    }
    100% {
        scale: 2;
    }
}
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: none;
    z-index: 1000;
    /* border: solid 5px white; */
    /* border-bottom: none; */
    /* border-left: none; */
    /* border-left: none; */
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    color: white;
    animation: animateLoader 500ms infinite alternate-reverse ;
`