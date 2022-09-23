import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: #EAEAEA;
    }
`;

export const AdminLayout = styled.section`
    display: grid;
    grid-template-columns: 20% 80%;
    border-radius: 20px;
    background: #EAEAEA;
    @media (max-width: 800px) {
    grid-template-columns: 100%;
    & > div:nth-child(1) {
        display: none;
    }
    }
`
export const AdminComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;
`