import React from "react";
import StyledButton from "./Button.style";

export type KindTypes = "prev" | "next" | "confirm";

interface IButtonProps {
 kind: KindTypes;
 onClick?: () => void;
}

const Button = ({ kind, onClick }: IButtonProps) => {
 return (
  <StyledButton
   onClick={onClick && onClick}
   type={onClick ? "button" : "submit"}
   $kind={kind}
  >
   {kind === "prev" ? "Go Back" : kind === "next" ? "Next Step" : "Confirm"}
  </StyledButton>
 );
};

export default Button;
