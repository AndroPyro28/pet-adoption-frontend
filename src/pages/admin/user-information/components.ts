import styled from "styled-components";

export const UserInfomationContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const UserInformationList = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 20px;
    height: 80vh;
    max-height: 75vh;
`   
export const UserContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0px;
    font-size: 800;
    box-shadow: 1px gray;
    border-radius: 10px;
    margin: 10px 0px;
    box-shadow: 1px 6px 10px -5px rgba(194,192,192,0.75);
-webkit-box-shadow: 1px 6px 10px -5px rgba(194,192,192,0.75);
-moz-box-shadow: 1px 6px 10px -5px rgba(194,192,192,0.75);
`

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0px;
    background: rgb(253,88,89);
    border-radius:none ;
    border-top-left-radius: 20px ;
    border-top-right-radius: 20px ;
    font-weight: 700;
    text-transform: capitalize;
`


export const Row = styled.div`
    flex: 1;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
`

