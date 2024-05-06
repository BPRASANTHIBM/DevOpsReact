import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import HouseService from "../House/Service/HouseService";
import HouseListing from "../House/Components/HouseListing";
import { MemoryRouter } from "react-router-dom";

const mockedNavigate = jest.fn();
jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("House Listing page testcases", () => {
  it("renders correctly", async () => {
    
      <MemoryRouter>
        <HouseListing />
      </MemoryRouter>
   
    const res = HouseService.getHouseList();
    expect(res).toBeUndefined();
    expect(res).not.toBeNull();
  });

});
