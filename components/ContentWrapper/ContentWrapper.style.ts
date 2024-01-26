"use client";

import styled from "styled-components";

export const StyledContentWrapper = styled.main`
 .container {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  gap: 0;
 }

 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .container {
   flex-direction: row;
   min-height: 600px;
   max-width: 940px;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: ${({ theme }) => theme.borderRadius.xl};
   padding: 1rem;
   margin: 0 2rem;
  }
 }
`;
