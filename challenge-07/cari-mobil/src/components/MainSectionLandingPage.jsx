// Dependencies
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MainSectionLandingPage() {
  return (
    <div className="MainSectionLandingPage">
      <Container fluid className="my-5">
        <Row xs={1} lg={2} className="align-items-center ps-lg-5">
          <Col className="mb-1 ps-lg-5">
            <h1 className="fw-bold" style={{ fontSize: "36px" }}>
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <Col lg={8}>
              <p style={{ fontSize: "14px" }}>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </Col>
            <a
              className="btn text-white rounded-1"
              style={{ backgroundColor: "#5CB85F" }}
              href="/"
            >
              Mulai Sewa Mobil
            </a>
          </Col>
          <Col className="mt-4 pe-0">
            <img
              src={require("../assets/img_car.png")}
              alt="img_car"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
