import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mockData/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restaurant menu component", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const resCatagory = screen.getAllByTestId("resCatagory");
  const accordionHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordionHeader);
  const foodItem = screen.getAllByTestId("foodItems");
  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  const cartView = screen.getByText("Cart(2)");
  expect(cartView).toBeInTheDocument();
  fireEvent.click(cartView);

  const cartItemList = screen.getAllByTestId("cartItemList");
  expect(cartItemList.length).toBe(2);
});
