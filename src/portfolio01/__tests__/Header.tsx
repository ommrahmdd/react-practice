import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Header from "./../components/Header";
describe("Portfolio01 <Header/>", () => {
  // it("Have Logo", () => {
  //   render(<Header />);
  //   expect(screen.getByLabelText("logo")).toBeInTheDocument();
  // });
  // it("Have 4 icons buttons for navbar", () => {
  //   render(<Header />);
  //   expect(screen.getAllByLabelText("navbar-icon").length).toEqual(4);
  // });
  it("Have Heading text", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Nice to meet you! I'm Adam Keyes.",
      })
    ).toBeInTheDocument();
  });
  it("Have an Entry Image", () => {
    render(<Header />);
    expect(screen.getByAltText("header image")).toBeInTheDocument();
  });
  it("Have Contact Button", () => {
    render(<Header />);
    expect(
      screen.getByRole("link", {
        name: "Contact Us",
      })
    ).toBeInTheDocument();
  });
});
