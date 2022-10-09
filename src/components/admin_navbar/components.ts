import styled from "styled-components";

export const AdminNavbarContainer = styled.div`
    background: none;
    display: flex;
    width: 100%;
    height: 80px;
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    align-items: center;
    & > :where(.left, .right) {
        margin: 20px;
        font-size: 1.3em;
    }

    

`

export const ProfileButton = styled.div`
    width: fit-content;
    text-align: center;
    margin: auto;
    padding: 10px 20px;
    border-radius: 10px;
    color: rgb(211,1,52) !important;
    font-size: 1em !important;
    font-weight: 600;
    flex: 1;
    text-transform: capitalize;
    & > span {
      color: rgb(65, 65, 65);
      margin: 10px;
    }
`

export const SeachBox = styled.div`
    display: flex;
    background: white;
    align-items: center;
    padding-inline: 10px;
    border-radius: 5px;

    & > * {
        color: gray;
    }
    & > input {
        height: fit-content;
        border: none;
        outline: none;
        height: 35px;
        flex: 1;
        font-size: 0.9em;
        border-radius: 10px;
        margin: 0px 10px;
    }

    
`