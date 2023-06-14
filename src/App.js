import { Routes, Route } from 'react-router-dom'
import { useLocation } from "react-router-dom";

// import styles
import './App.css';
import './styles/navbar_sidebar.css';
import './styles/dasboard.css';
import './styles/beranda.css';
import './styles/login.css';
import './styles/tentang.css';
import './styles/edukasi.css';
import './styles/kontak.css';
import './styles/pengelola.css';

// import component
import { NavbarPengelola, NavbarPengguna } from './components/navbar';
import Dasboard from './pages/pengelola/dasboard';
import SideBar from './components/sidebar';
import Laporan, { controlTable } from './pages/pengelola/laporan';
import DetailLaporan from './pages/pengelola/sub_pages/detail_laporan';
import Beranda from './pages/halaman_utama/beranda';
import Footer from './components/footer';
import Pengelola from './pages/halaman_utama/pengelola';
import Login from './pages/login/login';
import Tentang from './pages/halaman_utama/tentang';
import Edukasi from './pages/halaman_utama/edukasi';
import Kontak from './pages/halaman_utama/kontak';

// firebase
import "./api/firebase"


function App() {
  const { state } = useLocation();

  const pathname = window.location.pathname
    .split('')
    .slice(0, 7)
    .join('')

  return (
    <div className="App">
      {
        pathname == '/kelola' ? <NavbarPengelola /> :
          window.location.pathname == '/login' ? '' : <NavbarPengguna />
      }
      <div {...(pathname == '/kelola') ? { className: 'd-flex' } : ''}>
        {pathname == '/kelola' ? <SideBar /> : ''}
        <Routes>

          {/* sisi pengguna */}
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/pengelola" element={<Pengelola />} />

          {/* sisi pengelola */}
          <Route path="/login" element={<Login />} />
          <Route path="/kelola" element={<Dasboard />} />
          {
            state !== null ?
              <>
                <Route path={`/kelola/laporan_${state.defaultUrl}`}
                  element={<Laporan
                    table={`${state.defaultUrl}`}
                    page={`${state.defaultUrl}`} />}
                />
                <Route path="/kelola/detail_laporan"
                  element={<DetailLaporan
                    detail={state.detailData}
                    backpage={state.backpage} />}
                />
              </>
              : ''
          }

        </Routes>
      </div>
      {(pathname == '/kelola' || pathname == '/login') ? '' : <Footer />}
    </div>
  );
}


export default App;


{/* <Route path={`/kelola/laporan_${state.defaultUrl}`}
  element={<Laporan
    table={`${state.defaultUrl}`}
    page={`${state.defaultUrl}`} />}
  {...controlTable}
/> */}