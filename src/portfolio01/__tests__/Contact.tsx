import { screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { render } from "../../test-utils";
import Contact from "../components/Contact";
import useContactViewModel from "./../components/ContactViewModel";
// TODO: import state from contact viewModel
describe("Portfolio01 <Contact>", () => {
  it("Have inputs", () => {
    render(<Contact />);
    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("message")).toBeInTheDocument();
  });
  it("Typing on inputs", async () => {
    userEvent.setup();
    let { result } = renderHook(useContactViewModel);
    let { current } = result;
    let { state, handleChange } = current;

    render(<Contact />);
    let name = screen.getByTestId("name");
    let email = screen.getByTestId("email");
    let message = screen.getByTestId("message");

    let evt = {
      target: {
        name: "name",
        value: "Welcome",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    await userEvent.type(name, "Omar");
    expect(name).toHaveDisplayValue("Omar");
    act(() => {
      handleChange(evt);
    });
    console.log(state);
    await userEvent.type(email, "Omar@gmail.com");
    expect(email).toHaveDisplayValue("Omar@gmail.com");

    await userEvent.type(message, "lorem text");
    expect(message).toHaveDisplayValue("lorem text");
  });
});
