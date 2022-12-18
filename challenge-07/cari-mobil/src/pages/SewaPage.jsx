// Dependencies
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

// Components
import Cars from "../components/Cars";
import NavigationBar from "../components/NavigationBar";
import MainSectionLandingPage from "../components/MainSectionLandingPage";

export default function SewaPage() {
  const [cars, setCars] = useState([]);
  // const [driver, setCars] = useState([]);

  useEffect(() => {
    const getListCars = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      console.log(Object.keys(response.data));
      setCars(response.data);
    };
    getListCars();
  }, []);

  return (
    <div className="SewaPage">
      <NavigationBar />
      <MainSectionLandingPage />
      <Container className="p-2">
        <Form>
          <Row>
            <Col>
              <p>Tipe Driver</p>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Dengan Sopir</option>
                <option>{`Tanpa Sopir (Lepas Kunci)`}</option>
              </Form.Select>
            </Col>
            <Col>
              <p>Tanggal</p>
              <Form.Control type="date" placeholder="Last name" />
            </Col>
            <Col>
              <p>Waktu Jemput/Ambil</p>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>{"08.00 WIB"}</option>
                <option>{"09.00 WIB"}</option>
                <option>{"10.00 WIB"}</option>
                <option>{"11.00 WIB"}</option>
                <option>{"12.00 WIB"}</option>
                <option>{"13.00 WIB"}</option>
                <option>{"14.00 WIB"}</option>
                <option>{"15.00 WIB"}</option>
                <option>{"16.00 WIB"}</option>
              </Form.Select>
            </Col>
            <Col>
              <p>{"Jumlah Penumpang (optional)"}</p>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
        </Form>
        <Row xs={3} className="">
          {cars.map((car) => (
            <Cars car={car} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
