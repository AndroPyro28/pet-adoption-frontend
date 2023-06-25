import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
        .user__profile {
            height: 60vh;
            width: 60vw;
            background: white;
            border-radius: 10px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 50px;
            overflow-x: hidden;
            overflow-y: auto;
            & > button {
                padding: 10px 20px;
                width: fit-content;
                border: none;
                background: gray;
                color: white;
                margin: 10px auto;
                border-radius: 10px;
                cursor: pointer;
            }
            
        }

        .user-edit-btn {
            position: absolute;
            font-size: 1.5em;
            top: 120px;
            right: 30px;
        }

        .closeBtn {
            position: absolute;
            font-size: 1.5em;
            top: 10px;
            right: 20px;
        }
`
export const InfoRowProfile = styled.div`
    display: flex;
    margin-bottom: 20px;
    & > img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                object-fit: cover;
            }

    & > div {
        color: black;
        font-size: 1.2em;
        margin: 5px 10px;
        text-transform: capitalize;

        & > label {
            text-transform: capitalize !important;
            font-size: 1em;
        }
        & > span {
            color: gray;
            font-size: 0.7em;
            text-transform: none !important;
        }
    }
`

export const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-self: center;
    margin: 20px;
    gap: 20px;

    @media screen and (max-width:850px) {
        flex-direction: column;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'poppins', 'roboto', sans-serif;
    flex: 1;
    & > label {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.2em;
        margin: 2.5px;
    }
    & > span {
        margin: 2.5px;
        font-size: 1em;
    }

    & > input {
        padding: 5px 10px;
        font-size: 1em;
        border-radius: 5px;
        border: solid 1px gray;
        width: 80%;
        outline: none;
    }
`