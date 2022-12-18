// Dependencies
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export default function OurServiceSectionLandingPage() {
  return (
    <div className="OurServiceSectionLandingPage">
      <Container fluid className="mt-5 my-lg-5 py-5" id="ourservices">
        <Row xs={1} lg={3} className="align-items-center">
          <Col lg={1} className="d-none d-lg-block">
            <br />
          </Col>
          <Col lg={5}>
            <img
              src={require("../assets/img_service.png")}
              alt="img_service.png"
              className="px-lg-5 w-100"
            />
          </Col>
          <Col className="mt-4 ps-lg-5">
            <h1 className="fw-bold" style={{ fontSize: "24px" }}>
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h1>
            <p style={{ fontSize: "14px" }}>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ListGroup
              style={{
                listStyleType: "none",
                verticalAlign: "middle",
                paddingLeft: "0%",
                fontSize: "14px",
              }}
            >
              <ListGroup.Item>
                <p>
                  <span
                    style={{
                      marginRight: "16px",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <img
                      src={require("../assets/circle.png")}
                      alt="circle.png"
                    />
                  </span>
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  <span
                    style={{
                      marginRight: "16px",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <img
                      src={require("../assets/circle.png")}
                      alt="circle.png"
                    />
                  </span>
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  <span
                    style={{
                      marginRight: "16px",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <img
                      src={require("../assets/circle.png")}
                      alt="circle.png"
                    />
                  </span>
                  Sewa Mobil Jangka Panjang Bulanan
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  <span
                    style={{
                      marginRight: "16px",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <img
                      src={require("../assets/circle.png")}
                      alt="circle.png"
                    />
                  </span>
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  <span
                    style={{
                      marginRight: "16px",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <img
                      src={require("../assets/circle.png")}
                      alt="circle.png"
                    />
                  </span>
                  Layanan Airport Transfer / Drop In Out
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
