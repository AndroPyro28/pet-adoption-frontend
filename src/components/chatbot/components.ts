import styled from "styled-components";

export const ChatbotContainer = styled.div`
    width: 400px;
    height: 450px;
    background: white;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 10px;
    right: 10px;
    border-radius: 15px;
    /* border-bottom-right-radius: 0px; */
    overflow: hidden;

    @media screen and (max-width:450px) {
    height: 400px;
    width: 300px;
    }
`

export const ChatBotHead = styled.div`
background: rgb(210,1,52);
flex: 1;
display: flex;
align-items: center;
color: white;
cursor: pointer;
& > h1 {
    font-size: 1em;
    margin: 10px;
}
`
export const ChatBotBody = styled.div`
flex: 5;
display: flex;
flex-direction: column;
overflow-x: hidden;
overflow-y: auto;
`

export const Message = styled.div`
    background: rgb(210,1,52);
    width: fit-content;
    margin: 10px;
    color: white;
    padding: 10px 30px;
    border-radius: 50px;
    font-size: 0.9em;

    & > p {
        width: fit-content;
    }
    &:nth-child(odd) {
        border-top-left-radius: 0px;
        align-self: flex-start;
    }
    &:nth-child(even) {
        border-bottom-right-radius: 0px;
        align-self: flex-end;
    }
    & a {
        color: white;
        text-decoration: underline;
    }

    @media screen and (max-width:750px) {
        font-size: 0.8em;
    }
`

export const ChatBotFooter = styled.div`
flex: 1;
gap: 10px;
display: flex;
align-items: center;
padding-inline: 10px;
border-top: 1px solid rgb(210,1,52);
`

export const TypingAnimation = styled.div`
    font-size: 1.5em;
    padding: 0px 15px;
    border-radius: 20px;
    color: white;
    background: rgb(210,1,52);
    width: fit-content;
    margin: 10px;

    @keyframes animateTyping {
        0% {
            opacity: 0.3;
        }
        100% {
            opacity: 100;
        }
    }

    & > .typing {
        animation: animateTyping 1000ms infinite ease-in-out alternate-reverse;
    }
`
export const Choice = styled.div`
    width: 90%;
    text-align: center;
    font-size: 0.9em;
    border: solid 2px rgb(210,1,52);
    border-radius: 10px;
    display: flex;
    height: 70%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease-in-out;
    padding: 5px;
    &:hover {
        background: rgb(210,1,52);
        color: white;
    }
    @media screen and (max-width:750px) {
        font-size: 0.8em;
    }
`