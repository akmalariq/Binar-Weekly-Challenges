import './App.css';

import { useState, useEffect } from 'react'
import Car from '../components/Car' 
import axios from 'axios';

// const cars = axios.get('http://localhost:3000/api/v1/car/getall')


// const cars = [
//   {
//     name: 'vw kodok',
//     price: 5e8,
//     imageURL: "https://asset.kompas.com/crops/BVvzl4dmOOrUiwXkurymtyTmJPw=/0x0:780x390/750x500/data/photo/2017/01/31/1837461Volkswagen780x390.jpg",
//     year: 2005
//   },
//   {
//     name: 'fortuner',
//     price: 5e8,
//     imageURL: 'https://www.toyota.astra.co.id/sites/default/files/2022-08/1%20fortuner%20gr%202022%20platinum%20white%20pearl%20-%20attitude%20black.png',
//     year: 2006
//   },
//   {
//     name: 'avanza',
//     price: 5e8,
//     imageURL: 'https://www.toyota.astra.co.id/sites/default/files/2021-11/2-avanza-gray-metallic.png',
//     year: 2007
//   }
// ]

function App() {
  const [carsState, setCarsState] = useState([])
  const [name, setName] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [price, setPrice] = useState(0)
  const [year, setYear] = useState(0)
  useEffect(() => {
    const getListCars = async () => {
      const response = await axios.get('http://localhost:2000/api/v1/car/getall')
      console.log(response)
      setCarsState(response.data.data.get_cars)
    }
    getListCars()
  }, [])
  

  const nameEventHandler = (event) => {
    setName(event.target.value)
  }
  
  const priceEventHandler = (event) => {
    setPrice(event.target.value)
  }
  
  const yearEventHandler = (event) => {
    setYear(event.target.value)
  }

  const imageURLEventHandler = (event) => {
    setImageURL(event.target.value)
  }

  const addCarEventHandler = (event) => {
    event.preventDefault()

    if (name && price && year && imageURL) {
      const newCar = {
        name: name,
        price: price,
        year: year,
        imageURL:imageURL
      }

      setCarsState([...carsState, newCar])
    }
  }

  return (
    <div className="App">
      <h1>Cars</h1>
      {
        carsState.map(car => <Car car={car} />)
      }
      
      <form>
        <input placeholder="Name" onChange={(event) => nameEventHandler(event)} />
        <input type="number" placeholder="1000000" onChange={(event) => priceEventHandler(event)} />
        <input type="number" placeholder="Year 1999" onChange={(event) => yearEventHandler(event)} />
        <input placeholder="Image URL" onChange={(event) => imageURLEventHandler(event)} />
        <button onClick={(event) => addCarEventHandler(event)}>Tambah Car</button>
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

export default App;
