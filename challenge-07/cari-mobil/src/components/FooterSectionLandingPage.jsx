// Dependencies
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FooterSectionLandingPage() {
  return (
    <div className="FooterSectionLandingPage">
      <Container>
        <Row>
          <Col>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col>
            <p class="fw-semibold">Our services</p>
            <p class="fw-semibold">Why Us</p>
            <p class="fw-semibold">Testimonial</p>
            <p class="fw-semibold">FAQ</p>
          </Col>
          <Col>
            <p>Connect with us</p>
            <img
              src={require("../assets/icon_facebook.png")}
              alt="icon_facebook"
              style={{ height: "32px", width: "32px", marginRight: "8px" }}
            />
            <img
              src={require("../assets/icon_instagram.png")}
              alt="icon_instagram"
              style={{ height: "32px", width: "32px", marginRight: "8px" }}
            />
            <img
              src={require("../assets/icon_twitter.png")}
              alt="icon_twitter"
              style={{ height: "32px", width: "32px", marginRight: "8px" }}
            />
            <img
              src={require("../assets/icon_mail.png")}
              alt="icon_mail"
              style={{ height: "32px", width: "32px", marginRight: "8px" }}
            />
            <img
              src={require("../assets/icon_twitch.png")}
              alt="icon_twitch"
              style={{ height: "32px", width: "32px", marginRight: "8px" }}
            />
          </Col>
          <Col>
            <p>Copyright Binar 2022</p>
            <div
              style={{ width: "100px", height: "34px", background: "#0D28A6" }}
            ></div>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
