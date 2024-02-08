import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { IPersonalInfo } from "@/context/multistepFormContext";
import { NameEnum } from "@/data/personalInfoData";
import ErrorText from "./ErrorText";

interface IInputProps {
 name: NameEnum;
 label: string;
 placeholder: string;
 register: UseFormRegister<IPersonalInfo>;
 error: string | undefined;
}

const Input = ({ name, label, register, placeholder, error }: IInputProps) => {
 return (
  <InputGroup $error={error ? true : false}>
   <label>{label}</label>
   <input
    placeholder={placeholder}
    {...register(name, { required: true })}
   />
   <ErrorText text={error} />
  </InputGroup>
 );
};

export default Input;

import styled from "styled-components";

interface IStyledProps {
 $error?: boolean;
}

export const InputGroup = styled.div<IStyledProps>`
 position: relative;
 display: flex;
 flex-direction: column;
 gap: 3px;
 margin-bottom: 1rem;
 label {
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
 }
 input {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid
   ${({ theme, $error }) => ($error ? theme.colors.red : theme.colors.border)};

  &:focus {
   outline: none;
   border: 1px solid ${({ theme }) => theme.colors.purple};
  }
 }
`;
