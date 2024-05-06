import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        {/* <!-- Home Page --> */}

        <div id="home" class="jumbotron jumbotron-fluid bg-light text-dark ">
          <div class="container">
            <h5 class="display-5 fw-bold mt-2  mb-3">
              Welcome to the House Rental App!
            </h5>
            <p class="lead my-2"></p>
            <hr class="my-4" />
            <div class="row gx-5 gy-5">
              <div class="col-md-6 col-lg-4 d-none d-sm-block">
                <img
                  src="https://media1.giphy.com/media/UqqVRaP8y4uo1GNxbN/giphy.gif"
                  alt=""
                  width="80%"
                  height="auto"
                  id="pic"
                />
              </div>
              <div class="col-md-6 col-lg-8">
                <h2 class="fw-bolder mb-2">About Us</h2>
                <p
                  class="mb-4
                    lead"
                >
                  The House Rental App ! is a web application that allows users
                  to search for House Details, add them to their details and
                  manulate them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Advertaicement  Section --> */}
        <section class="py-5 bg-light">
          <div class="container p-0">
            <div class="row flex-center">
              <div class="card  w-75 shadow-sm">
                <div id="carouselExampleIndicators" class="carousel slide">
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        id="mySlides"
                        src={
                          "https://assets-global.website-files.com/5ed52ac6f155f416aff0df23/5f5aab0918298c5d0ee5fead_rental-property-terms-property-management.jpg"
                        }
                        class="d-block w-100"
                        alt={"..."}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        id="mySlides"
                        src={
                          "https://planomagazine.com/wp-content/uploads/2017/09/Saravanna-Bhavan-Feature-Plano-Magazine-2.png"
                        }
                        class="d-block w-100"
                        alt={"..."}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        id="mySlides"
                        src="https://i.pinimg.com/originals/71/66/45/716645ce546cf567f8ac2e7c80a85c8d.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                  {/* <!-- aside  content--> */}
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="w-100 ms-auto p-4">
                      <h5 class="text-start text-muted fst-italic mb-4 ">
                        Our Moto
                      </h5>
                      <h5 class="text-start  text-primary fw-bold ">
                        To Simplify the All the House Rental management System
                        work, We do our Job try our level best !
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--  Footer Section --> */}
        <footer class="bg-dark  bg-opacity-2 text-white py-2">
          <div class="container">
            <div class="flex-center flex-column">
              <p class="text-center form-control-lg ">
                &copy; Copyright 2024 - Prasanth Baskaran
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
