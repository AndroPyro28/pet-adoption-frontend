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
        height: 100%;
        text-align: center;
        justify-content: space-evenly;
        align-items: center;

        & > a {
            color: white;
            align-self: flex-start;
            margin: 0px 60px;
            font-size: 0.9em;
            text-decoration: none;
        }
        & > h1 {
            font-size: 2em;
            color: white;
            /* margin-bottom: 20px; */
        }

        & > p {
            color: white;
            font-weight: 600;
        }

        & > .input-field {
            width: 80%;
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
    height: 80vh;
    width: 35vw;
    border-radius: 10px;
    padding: 20px;
    position: relative;
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