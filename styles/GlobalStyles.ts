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
    line-height: 1.5;
    color:  ${({ theme }) => theme.colors.grey}
  }
  h1{
    font-size: 1.5rem;
    @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyles;
