"use client";

import styled from "styled-components";

export const StyledStepSection = styled.div`
 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  position: relative;
  flex-basis: 30%;
 }
`;

export const ImageWrapper = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 height: 26vh;
 width: 100vw;
 z-index: -1;
 background-image: url("/images/bg-sidebar-mobile.svg");
 background-repeat: no-repeat;
 background-size: cover;
 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  background-image: url("/images/bg-sidebar-desktop.svg");
  border-radius: ${({ theme }) => theme.borderRadius.lg};
 }
`;

export const Steps = styled.div`
 display: flex;
 gap: 1rem;
 justify-content: center;
 padding: 2rem 0;
 max-width: 100%;
 position: relative;
 z-index: 1;

 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
 }
`;
