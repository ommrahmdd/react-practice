import React from "react";
import ContextProvider from "./app/context";
import FrontForm from "./FrontForm";
export default function FrontFormLayout() {
  return (
    <ContextProvider>
      <FrontForm />
    </ContextProvider>
  );
}
