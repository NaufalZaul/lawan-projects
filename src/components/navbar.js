import { Link } from "react-router-dom"
import { polsek } from "../api/api"


export function NavbarPengelola() {
  return (
    <nav class="d-flex justify-content-between align-items-center bg-blue text-white px-3 py-1">
      <div class="semi-heading-1">
        <img className="w-50" src="./images/logo-large-white.png" alt="" />
      </div>
      <div class="text-style-label">
        {polsek[0].nama}
        <i class="fas fa-user-circle mx-2" style={{ color: '#ffffff' }}></i>
      </div>
    </nav>
  )
};



export function NavbarPengguna() {
  // console.log(window.location.)/;
  // window.addEventListener('scroll', () => {
  //   (window.scrollY > 0) ?
  //     document.querySelector('nav').classList.add('shadow') :
  //     document.querySelector('nav').classList.remove('shadow')
  // })

  return (
    <nav class="sticky-top navbar navbar-expand-lg bg-white px-5 text-style-navbar">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          <img className="w-50" src="./images/logo-large.jpg" alt="" />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mx-1">
              <Link to="/" class="nav-link rounded-2 px-4 text-blue" aria-current="page">Beranda</Link>
            </li>
            <li class="nav-item mx-1">
              <Link to="/tentang" class="nav-link rounded-2 px-4 text-blue">Tentang</Link>
            </li>
            <li class="nav-item mx-1">
              <Link to="/edukasi" class="nav-link rounded-2 px-4 text-blue">Edukasi</Link>
            </li>
            <li class="nav-item mx-1">
              <Link to="/kontak" class="nav-link rounded-2 px-4 text-blue">Kontak</Link>
            </li>
            <li class="nav-item mx-1">
              <Link to="/pengelola" class="nav-link rounded-2 px-4 text-blue">Pengelola</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}