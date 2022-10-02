import styled from "styled-components";

export const UpperContents = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > :where(button, h2, .dotdotdot) {
        margin: 20px;
    }

    & > .dotdotdot {
        font-size: 1.5em;
    }
    & > button {
        background: rgb(211,1,52);
        padding: 10px 25px;
        color: white;
        border-radius: 5px;
        border: none;
        box-shadow: 1px 3px 5px gray;
        cursor: pointer;
        transition: all .3s ease-in-out;
        font-weight: 600;
        &:hover {
            background: white;
            color:rgb(211,1,52) ;
        }
    }
`
export const RecordList = styled.div`
    display: flex;
    background: white;
    border-radius: 10px;
    height: 80vh;
    max-height: 70vh;
    padding: 20px;
    flex-direction: column;

    
`

export const RecordListHeaders = styled.div`
    display: flex;
    width: 100%;
    color: gray;
    
`
export const DataList = styled.div`
    background: white;
    height: 65vh;
    max-height: 70vh;
    color: dimgrey;
    font-size: 1em;
    font-weight: 600;
    overflow-y: auto;
    position: relative;
    & > h1 {
        margin: 20px 20px;
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 0;
        width: fit-content;
        margin: auto;
    }

`