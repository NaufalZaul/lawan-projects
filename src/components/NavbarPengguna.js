import { Link } from "react-router-dom";

export default function NavbarPengguna() {
  window.addEventListener("scroll", () => {
    window.scrollY > 0
      ? document.querySelector("nav").classList.add("shadow")
      : document.querySelector("nav").classList.remove("shadow");
  });

  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-white px-5 text-style-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img className="" src="./images/logo-large.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <Link to="/" state={{ defaultUrl: 'homepage' }} className="nav-link rounded-2 px-4 text-blue" aria-current="page">
                Beranda
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/tentang" state={{ defaultUrl: 'homepage' }} className="nav-link rounded-2 px-4 text-blue">
                Tentang
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/edukasi" state={{ defaultUrl: 'homepage' }} className="nav-link rounded-2 px-4 text-blue">
                Edukasi
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/kontak" state={{ defaultUrl: 'homepage' }} className="nav-link rounded-2 px-4 text-blue">
                Kontak
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/pengelola" state={{ defaultUrl: 'homepage' }} className="nav-link rounded-2 px-4 text-blue">
                Pengelola
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
