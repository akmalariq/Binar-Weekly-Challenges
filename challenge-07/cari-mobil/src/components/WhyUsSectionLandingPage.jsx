// Dependencies

export default function WhyUsSectionLandingPage() {
  return (
      <div className="WhyUsSectionLandingPage">
          
    <div className="container my-2 my-lg-5 py-lg-5" id="whyus">
        <h4 className="fw-bold text-center text-lg-start">Why Us?</h4>
        <p className="my-3 my-lg-4 text-center text-lg-start">Mengapa harus pilih Binar Car Rental?</p>
        <div className="row row-cols-1 row-cols-lg-4 my-3 my-lg-4 py-lg-3 px-2 gap-3 gap-lg-0">
            <div className="col px-lg-4">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={require("../assets/icon_complete.png")} alt="icon_complete"/>
                        <h5 className="card-title mt-3">Mobil Lengkap</h5>
                        <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                </div>
            </div>
            <div className="col px-lg-4">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={require("../assets/icon_price.png")} alt="icon_price"/>
                        <h5 className="card-title mt-3">Harga Murah</h5>
                        <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil
                            lain
                        </p>
                    </div>
                </div>
            </div>
            <div className="col px-lg-4">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={require("../assets/icon_24hrs.png")} alt="icon_24hrs"/>
                        <h5 className="card-title mt-3">Layanan 24 Jam</h5>
                        <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di
                            akhir
                            minggu</p>
                    </div>
                </div>
            </div>
            <div className="col px-lg-4">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={require("../assets/icon_professional.png")} alt="icon_professional"/>
                        <h5 className="card-title mt-3">Sopir Profesional</h5>
                        <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
