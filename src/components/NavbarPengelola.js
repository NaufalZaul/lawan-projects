import { Link, useLocation } from "react-router-dom";
import { Icon } from '@iconify/react';


export default function NavbarPengelola() {
  const { state } = useLocation();
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
          {state.userLoginName}
          <Icon icon="iconamoon:profile-circle" width="30" height="30" className="ms-2" />
        </button>
        <ul className="dropdown-menu">
          <Link to="/" className="text-decoration-none d-flex align-items-center">
            <span className="dropdown-item">
              <Icon icon="basil:logout-solid" width="20" height="20" className="me-2" />
              Keluar
            </span>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
