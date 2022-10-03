import styled from "styled-components";

export const TrackerContainer = styled.div`
    display: flex;
    flex-direction: column;

`

export const TrackerContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 900px;
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
    justify-content: center;
    align-items: flex-start;
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
`
export const PetList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 20px;
    margin-top: 120px;
    overflow-y:auto ;
    padding: 20px;
    @media screen and (max-width:700px){
        flex-direction: column;
        margin-top: -90px;
    }
`