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
  const [capacity, setCapacity] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function dateEventHandler(e) {
    const val = e.target.value;
    setDate(val);
  }

  function timeEventHandler(e) {
    const val = e.target.value;
    setTime(val);
  }

  function capacityEventHandler(e) {
    const val = e.target.value;
    setCapacity(val);
  }

  useEffect(() => {
    const getListCars = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      let result = response.data.filter((data) => {
        if (date === "") {
          if (time !== "") {
            const currentDate = new Date();
            return (
              Date.parse(new Date(data.availableAt)) <=
              Date.parse(
                new Date(
                  currentDate.getFullyear(),
                  currentDate.getMonth(),
                  currentDate.getDate(),
                  time.slice(0, 2),
                  time.slice(3)
                )
              )
            );
          } else {
            return (
              Date.parse(new Date(data.availableAt)) <= Date.parse(new Date())
            );
          }
        } else {
          if (time === "") {
            return (
              Date.parse(new Date(data.availableAt)) <=
              Date.parse(
                new Date(
                  date.slice(0, 4),
                  date.slice(5, 7),
                  date.slice(8),
                  0,
                  0
                )
              )
            );
          } else {
            return (
              Date.parse(new Date(data.availableAt)) <=
              Date.parse(
                new Date(
                  date.slice(0, 4),
                  date.slice(5, 7),
                  date.slice(8),
                  time.slice(0, 2),
                  time.slice(3)
                )
              )
            );
          }
        }
      });
      result = result.filter((data) => {
        if (parseInt(capacity) !== 0) {
          return data.capacity === parseInt(capacity);
        }
        return data;
      });
      console.log(result);
      console.log(response.data);
      setCars(result);
    };
    getListCars();
  }, [date, time, capacity]);

  return (
    <div className="SewaPage">
      <NavigationBar />
      <MainSectionLandingPage />
      <Container>
        <Form>
          <Row>
            <Col>
              <p>Tipe Driver</p>
              <Form.Select defaultValue="Choose...">
                <option value={0}>Choose...</option>
                <option value={1}>Dengan Sopir</option>
                <option value={2}>{`Tanpa Sopir (Lepas Kunci)`}</option>
              </Form.Select>
            </Col>
            <Col>
              <p>Tanggal</p>
              <Form.Control
                type="date"
                onChange={(e) => {
                  dateEventHandler(e);
                }}
              />
            </Col>
            <Col>
              <p>Waktu Jemput/Ambil</p>
              <Form.Select
                onChange={(e) => {
                  timeEventHandler(e);
                }}
              >
                <option>Choose...</option>
                <option value={"08.00"}>{"08.00 WIB"}</option>
                <option value={"09.00"}>{"09.00 WIB"}</option>
                <option value={"10.00"}>{"10.00 WIB"}</option>
                <option value={"11.00"}>{"11.00 WIB"}</option>
                <option value={"12.00"}>{"12.00 WIB"}</option>
                <option value={"13.00"}>{"13.00 WIB"}</option>
                <option value={"14.00"}>{"14.00 WIB"}</option>
                <option value={"15.00"}>{"15.00 WIB"}</option>
                <option value={"16.00"}>{"16.00 WIB"}</option>
              </Form.Select>
            </Col>
            <Col>
              <p>{"Jumlah Penumpang (optional)"}</p>
              <Form.Select
                defaultValue={0}
                onChange={(e) => {
                  capacityEventHandler(e);
                }}
              >
                <option value={0}>All</option>
                <option value={2}>{2}</option>
                <option value={4}>{4}</option>
                <option value={6}>{6}</option>
              </Form.Select>
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
