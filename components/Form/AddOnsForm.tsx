"use client";

import { useForm } from "react-hook-form";
import { useMultiFormContext } from "@/context/multistepFormContext";
import ButtonsSection from "../ButtonsSection/ButtonsSection";
import ADDONS_DATA, { AddonsEnum } from "@/data/addOnsData";

import { Form, FormContent } from "@/components/Form/Form.style";
import Checkbox from "../ui/Checkbox";

export interface IAddons {
 addons: AddonsEnum[];
}

const AddOnsForm = () => {
 const { handleNextStep, updateUserData, user } = useMultiFormContext();
 const { register, handleSubmit } = useForm<IAddons>({
  defaultValues: {
   addons: user.addons,
  },
 });

 const formSubmit = (data: IAddons) => {
  updateUserData(data);
  handleNextStep();
 };

 return (
  <Form onSubmit={handleSubmit(formSubmit)}>
   <FormContent>
    <h1>{ADDONS_DATA.title}</h1>
    <p className="topPar"> {ADDONS_DATA.desc}</p>
    {ADDONS_DATA.inputs.map((input, index) => {
     return (
      <Checkbox
       key={index}
       type={input.type}
       label={input.label}
       desc={input.desc}
       priceMonthly={input.priceMonthly}
       priceYearly={input.priceYearly}
       register={register}
      />
     );
    })}
   </FormContent>
   <ButtonsSection />
  </Form>
 );
};

export default AddOnsForm;
