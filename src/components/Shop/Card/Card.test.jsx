import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../../../App";
import { Shop } from "../Shop";
import { useFetchProduct } from "./Card";

describe("Card", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/Shop"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="Shop" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });
  it("should render all elements", async () => {
    expect(screen.getAllByText("Loading...")[0]).toBeInTheDocument();

    await waitFor(() => {
      let card = screen.getByTestId("card-1");
      expect(card).toBeInTheDocument();
      expect(
        within(card).getByRole("heading", { level: 4 })
      ).toBeInTheDocument();
      expect(within(card).getByText(/PRICE: \$/)).toBeInTheDocument();
      expect(within(card).getByRole("img")).toBeInTheDocument();
      expect(
        within(card).getByRole("spinbutton", { value: 0 })
      ).toBeInTheDocument();
      expect(
        within(card).getByRole("button", { name: "+1" })
      ).toBeInTheDocument();
      expect(
        within(card).getByRole("button", { name: "-1" })
      ).toBeInTheDocument();
      expect(
        within(card).getByRole("button", { name: "Add to cart" })
      ).toBeInTheDocument();
    });
  });
  it("should fetch data", async () => {
    await waitFor(() => {
      let card = screen.getByTestId("card-1");
      expect(within(card).getByRole("heading", { level: 4 })).toHaveTextContent(
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      );
      expect(within(card).getByText("PRICE: $109.95")).toBeInTheDocument();
      expect(within(card).getByRole("img")).toHaveAttribute(
        "src",
        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      );
    });
  });
  it("all inputs and buttons should work", async () => {
    const user = userEvent.setup();
    await waitFor(async () => {
      let card = screen.getByTestId("card-1");
      const plusOne = within(card).getByRole("button", { name: "+1" });
      const minusOne = within(card).getByRole("button", { name: "-1" });
      const addToCart = within(card).getByRole("button", {
        name: "Add to cart",
      });
      const input = within(card).getByRole("spinbutton");

      await user.click(plusOne);
      expect(
        within(card).getByRole("spinbutton", { value: 1 })
      ).toBeInTheDocument();
      await user.click(minusOne);
      expect(
        within(card).getByRole("spinbutton", { value: -1 })
      ).toBeInTheDocument();

      await user.type(input, "2");
      await user.click(addToCart);
      expect(screen.getByText("Total in cart: 2")).toBeInTheDocument();
    });
  });

  // it("State updates");
  // it("Props updates");
  // it("Event handling");
  // it("Interacts with other components");
});
