import { render, screen } from "@testing-library/react";
import ResturantCard, { withPromotedLabel } from "../ResturantCard";
import MOC_DATA from "../mockData/mockData.json";
import "@testing-library/jest-dom";

test("Should render restraurant card component with props data", () => {
  render(<ResturantCard resData={MOC_DATA} />);
  const res = screen.getByText("Amma Pastries");
  expect(res).toBeInTheDocument();
});
const ResPromoted = withPromotedLabel(ResturantCard);

test("Should render promoted restraurant card component with props data", () => {
  render(<ResPromoted resData={MOC_DATA} />);
  const promotedRes = screen.getByText("Promoted");
  expect(promotedRes).toBeInTheDocument();
});
