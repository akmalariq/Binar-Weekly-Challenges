// Dependencies

export default function FooterSectionLandingPage() {
  return (
    <div className="FooterSectionLandingPage">
      <div class="container my-5 py-lg-5">
        <div class="row row-cols-1 row-cols-lg-4">
          <div class="col">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div class="col">
            <p class="fw-semibold">Our services</p>
            <p class="fw-semibold">Why Us</p>
            <p class="fw-semibold">Testimonial</p>
            <p class="fw-semibold">FAQ</p>
          </div>
          <div class="col">
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
          </div>
          <div class="col">
            <p>Copyright Binar 2022</p>
            <div
              style={{ width: "100px", height: "34px", background: "#0D28A6" }}
            >
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
