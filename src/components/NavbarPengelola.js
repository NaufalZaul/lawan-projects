import { Link } from "react-router-dom";
import { polsek } from "../api/api";

// dipisah

export default function NavbarPengelola() {
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
