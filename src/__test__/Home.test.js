import { render, screen } from "@testing-library/react";
import Home from "../House/Components/Home";
import AddHouse from "../House/Components/AddHouse";
import { fireEvent, waitFor } from "@testing-library/react";
import HouseService from "../House/Service/HouseService";
import Swal from "sweetalert2";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

jest.mock("sweetalert2");
jest.mock("../House/Service/HouseService");
jest.mock("axios");

describe("Home page testcases", () => {
  test("Check the Home Page Heading Loaded", () => {
    render(<Home />);
    const result = screen.getByText(/Welcome to the House Rental App!/i);
    const aboutUs = screen.getByText(
      /The House Rental App ! is a web application that allows users to search for House Details, add them to their details and manulate them./i
    );
    expect(result).toBeInTheDocument();
    expect(aboutUs).toBeInTheDocument();
  });

  it("Check whether the aside content Loaded", () => {
    render(<Home />);
    expect(
      screen.getByText(
        /To Simplify the All the House Rental management System work, We do our Job try our level best !/i
      )
    ).toBeInTheDocument();
  });

  it("Check whether the footer Content Present", () => {
    render(<Home />);
    expect(
      screen.getByText(/Copyright 2024 - Prasanth Baskaran/i)
    ).toBeInTheDocument();
  });
});
