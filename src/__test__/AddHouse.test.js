import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import HouseService from "../House/Service/HouseService";
import Swal from "sweetalert2";
import AddHouse from "../House/Components/AddHouse";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

jest.mock("sweetalert2");
jest.mock("../House/Service/HouseService");
jest.mock("axios");

describe("AddHouse Component Properties", () => {
  it("renders correctly", () => {
    render(<AddHouse />);
    // check if the form is rendered
    expect(screen.getByText("Add House's Data")).toBeInTheDocument();
  });

  it("Label texts are renders correctly", () => {
    render(<AddHouse />);
    // check if the location input is rendered
    const locationInput = screen.getByText("Location");
    expect(locationInput).toBeInTheDocument();

    // check if the bedroom input is rendered
    const bedroomInput = screen.getByText("BedRoom");
    expect(bedroomInput).toBeInTheDocument();

    // check if the rent input is rendered
    const rentInput = screen.getByText("Rent");
    expect(rentInput).toBeInTheDocument();

    // check if the parking input is rendered
    const parkingInput = screen.getByText("Parking");
    expect(parkingInput).toBeInTheDocument();

    // check if the owner id input is rendered
    const ownerIdInput = screen.getByText("Owner Id");
    expect(ownerIdInput).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    render(<AddHouse />);

    // enter valid data in the inputs
    fireEvent.change(screen.getByPlaceholderText("Enter Location Name"), {
      target: { value: "Nagai" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter Number of BedRoom"), {
      target: { value: "3 BHK" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter Rent Details"), {
      target: { value: "25000" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter Parking Details"), {
      target: { value: "Available" },
    });
    fireEvent.change(
      screen.getByTitle("select Enter a name"),
      screen.getByText("Owner Id"),
      {
        target: { value: 1 },
      }
    );

    // submit the form
    fireEvent.click(screen.getByText("Submit"));

    // wait for the API call to finish
    await waitFor(() => expect(HouseService.addHouse).toHaveBeenCalledTimes(1));

    // check if the success message is displayed
    expect(Swal.fire).toHaveBeenCalledWith({
      title: "House Details Added Successfully!",
      text: "Click to Main Page!",
      icon: "success",
    });
  });

  it("displays an error message when the form is submitted with invalid data", async () => {
    render(<AddHouse />);

    // enter invalid data in the inputs
    fireEvent.change(screen.getByPlaceholderText("Enter Location Name"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter Number of BedRoom"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter Rent Details"), {
      target: { value: "0" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter Parking Details"), {
      target: { value: "" },
    });

    // submit the form
    fireEvent.click(screen.getByText("Submit"));

    // check if the error messages are displayed

    expect(screen.queryByText("Please Enter a Location Name")).toBeNull();

    const errorElement1 = screen.queryByText("Please Enter a No of BedRoom");
    expect(errorElement1).toBeNull();

    const errorElement2 = screen.queryByText(
      "Please Enter a Valid Rent Details"
    );
    expect(errorElement2).toBeNull();

    const errorElement3 = screen.queryByText("Please Enter a Parking Details");
    expect(errorElement3).toBeNull();
  });

})
