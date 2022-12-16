// Dependencies
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import Cars from "../components/Cars";
import NavigationBar from "../components/NavigationBar";
import MainSectionLandingPage from "../components/MainSectionLandingPage";
import OurServiceSectionLandingPage from "../components/OurServiceSectionLandingPage";
import WhyUsSectionLandingPage from "../components/WhyUsSectionLandingPage";
import TestimonialSectionLandingPage from "../components/TestimonialSectionLandingPage";

export default function LandingPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getListCars = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      console.log(Object.keys(response.data[0]));
      setCars(response.data);
    };
    getListCars();
  }, []);

  return (
    <div className="LandingPage">
      <NavigationBar />
      <MainSectionLandingPage />
      <OurServiceSectionLandingPage />
      <WhyUsSectionLandingPage />
      <TestimonialSectionLandingPage />
      <header className="LandingPage-header">
        {/* START MAIN SECTION */}
        {/* <div
          class="container-fluid px-0"
          style={{ background: "#F1F3FF", paddingTop: "15vh" }}
        >
          <div class="container-fluid" style={{ maxHeight: "500px" }}>
            <div class="row align-items-center">
              <div class="col-6">
                <div class="row">
                  <div class="col-2">
                    <br />
                  </div>
                  <div class="col-10">
                    <h1 class="fw-bold">
                      Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                    </h1>
                    <div class="row">
                      <div class="col-10 mt-2">
                        <p>
                          Selamat datang di Binar Car Rental. Kami menyediakan
                          mobil kualitas terbaik dengan harga terjangkau. Selalu
                          siap melayani kebutuhanmu untuk sewa mobil selama 24
                          jam.
                        </p>
                      </div>
                      <div class="col-2">
                        <br />
                      </div>
                    </div>
                    <button
                      class="btn text-white"
                      style={{ backgroundColor: "#5CB85F" }}
                      href="#"
                    >
                      Mulai Sewa Mobil
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-6 p-0">
                <img
                  src={require("../asset/img_car.png")}
                  alt="img_car"
                  class="w-100"
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* END MAIN SECTION */}
        {/* START MAIN SECTION */}
        <h1>Landing Page</h1>
        {cars.map((car) => (
          <Cars car={car} />
        ))}
      </header>
    </div>
  );
}
