// Dependencies

export default function MainSectionLandingPage() {
  return (
    <div className="MainSectionLandingPage">
    <div className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-lg-2 align-items-center ps-lg-5">
            <div className="col mb-1 ps-lg-5">
                <h1 className="fw-bold" style={{fontSize: "36px"}}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <div className="col col-lg-8">
                    <p style={{fontSize: "14px"}}>
                        Selamat datang di Binar Car Rental.
                        Kami menyediakan mobil kualitas terbaik dengan harga
                        terjangkau. Selalu siap melayani kebutuhanmu untuk
                        sewa mobil selama 24 jam.
                    </p>
                </div>
                <a className="btn text-white rounded-1" style={{backgroundColor: "#5CB85F"}} href="/">Mulai
                    Sewa Mobil</a>
            </div>
            <div className="col mt-4 pe-0">
                <img src={require("../assets/img_car.png")} alt="img_car" className="w-100"/>
            </div>
        </div>
    </div>
    </div>
  );
}
