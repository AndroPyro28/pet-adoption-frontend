import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    body {
        height: 100vh;
        width: 100vw;
        background: url('/images/img/background1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    overflow-x: hidden !important;

    }

    .backBtn {
        position: absolute;
        left: 15px;
        top: 15px;
        color: rgb(234,216,134);
        font-size: 1.5em;
        cursor: pointer;
    }

    .form {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        max-height: 85vh;
        /* justify-content: space-evenly; */
        align-items: center;
        overflow: auto;
        & > a {
            color: white;
            align-self: flex-start;
            margin: 5px 60px;
            font-size: 0.9em;
            text-decoration: none;
        }
        & > h1 {
            font-size: 2em;
            color: white;
            /* margin-bottom: 20px; */
    margin-bottom: 30px;

        }

        & > p {
            color: white;
            font-weight: 600;
        }

        & > .input-field {
            width: 80%;
            margin: 10px;
            color: rgb(210,0,51);
            display: flex;
            /* margin: 10px; */
            display: flex;
            flex-direction: column;
            
            & > div {
                display: flex;
                background: white;
                padding: 5px 15px;
                border-radius: 20px;
                align-items: center;

                & > input {
                height: 30px;
                width: 100%;
                font-size: 1em;
                outline: none;
                border: none;
                color: rgb(210,0,51);
                font-weight: 600;
                margin: 0px 10px;

                &::placeholder {
                font-weight: 500;
                    color: rgb(210,0,51);
                    font-size: 0.8em;
                }
                }
            }
           
        }
    }
`
export const Container = styled.div`
    background: linear-gradient(to bottom, rgb(211,24,51), rgb(102,26,26));
    /* height: 80vh; */
    max-height: 85vh;
    min-height: 80vh;
    width: 35vw;
    border-radius: 10px;
    padding: 20px;
    overflow: auto;
    position: relative;
    display: flex;
    align-items: center;
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

export const Logo = styled.img`
    /* margin: 50px auto 20px auto; */
    margin-top: 50px;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    & > input, button {
        padding: 10px 40px;
        border-radius: 20px;
        border: solid 2px white;
        color: white;
        background: none;
        cursor: pointer;
        font-size: 1em;
        transition: all .3s ease-in-out;
        &:hover {
            color: rgb(210,0,51);
            background: white;
        }
        &.createBtn, &.loginBtn {
            border: none;
            background: linear-gradient(50deg,  rgb(246,221,117), rgb(232,215,138));
            color: rgb(210,0,51);
            font-weight: 600;
        }
    }
`

export const ProgressBar = styled.div`
    position: fixed;
    height: 40px;
    border-radius: 5px;
    width: 350px;
    background: white;
    top: 20px;
    right: 10px;
    overflow: hidden;
    & > small {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        width: fit-content;
        height: fit-content;
        color: gray;
        font-size: 1em;
        /* text-shadow: 1px 3px 5px gray; */
    }
`

export const Progress = styled.div`
    background: lightgreen;
    height: 100%;
    display: flex;
    transition: all .3s ease-in-out;
    width: ${({progress}: {progress: number}) => `${progress * 50}px`}; /* 50 - 350 */
    align-items: center;
    justify-content: center;
`