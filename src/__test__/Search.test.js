import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "../House/Components/Search";
import { screen } from "@testing-library/react";
import HouseService from "../House/Service/HouseService";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Search", () => {
  it("displays the house details Values are Present are Not", async () => {
    render(<Search />);
    // check if the house details are displayed
    expect(screen.getByText(/Search House's/i)).toBeInTheDocument();
    expect(screen.getByText(/Select the BedRoom Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Select the Rent Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Select the Location/i)).toBeInTheDocument();
  });

  it("if Location Dropdown are working or Not", async () => {
    render(<Search />);
    HouseService.getlocationList().then((response) => {
      expect(response.data).not.toBeNull();
      expect(response.data).toBeDefined();
      expect(response.data.length).toBeGreaterThan(0);
    });
  });

  it("if Rent Dropdown are working or Not", async () => {
    render(<Search />);
    HouseService.getRentList().then((response) => {
      expect(response.data).not.toBeNull();
      expect(response.data).toBeDefined();
      expect(response.data.length).toBeGreaterThan(0);
    });
  });

  it("if BedRoom Dropdown are working or Not", async () => {
    render(<Search />);
    HouseService.getBedRoomList().then((response) => {
      expect(response.data).not.toBeNull();
      expect(response.data).toBeDefined();
      expect(response.data.length).toBeGreaterThan(0);
    });
  });
});
