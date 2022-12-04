import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Skills from "../components/Skills";
import { SKILLS } from "../skills.constant";

describe("Portfolio01 <Skills>", () => {
  it("display skills", () => {
    render(<Skills />);
    let items = screen.getAllByLabelText("skill");
    expect(items.length).toEqual(SKILLS.length);
  });
});
