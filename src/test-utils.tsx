import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

let myProdvider = ({ children }: any) => {
  return <Router>{children}</Router>;
};

let customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  render(ui, { wrapper: myProdvider, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
