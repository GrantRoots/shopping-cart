import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";

describe("App", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/Home"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });
  it("initally renders all elements", () => {
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("To Shop");
    expect(link).toHaveAttribute("href", "/Shop");
    expect(screen.getByText("Total in cart: 0")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Go to cart / checkout" })
    ).toBeInTheDocument();
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
  it("link to switch pages works", async () => {
    const user = userEvent.setup();
    let link = screen.getByRole("link");
    await user.click(link);
    expect(await screen.getByTestId("shop")).toBeInTheDocument();
  });
});
