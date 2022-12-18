// Dependencies
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Car({ car }) {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  let {
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = car;

  rentPerDay = currencyFormatter.format(rentPerDay);

  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt={`car_${id}`} />
        <Card.Body>
          <Card.Text>{`${manufacture} ${model}`}</Card.Text>
          <Card.Title>{`Rp${rentPerDay.slice(4)} / Hari`}</Card.Title>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            accusamus, reprehenderit, aspernatur modi beatae laboriosam sunt
            quas vel maiores aliquam dolor, hic tempora ratione dicta quidem ea.
            Et, nemo corrupti!
          </Card.Text>
          <Row className="px-2">
            <Col xs={1} className="m-1 px-0">
              <img src={require("../assets/fi_users.png")} alt="fi_users" />
            </Col>
            <Col className="m-1 px-0">
              <Card.Text>{`${capacity} Orang`}</Card.Text>
            </Col>
          </Row>
          <Row className="px-2">
            <Col xs={1} className="m-1 px-0">
              <img
                src={require("../assets/fi_settings.png")}
                alt="fi_settings"
              />
            </Col>
            <Col className="m-1 px-0">
              <Card.Text>{transmission}</Card.Text>
            </Col>
          </Row>
          <Row className="px-2">
            <Col xs={1} className="m-1 px-0">
              <img
                src={require("../assets/fi_calendar.png")}
                alt="fi_calendar"
              />
            </Col>
            <Col className="m-1 px-0">
              <Card.Text>{year}</Card.Text>
            </Col>
          </Row>
          <Button variant="success">Pilih Mobil</Button>
        </Card.Body>
      </Card>
      <p>
        id: {id} <br />
        plate: {plate} <br />
        manufacture: {manufacture} <br />
        image: {image} <br />
        rentPerDay: {rentPerDay} <br />
        capacity: {capacity} <br />
        description: {description} <br />
        availableAt: {availableAt} <br />
        transmission: {transmission} <br />
        available: {available} <br />
        type: {type} <br />
        year: {year} <br />
        options: {options} <br />
        specs: {specs} <br />
      </p>
      <br />
    </Col>
  );
}
