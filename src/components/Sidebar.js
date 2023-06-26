import { Link, useLocation } from "react-router-dom";
import { Icon } from '@iconify/react';


export default function SideBar() {
  const handleNavigasi = (target) => {
    const menuSideBar = document.querySelectorAll(".nav-link");
    menuSideBar.forEach((elm, key) => {
      elm === target
        ? elm.classList.add("active-menu")
        : menuSideBar[key].classList.remove("active-menu");
    });
  };

  const { pathname, state } = useLocation()

  return (
    <div className="min-vh-100 d-flex flex-column border p-3 text-style-sidebar" >
      {
        (pathname === '/kelola/superadmin') ?
          <ul className="nav nav-pills flex-column">
            <li className="nav-item my-1">
              <Link
                to="/kelola"
                className="nav-link text-blue active-menu d-flex align-items-center"
                onClick={(e) => handleNavigasi(e.currentTarget)}
                state={{
                  defaultUrl: "superadmin",
                  isLogin: state.isLogin,
                  userLoginName: state.userLoginName
                }}>
                <Icon icon="ion:person-sharp" width="20" height="20" className="me-2" />
                Akun Pengelola
              </Link>
            </li>
          </ul>
          :
          <ul className="nav nav-pills flex-column">
            <li className="nav-item my-1">
              <Link
                to="/kelola"
                className="nav-link text-blue active-menu"
                onClick={(e) => handleNavigasi(e.currentTarget)}
                state={{
                  defaultUrl: "kelola",
                  isLogin: state.isLogin,
                  userLoginName: state.userLoginName
                }}>
                <Icon icon="fluent:board-16-regular" width="20px" height="20px" className="me-2" />
                Dasboard
              </Link>
            </li>
            <li className="nav-item my-1">
              <Link
                to="/kelola/laporan-diterima"
                className="nav-link text-blue"
                onClick={(e) => handleNavigasi(e.currentTarget)}
                state={{
                  defaultUrl: "diterima",
                  isLogin: state.isLogin,
                  userLoginName: state.userLoginName
                }}>
                <Icon icon="fluent:document-arrow-down-16-regular" width="20" height="20" className="me-2" />
                Laporan Masuk
              </Link>
            </li>
            <li className="nav-item my-1">
              <Link
                to="/kelola/laporan-diproses"
                className="nav-link text-blue"
                onClick={(e) => handleNavigasi(e.currentTarget)}
                state={{
                  defaultUrl: "diproses",
                  isLogin: state.isLogin,
                  userLoginName: state.userLoginName
                }}>
                <Icon icon="fluent:document-briefcase-20-regular" width="20" height="20" className="me-2" />
                Laporan Diproses
              </Link>
            </li>
            <li className="nav-item my-1">
              <Link
                to="/kelola/laporan-selesai"
                className="nav-link text-blue"
                onClick={(e) => handleNavigasi(e.currentTarget)}
                state={{
                  defaultUrl: "selesai",
                  isLogin: state.isLogin,
                  userLoginName: state.userLoginName
                }}>
                <Icon icon="fluent:document-checkmark-16-regular" width="20" height="20" className="me-2" />
                Laporan Selesai
              </Link>
            </li>
            <li className="nav-item my-1">
              <Link
                to="/kelola/laporan-ditolak"
                className="nav-link text-blue"
                onClick={(e) => handleNavigasi(e.currentTarget)}
                state={{
                  defaultUrl: "ditolak",
                  isLogin: state.isLogin,
                  userLoginName: state.userLoginName
                }}>
                <Icon icon="fluent:document-dismiss-16-regular" width="20" height="20" className="me-2" />
                Laporan Ditolak
              </Link>
            </li>
          </ul>
      }
    </div>
  )
}