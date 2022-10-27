import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: #EAEAEA;
    }
`;

export const AdminLayout = styled.section`
  display: grid;
  grid-template-columns: 20% 80%;
  border-radius: 20px;
  background: #eaeaea;
  overflow-x: hidden;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
    & > div:nth-child(1) {
      display: none;
    }
  }
`;
export const AdminComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (max-width:800px) {
    padding-inline:20px;
  }
`;

export const UserLayout = styled.div`
  padding-top: ${({givePaddingToTop}: {givePaddingToTop: boolean}) => givePaddingToTop ? "220px" : "0px"};
  overflow-x: hidden;
`;

export const PublicRoutesContainer = styled.section`
  overflow-x: hidden;

  & .chatbot {
    position: fixed;
    right: 20px;
    bottom: 20px;
    padding: 15px;
    background: rgb(210,0,51);
    border-radius: 50%;
    color: white;
    font-size: 1.5em;
  }

`