import { Link } from "react-router-dom";
import { polsek } from "../api/api";

// dipisah

export function NavbarPengelola() {
  return (
    <nav className="d-flex justify-content-between align-items-center bg-blue text-white px-3 py-1">
      <div className="semi-heading-1">
        <img className="w-50" src="./images/logo-large-white.png" alt="" />
      </div>
      <div className="dropdown">
        <button
          className="btn text-white dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {polsek[0].nama}
        </button>
        <ul className="dropdown-menu">
          <Link to="/" className="text-decoration-none">
            <span className="dropdown-item">Keluar</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export function NavbarPengguna() {
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
              <Link to="/" className="nav-link rounded-2 px-4 text-blue" aria-current="page">
                Beranda
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/tentang" className="nav-link rounded-2 px-4 text-blue">
                Tentang
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/edukasi" className="nav-link rounded-2 px-4 text-blue">
                Edukasi
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/kontak" className="nav-link rounded-2 px-4 text-blue">
                Kontak
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="/pengelola" className="nav-link rounded-2 px-4 text-blue">
                Pengelola
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
