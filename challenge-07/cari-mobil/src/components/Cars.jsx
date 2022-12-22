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
  });

  let {
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    availableAt,
    year,
  } = car;

  rentPerDay = currencyFormatter.format(rentPerDay);

  return (
    <Col className="d-flex justify-content-center">
      <Card style={{ width: "24vw" }}>
        <Card.Img
          variant="top"
          src={require(`../assets/images${image.slice(8)}`)}
          alt={image}
          style={{
            height: "24vh",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Text>{`${manufacture} ${model}`}</Card.Text>
          <Card.Title>{`Rp${rentPerDay.slice(4)} / Hari`}</Card.Title>
          <Card.Text style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
            {description}
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
          <Col className="m-1 px-0">
            <Card.Text>
              {`
                available at: ${new Date(availableAt).getDate()}-
                              ${new Date(availableAt).getMonth() + 1}-
                              ${new Date(availableAt).getFullYear()} 
                              ${new Date(availableAt).getHours()}:
                              ${new Date(availableAt).getMinutes()}
              `}
            </Card.Text>
            <Card.Text>{`${
              available ? "is available" : "not available"
            }`}</Card.Text>
          </Col>
          <Button variant="success">Pilih Mobil</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
