import styled from "styled-components";

export const ChatbotContainer = styled.div`
    width: 350px;
    height: 410px;
    background: white;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 80px;
    right: 40px;
    border-radius: 15px;
    /* border-bottom-right-radius: 0px; */
    overflow: hidden;
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
`

export const ChatBotFooter = styled.div`
flex: 1;
gap: 10px;
display: flex;
align-items: center;
padding-inline: 10px;
border-top: 1px solid rgb(210,1,52);
`

export const Choice = styled.div`
    width: 90%;
    text-align: center;
    font-size: 0.9em;
    border: solid 2px rgb(210,1,52);
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease-in-out;
    
    &:hover {
        background: rgb(210,1,52);
        color: white;
    }
`