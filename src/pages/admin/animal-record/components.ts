import styled from "styled-components";

export const AnimalRecordContainer = styled.div`
    display: flex;
    flex-direction: column;
`

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

export const TableHead = styled.div`
    flex: 1;
    color: gray;
    margin-bottom: 15px;
    font-family: 'roboto', sans-serif;
    font-weight: 600;
    display: flex;
    justify-content: center;

`

export const TableData = styled.div`
    flex: 1;
    color: black;
    border-bottom: solid 1px lightgray;
    padding: 20px 0px;
    font-weight: 600;
    max-height: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    justify-content: center;
`