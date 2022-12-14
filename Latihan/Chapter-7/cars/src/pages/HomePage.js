import "./App.css";

import { useState, useEffect } from "react";
import Car from "../components/Car";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [carsState, setCarsState] = useState([]);
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(0);
  const [year, setYear] = useState(0);

  useEffect(() => {
    const getListCars = async () => {
      const response = await axios.get(
        "http://localhost:2000/api/v1/car/getall"
      );
      console.log(response);
      setCarsState(response.data.data.get_cars);
    };
    getListCars();
  }, []);

  const navigate = useNavigate();

  const nameEventHandler = (event) => {
    setName(event.target.value);
  };

  const priceEventHandler = (event) => {
    setPrice(event.target.value);
  };

  const yearEventHandler = (event) => {
    setYear(event.target.value);
  };

  const imageURLEventHandler = (event) => {
    setImageURL(event.target.value);
  };

  const addCarEventHandler = (event) => {
    event.preventDefault();

    if (name && price && year && imageURL) {
      const newCar = {
        name: name,
        price: price,
        year: year,
        imageURL: imageURL,
      };

      setCarsState([...carsState, newCar]);
    }
  };

  const logoutHandler = (event) => {
    event.preventDefault();

    localStorage.removeItem("user_token");
    navigate("/login");
  };

  return (
    <div className="App">
      <button onClick={(event) => logoutHandler(event)}>Logout</button>
      {carsState.map((car) => (
        <Car car={car} />
      ))}

      <form>
        <input
          placeholder="Name"
          onChange={(event) => nameEventHandler(event)}
        />
        <input
          type="number"
          placeholder="1000000"
          onChange={(event) => priceEventHandler(event)}
        />
        <input
          type="number"
          placeholder="Year 1999"
          onChange={(event) => yearEventHandler(event)}
        />
        <input
          placeholder="Image URL"
          onChange={(event) => imageURLEventHandler(event)}
        />
        <button onClick={(event) => addCarEventHandler(event)}>
          Tambah Car
        </button>
      </form>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
