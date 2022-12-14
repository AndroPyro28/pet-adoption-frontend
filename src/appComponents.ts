import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        @import url('https://fonts.googleapis.com/css2?family=Chewy&family=K2D:wght@100&family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=League+Spartan:wght@100&family=Montserrat:wght@100&family=Mukta+Mahee:wght@200&family=PT+Serif&family=Poppins:wght@400;500;700&family=Raleway:wght@100&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Chewy&family=K2D:wght@100&family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=League+Spartan:wght@100&family=Montserrat:wght@100&family=Mukta+Mahee:wght@200&family=PT+Serif&family=Poppins:wght@400;500;700&family=Raleway:wght@100&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;1,400&display=swap');

        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: "roboto", "poppins", sans-serif !important;
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
