"use client";

import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPersonalInfo } from "@/lib/resolver";
import { useForm } from "react-hook-form";
import {
 IPersonalInfo,
 useMultiFormContext,
} from "@/context/multistepFormContext";
import Input from "../ui/Input";
import ButtonsSection from "../ButtonsSection/ButtonsSection";
import PERSONAL_INFO_DATA from "@/data/personalInfoData";

import { Form } from "@/components/Form/Form.style";

const PersonalForm = () => {
 const { handleNextStep, updateUserData, user } = useMultiFormContext();
 const {
  register,
  watch,
  handleSubmit,
  formState: { errors },
 } = useForm<IPersonalInfo>({
  resolver: yupResolver(schemaPersonalInfo),
  defaultValues: {
   userName: user.userName,
   email: user.email,
   phone: user.phone,
  },
 });

 const formData = watch();

 const formSubmit = (data: IPersonalInfo) => {
  updateUserData(data);
  handleNextStep();
 };

 return (
  <Form onSubmit={handleSubmit(formSubmit)}>
   <h1>{PERSONAL_INFO_DATA.title}</h1>
   <p className="topPar"> {PERSONAL_INFO_DATA.desc}</p>
   {PERSONAL_INFO_DATA.inputs.map((input, index) => {
    const name = input.name;
    const currentError = errors[`${name}`]?.message;
    return (
     <Input
      key={index}
      label={input.label}
      placeholder={input.placeholder}
      register={register}
      name={input.name}
      error={currentError}
     />
    );
   })}
   <ButtonsSection />
  </Form>
 );
};

export default PersonalForm;
