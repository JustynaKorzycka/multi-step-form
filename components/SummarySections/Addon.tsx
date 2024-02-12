import React from "react";
import styled from "styled-components";

interface IAddonProps {
 title: string;
 price: string;
}

export const Addon = ({ title, price }: IAddonProps) => {
 return (
  <StyledAddon>
   <span className="title">{title}</span>
   <span className="price">{price}</span>
  </StyledAddon>
 );
};

const StyledAddon = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-between;
 font-size: 0.875;
 .title {
  color: ${({ theme }) => theme.colors.grey};
 }
`;
