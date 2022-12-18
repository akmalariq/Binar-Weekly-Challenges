// Dependencies
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import Cars from "../components/Cars";
import NavigationBar from "../components/NavigationBar";
import MainSectionLandingPage from "../components/MainSectionLandingPage";

export default function SewaPage() {
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
    <div className="SewaPage">
      <NavigationBar />
      <MainSectionLandingPage />
      {cars.map((car) => (
        <Cars car={car} />
      ))}
    </div>
  );
}
