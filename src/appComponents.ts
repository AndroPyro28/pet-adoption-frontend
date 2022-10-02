import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: "poppins", "roboto", sans-serif !important;
        text-decoration: none;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px grey;
    }
    &::-webkit-scrollbar-thumb {
        background: rgb(210,0,51);
        border-radius: 10px;
    }
`;

export const AppComponent = styled.main`
  font-family: "poppins", "roboto", sans-serif;
`;
