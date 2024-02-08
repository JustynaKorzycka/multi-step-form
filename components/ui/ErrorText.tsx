import styled from "styled-components";

interface IErrorProps {
 text: string | undefined;
}

const ErrorText = ({ text }: IErrorProps) => {
 return <StyledError>{text}</StyledError>;
};

export default ErrorText;

const StyledError = styled.p`
 position: absolute;
 right: 0;
 font-size: 0.8rem;
 color: ${({ theme }) => theme.colors.red};
 font-weight: bold;
`;
