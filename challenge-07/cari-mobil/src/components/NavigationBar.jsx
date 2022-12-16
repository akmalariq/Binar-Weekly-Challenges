// Dependencies

export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <nav
        className="navbar navbar-expand-lg fw-semibold fixed-top"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container mt-lg-4">
          <div
            className="col"
            style={{ maxWidth: "100px", height: "34px", background: "#0D28A6" }}
          >
            <br />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end "
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: "50vw" }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                BCR
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item mx-lg-3">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#ourservices"
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="#whyus">
                    Why Us
                  </a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="#testimony">
                    Testimony
                  </a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item mx-lg-3">
                  <a
                    className="btn text-white rounded-1"
                    style={{ backgroundColor: "#5CB85F" }}
                    href="/"
                    role="button"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
