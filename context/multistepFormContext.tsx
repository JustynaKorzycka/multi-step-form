"use client";
import STEP_DATA from "@/data/stepData";
import { useContext, useState, createContext, ReactNode } from "react";
import { PlansEnum } from "@/data/planData";

export interface IPersonalInfo {
 userName: string;
 email: string;
 phone: string;
}

export interface User extends IPersonalInfo {
 addOns: string;
 plan: PlansEnum;
 yearly: boolean;
}

export const initialUserData: User = {
 userName: "",
 email: "",
 phone: "",
 plan: PlansEnum.arcade,
 yearly: false,
 addOns: "",
};

export interface UserContextType {
 user: User;
 updateUserData: (property: Partial<User>) => void;
 currentStep: number;
 stepsNumber: number;
 handlePrevStep: () => void;
 handleNextStep: () => void;
}

export const MultiFormContext = createContext<UserContextType>({
 user: initialUserData,
 updateUserData: () => {},
 currentStep: 0,
 stepsNumber: 0,
 handlePrevStep: () => {},
 handleNextStep: () => {},
});

interface MultiFormProps {
 children: ReactNode;
}

export const MultiFormContextProvider = ({ children }: MultiFormProps) => {
 const [user, setUser] = useState<User>(initialUserData);
 const [currentStep, setCurrentStep] = useState<number>(1);

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
 return (
  <MultiFormContext.Provider
   value={{
    user,
    updateUserData,
    currentStep,
    stepsNumber,
    handlePrevStep,
    handleNextStep,
   }}
  >
   {children}
  </MultiFormContext.Provider>
 );
};

export const useMultiFormContext = () => useContext(MultiFormContext);
