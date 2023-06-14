import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class="row bg-blue text-white mt-5 p-5">
      <div class="col-4">
        <h1 className="bold-heading-1">
          <img className="w-50" src="./images/logo-large-white.png" alt="" />
        </h1>
        <p className="text-style-label">Lawan dan laporkan tindak kekerasan</p>
      </div>
      <div class="col-3 ps-5">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-style-navbar" href="#">Tentang</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-style-navbar" href="#">Edukasi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-style-navbar" href="#">Kontak</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-style-navbar" href="#">Pengelola</a>
          </li>
        </ul>
      </div>
      <div class="col d-flex justify-content-end p-2">
        <div class="me-5">
          <h5 className="text-style-navbar">Kunjungi</h5>
          <div class="d-flex">
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" />
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook" />
            <img width="48" height="48" src="https://img.icons8.com/color/48/twitter-squared.png" alt="twitter-squared" />
            <img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play" />
          </div>
        </div>
        <div class="">
          <h5 className="text-style-navbar">Download</h5>
          <img className="w-100 rounded-start-3 " src="./images/Google Play.png" alt="" />
        </div>
      </div>
    </div>
  )
};
