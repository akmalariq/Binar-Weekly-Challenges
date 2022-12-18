// Dependencies
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

export default function GettingStartedSectionLandingPage() {
  return (
      <div className="GettingStartedSectionLandingPage">
          
        <Container className="text-center text-white my-5 py-3 px-lg-0">
            <Col className="rounded-3 py-5 px-5" style={{backgroundColor: "#0D28A6"}}>
                <Col className="my-3">
                    <h1 className="fw-bold mx-4 mx-lg-0">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p className="my-lg-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a className="btn text-white my-3 my-lg-4" href="/" role="button" style={{backgroundColor: "#5CB85F"}}>Mulai
                        Sewa Mobil
                    </a>
                </Col>
            </Col>
        </Container>

    </div>
  );
}
