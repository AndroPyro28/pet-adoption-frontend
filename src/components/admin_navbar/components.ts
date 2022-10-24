import styled from "styled-components";

export const AdminNavbarContainer = styled.div`
    background: none;
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-between;
`

export const Content = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    & > :where(.left, .right) {
        margin: 20px;
        font-size: 1.3em;
    }

    & > .hamburgerNavbar {
        display: none;
        font-size: 1.5em;
        cursor: pointer;
        @media screen and (max-width:800px) {
            display: block;
        }
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
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const SeachBox = styled.div`
    display: flex;
    background: white;
    align-items: center;
    padding-inline: 10px;
    border-radius: 5px;
    
    @media screen and (max-width: 600px) {
            margin: 0 20px !important;
        }
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
        @media screen and (max-width: 600px) {
            flex: none;
            width: 50% !important;
            margin: 0 20px !important;
        }
    }
`

export const LogoutButton = styled.span`
    padding: 10px 15px;
    background: white;
    border-radius:10px;
    box-shadow: 1px 3px 5px gray;
    color: gray;
    display: none;
    @media screen and (max-width:800px) {
        display: block;
    }
`