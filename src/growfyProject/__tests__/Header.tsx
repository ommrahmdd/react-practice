import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Header from "./../view/components/header/Header";
describe("Growfy, <Header>", () => {
  it("Should have logo, 7 links, 1 heading, 2 buttons for header and 1 for menu and at last 4 images", () => {
    render(<Header />);
    let logo = screen.getByTestId("logo");
    let links = screen.getAllByRole("link");
    let heading = screen.getByRole("heading", {
      level: 1,
    });
    let btns = screen.getAllByRole("button");
    let imgs = screen.getAllByRole("img");

    expect(logo).toBeInTheDocument();
    expect(links.length).toEqual(7);
    expect(heading).toBeInTheDocument();
    expect(btns.length).toEqual(3);
    expect(imgs.length).toEqual(6);
  });
});
