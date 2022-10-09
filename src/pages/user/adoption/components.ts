import styled from "styled-components";


export const AdoptionFrontPage = styled.div`
    height: 600px;
    width: 100%;
    background: url('/images/content/adoption.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    /* clip-path: polygon(0 3%, 100% 0, 100% 96%, 0% 100%); */
    /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%); */
    /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 94%); */
`
export const AdoptionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-auto-rows: auto;
    grid-gap: 20px;
    padding: 50px 20px;
    place-items: center;
    margin: 100px 0px;
`
export const SearchBar = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-inline: 150px;
    & > span {
        color: white;
        text-shadow: 1px 3px 5px black;
    }
    & > .dont__shop {
        font-weight: 700;
        font-size: 3em;
        margin: 5px;
    }
    & > .adopt {
        font-weight: 700;
        font-size: 4em;
        margin:10px 5px;
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

export const AdoptionProcedure = styled.div`
    display: flex;
    flex-direction: column;
    background: aliceblue;
    margin: 100px 0px;
    align-items: center;
    /* clip-path: polygon(0 5%, 100% 0, 100% 94%, 0% 100%); */
    /* clip-path: polygon(0 3%, 100% 0, 100% 96%, 0% 100%); */
    padding-block: 200px;
    background: url('/images/content/bg2.png');
    background-size: cover;
    color: white;

    & * {
        color: inherit;
    }
`