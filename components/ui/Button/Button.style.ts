import styled from "styled-components";
import { KindTypes } from "./Button";

interface IBtnStyleProps {
 $kind: KindTypes;
}

const StyledButton = styled.button<IBtnStyleProps>`
 font-size: 0.875rem;
 font-weight: 600;
 border-radius: ${({ theme }) => theme.borderRadius.sm};
 background-color: ${({ $kind, theme }) =>
  $kind === "prev"
   ? "transparent"
   : $kind === "next"
   ? theme.colors.denim
   : theme.colors.purple};
 color: ${({ $kind, theme }) =>
  $kind === "prev" ? theme.colors.grey : theme.colors.white};
 border: none;
 cursor: pointer;
 padding: 0.75rem 1rem;
 min-width: 97px;
 letter-spacing: 0.75px;

 &:hover {
  background-color: ${({ $kind, theme }) =>
   $kind === "prev"
    ? "transparent"
    : $kind === "next"
    ? theme.colors.denimHover
    : theme.colors.purpleHover};
  color: ${({ $kind, theme }) => $kind === "prev" && theme.colors.denim};
 }
`;

export default StyledButton;
