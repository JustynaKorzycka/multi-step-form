"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.colors.bg};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color:  ${({ theme }) => theme.colors.denim};
    
  }
`;

export default GlobalStyles;
