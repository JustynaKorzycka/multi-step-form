"use client";

import styled from "styled-components";

export const FormWrapper = styled.div`
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 width: 100%;

 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
 }
`;

export const Form = styled.form`
 background-color: ${({ theme }) => theme.colors.white};
 border-radius: ${({ theme }) => theme.borderRadius.lg};
 padding: 2rem 1.5rem;
 -webkit-box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.09);
 -moz-box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.09);
 box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.09);

 p.topPar {
  margin-bottom: 1.4rem;
 }

 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  box-shadow: none;

  p.topPar {
   margin-bottom: 2.2rem;
  }
 }
`;

export const ButtonsSection = styled.div`
 background-color: ${({ theme }) => theme.colors.white};
 padding: 1rem;
 display: flex;
 flex-direction: row-reverse;
 justify-content: space-between;

 &:first-child {
  justify-self: flex-end;
 }
`;
