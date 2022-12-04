import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Startup from "./../view/components/startup/Startup";
import { items } from "./../view/components/startup/items.constant";
describe("Growfy, <Startup/>", () => {
  it("Have  images and texts equal to items constant", () => {
    render(<Startup />);
    expect(screen.getAllByRole("img").length).toEqual(items.length);
    expect(
      screen.getAllByRole("heading", {
        level: 6,
      }).length
    ).toEqual(items.length);
  });
});
