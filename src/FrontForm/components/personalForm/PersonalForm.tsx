import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import Header from "../Header";
import usePersonalForm from "./PersonalFormVm";
import { MainBtn } from "../Buttons";

export default function PersonalForm() {
  let { formInitialValues, validate, contextValue, handleGlobalForm } =
    usePersonalForm();

  return (
    <div className="h-full w-full flex flex-col items-start justify-around">
      <Header
        header="Personal info"
        text="Please provide your name, email address, and phone number."
      />
      <div className="w-full">
        <Formik
          initialValues={formInitialValues}
          validate={validate}
          onSubmit={(values) => {
            handleGlobalForm(values);
            (contextValue as any).handleNext();
          }}
        >
          <Form className="space-y-10 ">
            {/* Name */}
            <div className="flex flex-col my-3 space-y-2">
              <label
                htmlFor="name"
                className="text-frontFormMarine text-lg font-semibold"
              >
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="py-4 px-5 border rounded-lg min-w-[30rem]  text-lg tracking-widest"
                placeholder="e.g Omar Ahmd"
              />
              <ErrorMessage
                className="text-frontFormStrawberry text-lg mt-1  ml-auto"
                name="name"
                component="div"
              />
            </div>
            {/* email */}
            <div className="flex flex-col my-3 space-y-2">
              <label
                htmlFor="email"
                className="text-frontFormMarine text-lg font-semibold"
              >
                Email Address
              </label>
              <Field
                type="email"
                name="email"
                className="py-4 px-5 border rounded-lg min-w-[30rem] text-lg tracking-widest"
                placeholder="e.g Omar@gmail.com"
              />
              <ErrorMessage
                className="text-frontFormStrawberry text-lg mt-1  ml-auto"
                name="email"
                component="div"
              />
            </div>
            {/* Phone */}
            <div className="flex flex-col my-3 space-y-2">
              <label
                htmlFor="phone"
                className="text-frontFormMarine text-lg font-semibold"
              >
                Mobile Phone
              </label>
              <Field
                type="phone"
                name="phone"
                className="py-4 px-5 border rounded-lg min-w-[30rem] text-lg tracking-widest"
                placeholder="e.g +20 1011223344"
              />
              <ErrorMessage
                className="text-frontFormStrawberry text-lg mt-1  ml-auto"
                name="phone"
                component="div"
              />
            </div>
            {/* Submit */}
            <div className="flex items-end ">
              <MainBtn text="Next Step" type="submit" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
