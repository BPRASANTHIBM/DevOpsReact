import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import HouseService from "../Service/HouseService";
import { useEffect, useState } from "react";
import "./../../App1.css";
import axios from "axios";

const Search = () => {
  const [records, setRecords] = useState([]);
  const [records1, setRecords1] = useState([]);
  const [records2, setRecords2] = useState([]);
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState(0);
  const [bedroom, setBedRoom] = useState("");
  const [recordData, setRecordData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    loadData();
    console.log(recordData);
  }, []);

  const handleSubmit = (e) => {
    console.log("handlesubmit");
    e.preventDefault();
    axios
      .get(
        "http://localhost:8055/api/house/filterHouse?location=" +
          location +
          "&rent=" +
          rent +
          "&bedroom=" +
          bedroom
      )
      .then((res) => {
        console.log(res.data);
        setRecordData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadData = async () => {
    await HouseService.getlocationList()
      .then((res) => {
        console.log(res.data);
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));

    await HouseService.getRentList()
      .then((res) => {
        console.log(res.data);
        setRecords1(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));

    await HouseService.getBedRoomList()
      .then((res) => {
        console.log(res.data);
        setRecords2(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/house");
  };
  return (
    <div>
      <div class="mt-2 container d-flex flex-column  justify-content-center  align-items-center h-100 w-100">
        <div class="card" id="SearchCard">
          <h3 class="card-header text-align-center">Search House's</h3>
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              {/* location drop down */}
              <div className="form-floating mb-3 w-80 mx-5">
                <select
                  class="form-select"
                  required="required"
                  name="ownerId"
                  title="select a location name "
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                >
                  <option name="location" selected="selected">
                    Select One
                  </option>
                  {records.map((items) => (
                    <option value={items} key={items}>
                      {items}
                    </option>
                  ))}
                </select>
                <label htmlFor="location">Select the Location</label>
              </div>

              {/* Rent Drop Down */}
              <div className="form-floating mb-3 w-80 mx-5">
                <select
                  class="form-select"
                  required="required"
                  name="rent"
                  title="select a rent name "
                  onChange={(e) => {
                    setRent(e.target.value);
                  }}
                >
                  <option name="rent" selected="selected">
                    Select One
                  </option>
                  {records1.map((items) => (
                    <option value={items} key={items}>
                      {items}
                    </option>
                  ))}
                </select>
                <label htmlFor="rent">Select the Rent Details</label>
              </div>

              {/* Bedroom Drop down */}
              <div className="form-floating mb-3 w-80 mx-5">
                <select
                  class="form-select"
                  required="required"
                  name="bedroom"
                  title="select a bedroom name"
                  onChange={(e) => {
                    setBedRoom(e.target.value);
                  }}
                >
                  <option name="bedroom" selected="selected">
                    Select One
                  </option>
                  {records2.map((items) => (
                    <option value={items} key={items}>
                      {items}
                    </option>
                  ))}
                </select>
                <label htmlFor="bedroom">Select the BedRoom Details</label>
              </div>

              <center>
                <button
                  type="submit"
                  className="me-2 btn btn-success align-content-center btn-lg"
                >
                  Submit
                </button>
                <span>
                  <a
                    className="me-2 btn btn-warning btn-lg"
                    onClick={handleClick}
                  >
                    Back
                  </a>
                </span>
              </center>
            </form>
          </div>
        </div>
      </div>

      {recordData.length != 0 && (
        <div id="EmpList" className="container-fluid">
          <div className="card mt-5">
            <div className="card-title mt-5">
              <h2>House Details Listing</h2>
            </div>
            <div className="card-body">
              <div className="table table-bordered  table-striped w-100 border  shadow px-5 pb-5 rounded">
                <thead>
                  <tr>
                    <th className="bg-dark text-white w-25">HOUSE ID</th>
                    <th className="bg-dark text-white w-25">LOCATION</th>
                    <th className="bg-dark text-white w-25">BEDROOM</th>
                    <th className="bg-dark text-white w-25">RENT</th>
                    <th className="bg-dark text-white w-25">PARKING</th>
                    <th className="bg-dark text-white w-25">OWNER NAME</th>
                  </tr>
                </thead>
                <tbody>
                  {recordData.map((d, i) => (
                    <tr key={i}>
                      <td>{d.houseId}</td>
                      <td>{d.location}</td>
                      <td>{d.bedroom}</td>
                      <td>{d.rent}</td>
                      <td>{d.parking}</td>

                      <td>
                        {d.owner !== null ? d.owner.ownerName : "Not Assigned"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
