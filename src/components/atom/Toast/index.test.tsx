import { render, screen } from "@testing-library/react";
import Toast from "./index";

describe("toast component", () => {
  test("correct render text", () => {
    render(<Toast msg="Text dasd message" type="success" state={true} />);
    const linkElement = screen.getByText(/Text message/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("snapshot", () => {
    const { container } = render(
      <Toast msg="Text message" type="success" state={true} />
    );
    expect(container).toMatchSnapshot();
  });
});
