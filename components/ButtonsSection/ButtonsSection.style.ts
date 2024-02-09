import styled from "styled-components";

export const StyledButtonsSection = styled.div`
 padding: 1rem;
 display: flex;
 flex-direction: row-reverse;
 justify-content: space-between;
 background-color: #fff;

 &:first-child {
  justify-self: flex-end;
 }
`;
