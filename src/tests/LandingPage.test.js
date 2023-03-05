import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "../views/LandingPage";
import { BrowserRouter } from "react-router-dom";

test("Landing page should render", () => {
  render(<LandingPage />, { wrapper: BrowserRouter });
  const headline = screen.getByText("Dream it. Visit it.");
  expect(headline).toBeInTheDocument();
});

test("Clicking carousel suggestion puts location into search bar", () => {
  render(<LandingPage />, { wrapper: BrowserRouter });
  expect(
    screen.getByPlaceholderText("Search destinations...")
  ).toBeInTheDocument();
  fireEvent(
    screen.getByText("Tokyo, Japan"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(
    screen.queryByPlaceholderText("Search destinations...")
  ).not.toBeInTheDocument();
  expect(screen.getAllByText("Tokyo, Japan")).toHaveLength(2);
});

test("Typing in search bar should load autosuggestions", async () => {
  render(<LandingPage />, { wrapper: BrowserRouter });
  fireEvent.change(screen.getByPlaceholderText("Search destinations..."), {
    target: { value: "paris" },
  });
  await waitFor(() => {
    expect(screen.getByText("Paris Charles de Gaulle")).toBeInTheDocument();
  });
});

test("Clicking autosuggestion should populate search bar", async () => {
  render(<LandingPage />, { wrapper: BrowserRouter });
  fireEvent.change(screen.getByPlaceholderText("Search destinations..."), {
    target: { value: "paris" },
  });
  await waitFor(() => {
    expect(screen.getByText("Paris (Any)")).toBeInTheDocument();
  });
  fireEvent(
    screen.getByText("Paris (Any)"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(screen.queryByText("Paris (Any)")).not.toBeInTheDocument();
  expect(
    screen.queryByPlaceholderText("Search destinations...")
  ).not.toBeInTheDocument();
});

test("Clicking on departure location gives option to search", () => {
  render(<LandingPage />, { wrapper: BrowserRouter });
  fireEvent(
    screen.getByText("London"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
});
