import styled from "styled-components";

export const AnimalRecordContainer = styled.div`
    display: flex;
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