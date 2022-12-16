// Dependencies
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TestimonialSectionLandingPage() {
  return (
      <div className="TestimonialSectionLandingPage">
          
    <div className="container-fluid text-center my-5" id="testimony">
        <h4 className="fw-bold w-auto">
            Testimonial
        </h4>
        <p className="mt-3">Berbagai review positif dari para pelanggan kami</p>

        {/* <!-- START CARD DESKTOP --> */}
        <div className="d-none d-lg-block" style={{margin: "40px -200px 0 -200px"}}>
            <div className="row justify-content-around">

                <div className="card border-0 item px-lg-4" style={{background: "#F1F3FF"}}>
                    <div className="card-body align-items-center d-flex  my-lg-4">
                        <div className="row align-items-center">
                            <div className="col-3 p-0">
                                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="First slide"
                                    style={{width: "80px", height:"80px"}} className="rounded-circle mx-lg-auto"/>
                            </div>
                            <div className="col text-start">
                                <div className="col-lg-3">
                                    <img src={require("../assets/rate.png")} alt="rate" className="w-100 pe-lg-3"/>
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0 item px-lg-4" style={{width: "620px", height: "270px", background: "#F1F3FF"}}>
                    <div className="card-body align-items-center d-flex  my-lg-4">
                        <div className="row align-items-center">
                            <div className="col-3 p-0">
                                <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="First slide"
                                    style={{width: "80px", height:"80px"}} className="rounded-circle mx-lg-auto"/>
                            </div>
                            <div className="col text-start">
                                <div className="col-lg-3">
                                    <img src={require("../assets/rate.png")} alt="rate" className="w-100 pe-lg-3"/>
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0 item px-lg-4" style={{width: "620px", height: "270px", background: "#F1F3FF"}}>
                    <div className="card-body align-items-center d-flex  my-lg-4">
                        <div className="row align-items-center">
                            <div className="col-3 p-0">
                                <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="First slide"
                                    style={{width: "80px", height:"80px"}} className="rounded-circle mx-lg-auto"/>
                            </div>
                            <div className="col text-start">
                                <div className="col-lg-3">
                                    <img src={require("../assets/rate.png")} alt="rate" className="w-100 pe-lg-3"/>
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* <!-- END CARD DESKTOP --> */}

        {/* <!-- START CARD MOBILE --> */}
        <div className="d-block d-lg-none">
            <div className="card border-0" style={{background: "#F1F3FF"}}>
                <div className="card-body">
                    <div className="col" style={{marginTop: "60px"}}>
                        <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="profie_pic"
                            style={{width: "80px", height:"80px"}} className="rounded-circle"/>
                    </div>
                    <div className="col" style={{marginTop: "24px"}}>
                        <img src={require("../assets/rate.png")} alt="rate"/>
                    </div>
                    <div className="col text-start px-2" style={{marginTop: "24px"}}>
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
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- END CARD MOBILE --> */}

        <div className="row row-cols-2 justify-content-center mt-5">
            <div className="col-2 col-lg-1 d-flex justify-content-end">
                <img src={require("../assets/left_button.png")} alt="left_button" style={{height: "100%"}}/>
            </div>
            <div className="col-2 col-lg-1 d-flex justify-content-start">
                <img src={require("../assets/right_button.png")} alt="right_button" style={{height: "100%"}}/>
            </div>
        </div>
          </div>
          
    </div>
  );
}
