"use client";

import styled from "styled-components";

export const StyledForm = styled.form`
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`;

export const FormSection = styled.div`
 background-color: ${({ theme }) => theme.colors.white};
 border-radius: ${({ theme }) => theme.borderRadius.lg};
 padding: 2rem 1.5rem;
 -webkit-box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.09);
 -moz-box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.09);
 box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.09);
`;

export const Buttons = styled.div`
 background-color: red;
`;
