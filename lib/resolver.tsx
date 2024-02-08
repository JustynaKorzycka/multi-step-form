import * as yup from "yup";

export const schemaPersonalInfo = yup
 .object({
  userName: yup.string().required("This filed is required"),
  email: yup.string().email().required("This filed is required"),
  phone: yup.string().min(8).required("This filed is required"),
 })
 .required();
