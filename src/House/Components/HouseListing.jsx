import React from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Modal from "react-bootstrap/Modal";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import HouseService from "../Service/HouseService";

const HouseListing = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = useState({
    houseId: "",
    location: "",
    bedroom: "",
    rent: 0.0,
    parking: "",
    owner: {
      ownerId: "",
      ownerName: "",
      address: "",
      phone: "",
      email: "",
    },
  });

  const [show, setShow] = useState(false);

  const handleVClose = () => setShow(false);

  const handleShow = (id) => {};

  useEffect(() => {
    loadData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loadData = async () => {
    await HouseService.getHouseList()
      .then((res) => {
        console.log(res.data);
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div id="EmpList" className="container-fluid">
        <div className="card mt-5">
          <div className="card-title mt-5">
            <h2>House Details Listing</h2>
            <div className="text-end  pe-4 pt-3">
              <Link
                to="/addhouse"
                data-testId="homedetails"
                className="btn btn-success "
              >
                Add House
              </Link>
            </div>
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
                  <th colSpan={3} className="bg-dark text-white w-50">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((d, i) => (
                  <tr key={i}>
                    <td>{d.houseId}</td>
                    <td>{d.location}</td>
                    <td>{d.bedroom}</td>
                    <td>{d.rent}</td>
                    <td>{d.parking}</td>

                    <td>
                      {d.owner !== null ? d.owner.ownerName : "Not Assigned"}
                    </td>
                    <td>
                      <Link
                        to={`/update/${d.houseId}`}
                        className="btn btn-success  me-2"
                      >
                        Update
                      </Link>
                    </td>
                    <td>
                      <div>
                        <React.Fragment>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={handleClickOpen}
                          >
                            Delete
                          </Button>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Are you sure to delete this record?"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Once you Delete the Record You Can't recover
                                again, make sure before proceeding!
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                color="success"
                                variant="contained"
                                onClick={handleClose}
                              >
                                Disagree
                              </Button>
                              <Button
                                variant="contained"
                                color="error"
                                type="submit"
                                onClick={(e) => {
                                  e.preventDefault();
                                  console.log(d.houseId);
                                  HouseService.deleteHouse(d.houseId)
                                    .then((res) => {
                                      console.log(res.data);
                                      handleClose();
                                      loadData();
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                                autoFocus
                              >
                                Agree
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </React.Fragment>
                      </div>
                    </td>

                    <td>
                      {/* <!-- Trigger the modal with a button --> */}
                      <Button
                        variant="contained"
                        className="btn btn-info"
                        onClick={(e) => {
                          e.preventDefault();
                          HouseService.findEmployeebyId(d.houseId)
                            .then((res) => {
                              setValue(res.data);
                              console.log(res.data);
                            })
                            .catch((err) =>
                              console.log("Error in getting data")
                            );
                          setShow(true);
                        }}
                      >
                        view
                      </Button>

                      <Modal
                        show={show}
                        onHide={handleVClose}
                        className="h-100 w-100"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Table View</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <table class="table table-bordered table-hover table-striped h-100 w-100">
                            <thead>
                              <th className="bg-dark text-white ">Id</th>
                              <th className="bg-dark text-white">Location</th>
                              <th className="bg-dark text-white">BedRoom</th>
                              <th className="bg-dark text-white">Rent</th>
                              <th className="bg-dark text-white">Parking</th>
                              <th className="bg-dark text-white">Owner Name</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{value.houseId}</td>
                                <td>{value.location}</td>
                                <td>{value.bedroom}</td>
                                <td>{value.rent}</td>
                                <td>{value.parking}</td>

                                <td>
                                  {value.owner !== null
                                    ? value.owner.ownerName
                                    : "Not Assigned"}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseListing;
