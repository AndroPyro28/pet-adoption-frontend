import React from "react";
import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: "poppins", "roboto", sans-serif !important;
        text-decoration: none;
    }

    ::-webkit-calendar-picker-indicator {
    }
`

export const AppComponent = styled.main`
    font-family: "poppins", "roboto", sans-serif;
`