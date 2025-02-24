import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Shop";
import App from "../../App";

describe("Shop", () => {
  it("should render all elements", async () => {
    render(
      <MemoryRouter initialEntries={["/Shop"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="Shop" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(screen.getAllByText("Loading...")).toHaveLength(16);
    expect(screen.getAllByText("Loading...")[15]).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId("card-16")).toBeInTheDocument();
    });
  });
});
