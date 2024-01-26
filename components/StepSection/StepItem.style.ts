import styled from "styled-components";

interface INumberStyleProps {
 $active: boolean;
}

export const StyledStepItem = styled.div`
 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  display: flex;
  align-items: center;
  gap: 1rem;
 }
`;

export const Number = styled.div<INumberStyleProps>`
 border-radius: 50%;
 border: 1px solid
  ${({ theme, $active }) =>
   $active ? theme.colors.skyBlue : theme.colors.white};
 width: 33px;
 text-align: center;
 padding: 8px 0;
 font-size: 0.875rem;
 font-weight: bold;
 color: ${({ theme, $active }) =>
  $active ? theme.colors.denim : theme.colors.white};
 background-color: ${({ theme, $active }) =>
  $active ? theme.colors.skyBlue : "transparent"};
`;

export const TextSection = styled.div`
 display: none;
 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;

  .step {
   color: ${({ theme }) => theme.colors.lightBlue};
   font-size: 0.75rem;
  }
  .desc {
   color: ${({ theme }) => theme.colors.white};
   font-size: 0.875rem;
   font-weight: bold;
  }
 }
`;
