import styled from "styled-components";

export const TrackerContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > h1 {
        text-align: center;
        margin: 130px 0px 80px 0px;
        font-weight: 100;
        text-transform: uppercase;
        @media screen and (max-width:550px) {
        margin-bottom:150px ;
            
        }
    }

    

`

export const TrackerContent = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 600px;
    background: url('/images/content/tracker.png');
    background-size: cover;
    & > div {
        flex: 1;
    }
    @media screen and (max-width:700px){
        flex-direction: column;
    }
`
export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-inline:150px ;
    @media screen and (max-width: 800px ) {
        margin-inline: auto;
    }
`
export const SearchBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 150px 10px;
    & > span {
        color: white;
        text-shadow: 1px 3px 5px black;
    }

    & > .truly__the__most {
        font-weight: 700;
        font-size: 4em;
        margin:10px 5px;
    }
    
    & > .heartfelt__animal, .shelter {
        font-weight: 500;
        font-size: 3em;
        margin: 5px;
    }

    @media screen and (max-width: 400px ) {

    & > .truly__the__most {
        font-size: 3em;
    }
    
    & > .heartfelt__animal, .shelter {
        font-size: 2em;
    }
    }
    
`

export const Search = styled.div`
    display: flex;
    background: white;
    width: fit-content;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 1px 3px 5px black;
    & > .searchIcon {
        color: gray;
        margin-left: 10px;
        margin-right: 0px;
    }
    & > input {
        padding: 5px 10px;
        border: none;
        outline: none;
        color: gray;
        font-size: 1em;
    }

    & > button {
        background: rgb(210,0,51);
        color: white;
        border: none;
        outline: none;
        height: 100%;
        padding: 10px 20px;
        cursor: pointer;
    }

    @media screen and (max-width:500px) {
        & > input {
            width: 100%;
        }
    }
`
export const PetList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 20px;
    margin-top: 30px;
    overflow-y:auto ;
    padding: 20px;
    place-items: center;

    @media screen and (max-width:1024px){
    grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width:950px){
    grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:700px){
        flex-direction: column;
        margin-top: -90px;
    }

    @media screen and (max-width:550px) {
    grid-template-columns: repeat(1, 1fr);
    }
`