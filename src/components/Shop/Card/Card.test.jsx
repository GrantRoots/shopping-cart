import { describe, it, expect, beforeEach, vi, beforeAll } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../../../App";
import { Shop } from "../Shop";

describe("Card", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/Shop"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="Shop" element={<Shop />} />
            {/* <Route element={<Card />} /> */}
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });
  it("card should render", () => {
    const card = screen.getByTestId("card-1");

    expect(card).toBeInTheDocument();
    expect(within(card).getByRole("heading")).toBeInTheDocument();
    expect(within(card).getByText("PRICE: $")).toBeInTheDocument();
    expect(within(card).getByRole("spinbutton")).toBeInTheDocument();
    expect(
      within(card).getAllByRole("button", { name: "+1" })[0]
    ).toBeInTheDocument();
    expect(
      within(card).getAllByRole("button", { name: "-1" })[0]
    ).toBeInTheDocument();
    expect(within(card).getByRole("button", { name: "Add to cart" }));
  });
  it("should fetch data", () => {
    const imgSrc = screen.getAllByRole("img")[0].src;

    expect(imgSrc).not.toBeNull();
  });
  it("State updates");
  it("Props updates");
  it("Event handling");
  it("Interacts with other components");
});
