import styled from "styled-components";

export const StyledButtonsSection = styled.div`
 background-color: ${({ theme }) => theme.colors.white};
 padding: 1rem;
 display: flex;
 flex-direction: row-reverse;
 justify-content: space-between;

 &:first-child {
  justify-self: flex-end;
 }
`;
