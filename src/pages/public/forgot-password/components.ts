import styled from "styled-components";

export const RecoveryContainer = styled.div`
    background: linear-gradient(to bottom, rgb(211,24,51), rgb(102,26,26));
    height: 80vh;
    width: 30vw;
    border-radius: 10px;
    padding: 20px 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 900px) {
        width: 35vw;
    }
    @media screen and (max-width: 750px) {
        width: 40vw;
    }
    @media screen and (max-width: 650px) {
        width: 45vw;
    }

    @media screen and (max-width: 600px) {
        width: 55vw;
        padding: 20px 50px;
    }
    
    @media screen and (max-width: 500px) {
        width: 65vw;
    }
    
    @media screen and (max-width: 400px) {
        width: 70vw;
    }
    & > img {
        width: 70px;
        margin: 20px auto;
    }

    & > h1 {
        font-size: 2em;
        color:white;
    }

    & > p {
        color:white;
        font-weight: 600;
        margin: 20px auto;

    }
`

export const InputField = styled.div`
    display: flex;
    justify-content: center;
    border-radius:10px;
    overflow: hidden;
    width: 100%;
    & > input {
        padding: 10px 20px;
        border: none;
        outline: none;
        font-size: 0.9em;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
    }

    & > button {
        padding: 10px 20px;
        border: none;
        width: 110px;
        font-weight: 600;
        color: black;
        cursor: pointer;
        background: #F6DD78;
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;

        @media screen and (max-width: 750px) {
            width: 80px;
            padding: 10px 5px;
        }
    }
`

export const InputFieldContainer = styled.div`
    display: flex;
    flex-direction:column;
    margin: 15px;
    border-radius:10px;
    overflow: hidden;
    text-align: center;

`
export const ErrorMessage = styled.div`
    color: white;
    margin: 5px 0px;
    width: 100%;
`