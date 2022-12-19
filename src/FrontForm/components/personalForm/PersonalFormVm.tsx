import React from "react";
import { context } from "../../app/context";
export default function PersonalFormVm() {
  let formInitialValues = (React.useContext(context) as any).personalInfo;
  type IFormInitialValue = {
    name: string;
    email: string;
    phone: string;
  };
  let validate = (value: IFormInitialValue) => {
    let errors: any = {};
    if (!value.name) errors.name = "Name is required";
    if (!value.email) errors.email = "Email is required";
    if (!value.phone) errors.phone = "Phone is required";
    return errors;
  };
  let contextValue = React.useContext(context);
  let handleGlobalForm = (values: IFormInitialValue) => {
    (contextValue as any).handlePersonalInfo(values);
  };
  return { formInitialValues, validate, contextValue, handleGlobalForm };
}
