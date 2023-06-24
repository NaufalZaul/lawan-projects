import { Link } from "react-router-dom"

export default function SideBar() {

  const handleNavigasi = (target) => {
    const menuSideBar = document.querySelectorAll('.nav-link')
    menuSideBar.forEach((elm, key) => {
      (elm === target) ? elm.classList.add('active-menu')
        : menuSideBar[key].classList.remove('active-menu')
    })
  }

  return (
    <div className="min-vh-100 d-flex flex-column border p-3 text-style-sidebar">
      <ul className="nav nav-pills flex-column">
        <li className="nav-item my-1">
          <Link to="/kelola" className="nav-link text-blue active-menu"
            onClick={(e) => handleNavigasi(e.currentTarget)}
            state={{ defaultUrl: 'kelola' }}>
            <i className="fas fa-border-all me-2"></i>
            Dasboard
          </Link>
        </li>
        <li className="nav-item my-1">
          <Link to="/kelola/laporan_diterima" className="nav-link text-blue"
            onClick={(e) => handleNavigasi(e.currentTarget)}
            state={{ defaultUrl: 'diterima' }}>
            <i className="fas fa-file-download me-2"></i>
            Laporan Masuk
          </Link>
        </li>
        <li className="nav-item my-1">
          <Link to="/kelola/laporan_diproses" className="nav-link text-blue"
            onClick={(e) => handleNavigasi(e.currentTarget)}
            state={{ defaultUrl: 'diproses' }}>
            <i className="fas fa-file-signature me-2"></i>
            Laporan Diproses
          </Link>
        </li>
        <li className="nav-item my-1">
          <Link to="/kelola/laporan_selesai" className="nav-link text-blue"
            onClick={(e) => handleNavigasi(e.currentTarget)}
            state={{ defaultUrl: 'selesai' }}>
            <i className="fas fa-file-alt me-2"></i>
            Laporan Selesai
          </Link>
        </li>
        <li className="nav-item my-1">
          <Link to="/kelola/laporan_ditolak" className="nav-link text-blue"
            onClick={(e) => handleNavigasi(e.currentTarget)}
            state={{ defaultUrl: 'ditolak' }}>
            <i className="fas fa-file-prescription me-2"></i>
            Laporan Ditolak
          </Link>
        </li>
      </ul>
    </div>
  )
};
