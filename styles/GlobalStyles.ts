"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.colors.bg};
    margin: 0;
    padding: 0;
    color:  ${({ theme }) => theme.colors.denim};
  }
  p{
    margin: 0;
  }
`;

export default GlobalStyles;
