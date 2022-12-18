// Dependencies
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card';

export default function TestimonialSectionLandingPage() {
  return (
      <div className="TestimonialSectionLandingPage">
          
          <Container fluid className="text-center my-5" id="testimony">
            <h4 className="fw-bold w-auto">Testimonial</h4>
            <p className="mt-3">Berbagai review positif dari para pelanggan kami</p>

            {/* <!-- START CARD DESKTOP --> */}
            <div className="d-none d-lg-block" style={{margin: "40px -200px 0 -200px"}}>
                <Row className="justify-content-around">
                      <Card className="border-0 item px-lg-4" style={{background: "#F1F3FF"}}>
                          <Card.Body className="align-items-center d-flex  my-lg-4">
                              <Row className="align-items-center">
                                <Col xs={3} className="p-0">
                                    <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="First slide"
                                        style={{width: "80px", height:"80px"}} className="rounded-circle mx-lg-auto"/>
                                </Col>
                                <Col className="text-start">
                                    <Col lg={3}>
                                        <img src={require("../assets/rate.png")} alt="rate" className="w-100 pe-lg-3"/>
                                    </Col>
                                    <p>
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem atque
                                        exercitationem,
                                        mollitia possimus vitae nobis ut sapiente inventore minus nam neque impedit at
                                        facere
                                        dolorum consequatur, saepe minima quasi!"
                                    </p>
                                    <p className="fw-bold">
                                        John Dee 32, Bromo
                                    </p>
                                </Col>  
                              </Row>
                          </Card.Body>
                      </Card>
                      <Card className="border-0 item px-lg-4" style={{background: "#F1F3FF"}}>
                          <Card.Body className="align-items-center d-flex  my-lg-4">
                              <Row className="align-items-center">
                                <Col xs={3} className="p-0">
                                    <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Second slide"
                                        style={{width: "80px", height:"80px"}} className="rounded-circle mx-lg-auto"/>
                                </Col>
                                <Col className="text-start">
                                    <Col lg={3}>
                                        <img src={require("../assets/rate.png")} alt="rate" className="w-100 pe-lg-3"/>
                                    </Col>
                                    <p>
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem atque
                                        exercitationem,
                                        mollitia possimus vitae nobis ut sapiente inventore minus nam neque impedit at
                                        facere
                                        dolorum consequatur, saepe minima quasi!"
                                    </p>
                                    <p className="fw-bold">
                                        John Dee 32, Bromo
                                    </p>
                                </Col>  
                              </Row>
                          </Card.Body>
                      </Card>
                      <Card className="border-0 item px-lg-4" style={{background: "#F1F3FF"}}>
                          <Card.Body className="align-items-center d-flex  my-lg-4">
                              <Row className="align-items-center">
                                <Col xs={3} className="p-0">
                                    <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Third slide"
                                        style={{width: "80px", height:"80px"}} className="rounded-circle mx-lg-auto"/>
                                </Col>
                                <Col className="text-start">
                                    <Col lg={3}>
                                        <img src={require("../assets/rate.png")} alt="rate" className="w-100 pe-lg-3"/>
                                    </Col>
                                    <p>
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem atque
                                        exercitationem,
                                        mollitia possimus vitae nobis ut sapiente inventore minus nam neque impedit at
                                        facere
                                        dolorum consequatur, saepe minima quasi!"
                                    </p>
                                    <p className="fw-bold">
                                        John Dee 32, Bromo
                                    </p>
                                </Col>  
                              </Row>
                          </Card.Body>
                      </Card>
                </Row>
            </div>
            {/* <!-- END CARD DESKTOP --> */}  

            {/* <!-- START CARD MOBILE --> */}
            <div className="d-block d-lg-none">
                <Card className="border-0" style={{background: "#F1F3FF"}}>
                    <Card.Body>
                        <Col style={{marginTop: "60px"}}>
                            <img
                                src="https://randomuser.me/api/portraits/women/1.jpg"
                                alt="profie_pic"
                                style={{ width: "80px", height: "80px" }}
                                className="rounded-circle"
                            />
                        </Col>
                        <Col style={{marginTop: "24px"}}>
                            <img
                                src={require("../assets/rate.png")}
                                alt="rate"
                            />
                        </Col>
                          <Col className="text-start px-2" style={{ marginTop: "24px" }}>
                            <p>
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem atque
                                exercitationem,
                                mollitia possimus vitae nobis ut sapiente inventore minus nam neque impedit at
                                facere
                                dolorum consequatur, saepe minima quasi!"
                            </p>
                            <p className="fw-bold">
                                John Dee 32, Bromo
                            </p>
                        </Col>
                    </Card.Body>
                </Card>
            </div>
            {/* <!-- END CARD MOBILE --> */}

            <Row xs={2} className="justify-content-center mt-5">
                <Col xs={2} lg={1} className="d-flex justify-content-end">
                    <img src={require("../assets/left_button.png")} alt="left_button" style={{height: "100%"}}/>
                </Col>
                <Col xs={2} lg={1} className="d-flex justify-content-start">
                    <img src={require("../assets/right_button.png")} alt="right_button" style={{height: "100%"}}/>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
