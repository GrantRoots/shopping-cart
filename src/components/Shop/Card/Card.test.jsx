import { describe, it, expect } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../../../App";
import { Shop } from "../Shop";
import { useFetchProduct } from "./Card";

describe("Card", () => {
  it("card should render all elements", async () => {
    render(
      <MemoryRouter initialEntries={["/Shop"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="Shop" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getAllByText("Loading...")[0]).toBeInTheDocument();

    await waitFor(() => {
      let card = screen.getByTestId("card-1");
      expect(card).toBeInTheDocument();
      expect(within(card).getByRole("heading")).toBeInTheDocument();
      expect(within(card).getByText(/PRICE: \$/)).toBeInTheDocument();
      expect(within(card).getByRole("img")).toBeInTheDocument();
      expect(within(card).getByRole("spinbutton")).toBeInTheDocument();
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
  // it("should fetch data", () => {
  //   use useeffect
  //   expect(within(card).getByRole("img")).toHaveAttribute("src");
  // });
  // it("State updates");
  // it("Props updates");
  // it("Event handling");
  // it("Interacts with other components");
});
