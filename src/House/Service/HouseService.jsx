import axios from "axios";
import React, { Component } from "react";

const getHouseList = "http://localhost:8055/api/house";
const deleteHouse = "http://localhost:8055/api/house?houseId=";
const updateHouse = "http://localhost:8055/api/house";
const addHouse = "http://localhost:8055/api/house";
const ownerIdList = "http://localhost:8055/api/owner/getIdList";
const findbyId = "http://localhost:8016/api/employee/findById?employeeId=";
const locationList = "http://localhost:8055/api/house/locationList";
const findByID = "http://localhost:8055/api/house/findById?id=";
const rentList = "http://localhost:8055/api/house/rentList";
const bedroomList = "http://localhost:8055/api/house/bedRoomList";

export class HouseService extends Component {
  getlocationList() {
    return axios.get(locationList);
  }

  getRentList() {
    return axios.get(rentList);
  }

  getRentList() {
    return axios.get(rentList);
  }

  getBedRoomList() {
    return axios.get(bedroomList);
  }

  getHouseList() {
    return axios.get(getHouseList);
  }

  deleteHouse(id) {
    return axios.delete(deleteHouse + id);
  }

  putHouse(data) {
    return axios.put(updateHouse, data);
  }

  addHouse(data) {
    return axios.post(addHouse, data);
  }

  ownerIdList() {
    return axios.get(ownerIdList);
  }

  findEmployeebyId(id) {
    console.log(id);

    return axios.get(findByID + id);
  }
}

export default new HouseService();
