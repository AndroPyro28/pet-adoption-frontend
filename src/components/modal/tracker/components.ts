import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .tracker__form {
        display: flex;
    justify-content: space-between;
    padding: 20px;
    background: transparent;
    border: solid 1px white;
    width: 40vw;
    height: 40vh;
    border-radius: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 1px 3px 5px black;
    }
`
export const PetImage = styled.img`
    width: 100%;
    flex: 1;
    object-fit: cover;
    height: 100%;
    width: 50%;
    border-radius:10px;
`

export const PetInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 10px;
`

export const Title = styled.span`
    color: white;
   text-shadow: 1px 3px 5px black;
   text-transform: uppercase;
`

export const Data = styled.span`
    color: white;
   text-shadow: 1px 3px 5px black;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
`