import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mockData/mocResData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should render the body component with search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const inputSearch = screen.getByTestId("searchInput");
  fireEvent.change(inputSearch, { target: { value: "poha" } });
  fireEvent.click(searchBtn);

  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(1);
});

it("Should render top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topRestaurants = screen.getByRole("button", {
    name: "Top Rated Resturants",
  });
  fireEvent.click(topRestaurants);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(9);
});
