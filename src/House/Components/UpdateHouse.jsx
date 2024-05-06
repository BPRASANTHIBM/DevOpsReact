import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import axios from "axios";
import "./../../App1.css";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import HouseService from "../Service/HouseService";

const UpdateHouse = () => {
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
  return (
    <div>
      
    </div>
  )
}

export default UpdateHouse
