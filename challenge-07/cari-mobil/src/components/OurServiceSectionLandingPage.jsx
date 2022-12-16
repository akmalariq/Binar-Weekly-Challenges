// Dependencies

export default function OurServiceSectionLandingPage() {
  return (
      <div className="OurServiceSectionLandingPage">
          <div className="container-fluid mt-5 my-lg-5 py-5" id="ourservices">
        <div className="row row-cols-1 row-cols-lg-3 align-items-center">
            <div className="col-lg-1 d-none d-lg-block">
                <br/>
            </div>
            <div className="col col-lg-5">
                <img src={require("../assets/img_service.png")} alt="img_service.png" className="px-lg-5 w-100"/>
            </div>
            <div className="col mt-4 ps-lg-5    ">
                <h1 className="fw-bold" style={{fontSize: "24px"}}>
                    Best Car Rental for any kind of trip in (Lokasimu)!
                </h1>
                <p style={{fontSize: "14px"}}>
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental
                    jaminan harga lebih murah dibandingkan yang lain,
                    kondisi mobil baru, serta kualitas pelayanan terbaik
                    untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                </p>
                <ul style={{listStyleType: "none", verticalAlign: "middle", paddingLeft: "0%", fontSize: "14px"}}>
                    <li>
                        <p>
                            <span style={{marginRight: "16px", width: "24px", height: "24px"}}><img src={require("../assets/circle.png")}
                                    alt="circle.png"/></span>
                            Sewa Mobil Dengan Supir di Bali 12 Jam
                        </p>
                    </li>
                    <li>
                        <p>
                            <span style={{marginRight: "16px", width: "24px", height: "24px"}}><img src={require("../assets/circle.png")}
                                    alt="circle.png"/></span>
                            Sewa Mobil Lepas Kunci di Bali 24 Jam
                        </p>
                    </li>
                    <li>
                        <p>
                            <span style={{marginRight: "16px", width: "24px", height: "24px"}}><img src={require("../assets/circle.png")}
                                    alt="circle.png"/></span>
                            Sewa Mobil Jangka Panjang Bulanan
                        </p>
                    </li>
                    <li>
                        <p>
                            <span style={{marginRight: "16px", width: "24px", height: "24px"}}><img src={require("../assets/circle.png")}
                                    alt="circle.png"/></span>
                            Gratis Antar - Jemput Mobil di Bandara
                        </p>
                    </li>
                    <li>
                        <p>
                            <span style={{marginRight: "16px", width: "24px", height: "24px"}}><img src={require("../assets/circle.png")}
                                    alt="circle.png"/></span>
                            Layanan Airport Transfer / Drop In Out
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  );
}
