import styled from "styled-components";
import ico from "@/public/images/icon-thank-you.svg";
import Image from "next/image";
import { Form, FormContent } from "./Form/Form.style";

const Submitted = () => {
 return (
  <StyledSubmitted as="div">
   <ContentWrapper>
    <Image
     src={ico}
     alt=""
    />
    <h1>Thank you!</h1>
    <p>
     Thanks for confirming your subscription! We hope you have fun using our
     platform. If you ever need support, please feel free to email us at
     support@loremgaming.com.
    </p>
   </ContentWrapper>
  </StyledSubmitted>
 );
};

export default Submitted;

const StyledSubmitted = styled(Form)`
 text-align: center;
 height: 100%;

 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  justify-content: center;
 }
`;

const ContentWrapper = styled(FormContent)``;
