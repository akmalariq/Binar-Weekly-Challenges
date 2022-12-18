// Dependencies
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card';

export default function WhyUsSectionLandingPage() {
  return (
      <div className="WhyUsSectionLandingPage">
          <Container className="my-2 my-lg-5 py-lg-5">
            <h4 className="fw-bold text-center text-lg-start">Why Us?</h4>
            <p className="my-3 my-lg-4 text-center text-lg-start">Mengapa harus pilih Binar Car Rental?</p>
            <Row xs={1} lg={4} className="my-3 my-lg-4 py-lg-3 px-2 gap-3 gap-lg-0">
                <Col className="px-lg-4">
                      <Card className="h-100">
                          <Card.Body>
                            <img src={require("../assets/icon_complete.png")} alt="icon_complete"/>
                            <Card.Title>Mobil Lengkap</Card.Title>
                            <Card.Text>
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                            </Card.Text>
                          </Card.Body>
                    </Card>
                </Col>
                <Col className="px-lg-4">
                      <Card className="h-100">
                          <Card.Body>
                            <img src={require("../assets/icon_price.png")} alt="icon_price"/>
                            <Card.Title>Harga Murah</Card.Title>
                            <Card.Text>
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                            </Card.Text>
                          </Card.Body>
                    </Card>
                </Col>
                <Col className="px-lg-4">
                      <Card className="h-100">
                          <Card.Body>
                            <img src={require("../assets/icon_24hrs.png")} alt="icon_24hrs"/>
                            <Card.Title>Layanan 24 Jam</Card.Title>
                            <Card.Text>
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                            </Card.Text>
                          </Card.Body>
                    </Card>
                </Col>
                <Col className="px-lg-4">
                      <Card className="h-100">
                          <Card.Body>
                            <img src={require("../assets/icon_professional.png")} alt="icon_professional"/>
                            <Card.Title>Sopir Profesional</Card.Title>
                            <Card.Text>
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                            </Card.Text>
                          </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Container>
    </div>
  );
}
