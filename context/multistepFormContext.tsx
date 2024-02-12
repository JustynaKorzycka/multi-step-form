"use client";
import STEP_DATA from "@/data/stepData";
import { useContext, useState, createContext, ReactNode } from "react";
import { PlansEnum } from "@/data/planData";
import { AddonsEnum } from "@/data/addOnsData";
import { boolean } from "yup";

export interface IPersonalInfo {
 userName: string;
 email: string;
 phone: string;
}

export interface User extends IPersonalInfo {
 addons: AddonsEnum[];
 plan: PlansEnum;
 yearly: boolean;
}

export const initialUserData: User = {
 userName: "",
 email: "",
 phone: "",
 plan: PlansEnum.arcade,
 yearly: false,
 addons: [],
};

export interface UserContextType {
 user: User;
 updateUserData: (property: Partial<User>) => void;
 currentStep: number;
 stepsNumber: number;
 submitted: boolean;
 handlePrevStep: () => void;
 handleNextStep: () => void;
 handleChangeToPlan: () => void;
 handleSubmit: () => void;
}

export const MultiFormContext = createContext<UserContextType>({
 user: initialUserData,
 updateUserData: () => {},
 currentStep: 0,
 stepsNumber: 0,
 submitted: false,
 handlePrevStep: () => {},
 handleNextStep: () => {},
 handleChangeToPlan: () => {},
 handleSubmit: () => {},
});

interface MultiFormProps {
 children: ReactNode;
}

export const MultiFormContextProvider = ({ children }: MultiFormProps) => {
 const [user, setUser] = useState<User>(initialUserData);
 const [currentStep, setCurrentStep] = useState<number>(0);
 const [submitted, setSubmitted] = useState<boolean>(false);

 const updateUserData = (values: Partial<User>) => {
  setUser({ ...user, ...values });
 };
 const stepsNumber = STEP_DATA.length;

 const handlePrevStep = () => {
  if (currentStep > 0) {
   setCurrentStep((prev) => prev - 1);
  }
 };
 const handleNextStep = () => {
  if (currentStep < 3) {
   setCurrentStep((prev) => prev + 1);
  }
 };

 const handleChangeToPlan = () => {
  setCurrentStep(1);
 };

 const handleSubmit = () => {
  setSubmitted(true);
 };
 return (
  <MultiFormContext.Provider
   value={{
    user,
    updateUserData,
    currentStep,
    stepsNumber,
    submitted,
    handlePrevStep,
    handleNextStep,
    handleChangeToPlan,
    handleSubmit,
   }}
  >
   {children}
  </MultiFormContext.Provider>
 );
};

export const useMultiFormContext = () => useContext(MultiFormContext);
