import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../../index1.css";

const Nav = () => {
  const [records, setRecords] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                House Rental Management System
              </a>

              <button
                class="navbar-toggler"
                type="button"
                role="Toggle-Button"
                data-testid="navbar-testId"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-expanded="false"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="navbar" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <a
                      title="Home page Move link"
                      className="nav-link"
                      onClick={() => (window.location.href = "/")}
                    >
                      Home
                    </a>
                  </li>
                </ul>

                <Link className="btn" to={`/house`}>
                  House Details
                </Link>
                <Link className="btn" to={`/search`}>
                  Search House
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
