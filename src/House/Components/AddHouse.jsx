import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import "./../../App1.css";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import HouseService from "../Service/HouseService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddHouse = () => {
  const [valid, setValid] = useState(false);
  const [desvalid, setDesValid] = useState(false);
  const [acvalid, setAcValid] = useState(false);
  const [leave, setLeave] = useState(false);
  const [day, setDay] = useState(false);
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    houseId: "",
    location: "",
    bedroom: "",
    rent: 0.0,
    parking: "",
    owner: {
      ownerId: "",
    },
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await HouseService.ownerIdList();
      setRecords(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    window.location.href = "/house";
  };

  const handleSubmit = (e) => {
    console.log("handlesubmit");
    e.preventDefault();
    let result = JSON.stringify(inputData);
    console.log(result);

    if (result != null) {
      try {
        const res = HouseService.addHouse(inputData);

        Swal.fire({
          title: "House Details Added Successfully!",
          text: "Click to Main Page!",
          icon: "success",
        });

        console.log(res.data);
        navigate("/house");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("House Data is Not Added Successfully");
    }
  };

  let handleChange = (e) => {
    if (e.target.name === "ownerId") {
      setInputData({ ...inputData, owner: { ownerId: e.target.value } });
    } else {
      console.log("handleChange");
      setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <div className="AddEmployee">
        <div className="d-flex justify-content-center  mt-5">
          <div className="w-50 bg-light border shadow  p-3 rounded">
            <form onSubmit={handleSubmit}>
              <h2>Add House's Data</h2>

              <TextField
                name="location"
                sx={{ width: 300, mt: 2 }}
                label="Location"
                variant="outlined"
                value={inputData.location}
                id="location"
                onBlur={(e) => {
                  inputData.location === "" ? setValid(true) : setValid(false);
                }}
                onChange={handleChange}
                error={valid}
                placeholder="Enter Location Name"
                helperText={valid ? "Please Enter a Location Name" : null}
                required={true}
              />
              <br />
              <br />
              <TextField
                name="bedroom"
                sx={{ width: 300 }}
                label="BedRoom"
                variant="outlined"
                value={inputData.bedroom}
                id="bedroom"
                onBlur={(e) => {
                  inputData.bedroom === ""
                    ? setDesValid(true)
                    : setDesValid(false);
                }}
                onChange={handleChange}
                error={desvalid}
                placeholder="Enter Number of BedRoom"
                helperText={desvalid ? "Please Enter a No of BedRoom" : null}
                required={true}
              />

              <br />
              <br />
              <TextField
                sx={{ width: 300 }}
                name="rent"
                label="Rent"
                variant="outlined"
                value={inputData.rent}
                id="rent"
                type="number"
                onBlur={(e) => {
                  inputData.rent <= 0 ? setAcValid(true) : setAcValid(false);
                }}
                onChange={handleChange}
                error={acvalid}
                placeholder="Enter Rent Details"
                helperText={acvalid ? "Please Enter a Valid Rent Details" : null}
                required={true}
              />

              <br />
              <br />
              <TextField
                sx={{ width: 300 }}
                name="parking"
                label="Parking"
                variant="outlined"
                value={inputData.parking}
                id="parking"
                onBlur={(e) => {
                  inputData.parking === "" ? setLeave(true) : setLeave(false);
                }}
                onChange={handleChange}
                error={leave}
                placeholder="Enter Parking Details"
                helperText={leave ? "Please Enter a Parking Details" : null}
                required={true}
              />

              <br />
              <br />
              <center>
                <div className="form-floating mb-3 w-50 mx-5">
                  <select
                    class="form-select"
                    required="required"
                    name="ownerId"
                    title="select Enter a name"
                    onChange={handleChange}
                  >
                    <option name="ownerId" selected="selected">
                      Select One
                    </option>
                    {records.map((items) => (
                      <option value={items} key={items}>
                        {items}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="ownerId">Owner Id</label>
                </div>
              </center>
              <button
                type="submit"
                className="me-2 btn btn-success align-content-center"
                id="submit btn"
              >
                Submit
              </button>
              <span>
                <a className="me-2 btn btn-warning" onClick={handleClick}>
                  Back
                </a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHouse;
