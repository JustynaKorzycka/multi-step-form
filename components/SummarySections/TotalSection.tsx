import styled from "styled-components";

interface ITotalProps {
 price: number;
 yearly: boolean;
}

const TotalSection = ({ price, yearly }: ITotalProps) => {
 return (
  <StyledTotalSection>
   <span className="title">{`Total (per${yearly ? "year" : "month"})`}</span>
   <span className="price">{yearly ? `$${price}/yr` : `$${price}/mo`}</span>
  </StyledTotalSection>
 );
};

export default TotalSection;

const StyledTotalSection = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 margin-top: 1.5rem;
 color: ${({ theme }) => theme.colors.grey};

 .price {
  color: ${({ theme }) => theme.colors.purple};
  font-size: 1.2rem;
  font-weight: bold;
 }
`;
