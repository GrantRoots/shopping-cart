import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import { Home } from "./Home";

describe("Home", () => {
  it("should render all elemets", () => {
    render(
      <MemoryRouter initialEntries={["/Home"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/Home" element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/src/assets/nature.jpg");
  });
});
