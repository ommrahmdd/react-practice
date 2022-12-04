import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Projects from "../components/Projects";
import { PROJECTS } from "./../projects.constant";
describe("Portfolio <Projects>", () => {
  it("rendering collection of projects", () => {
    render(<Projects />);
    expect(screen.getAllByLabelText("project").length).toEqual(PROJECTS.length);
  });
});
