import React, { useEffect } from 'react';
import chart from '../../components/chart';
import { polsek } from '../../api/api'

class Dasboard extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }

  componentWillUnmount() {
    if (window.location.pathname === '/kelola') {
      chart()
    }
  }

  render() {
    return (
      <div class="container bg-secondary-subtle pt-2">
        <div class="card my-3 shadow-sm">
          <div class="card-body">
            <p class="card-text mb-1 text-style-label">Selamat Datang</p>
            <h5 class="card-title p-0 text-style-navbar">{polsek[0].nama}</h5>
          </div>
        </div>
        <div class="row m-auto">
          <div class="col card flex-row align-items-center me-2 shadow-sm">
            <i class="fas fa-file-download me-2 fs-1"></i>
            <div class="card-body">
              <p class="card-text mb-0 text-style-navbar">Laporan Masuk</p>
              <h5 class="card-title bold-heading-1">10</h5>
            </div>
          </div>
          <div class="col card flex-row align-items-center me-2 shadow-sm">
            <i class="fas fa-file-signature me-2 fs-1"></i>
            <div class="card-body">
              <p class="card-text mb-0 text-style-navbar">Laporan Diproses</p>
              <h5 class="card-title bold-heading-1">10</h5>
            </div>
          </div>
          <div class="col card flex-row align-items-center shadow-sm">
            <i class="fas fa-file-alt me-2 fs-1"></i>
            <div class="card-body">
              <p class="card-text mb-0 text-style-navbar">Laporan Selesai</p>
              <h5 class="card-title bold-heading-1">10</h5>
            </div>
          </div>
        </div>
        <div class="bg-white my-3 p-4 rounded shadow-sm">
          <h5 className="text-style-navbar">Statistik Laporan</h5>
          <div class="w-100 d-flex justify-content-between mt-4">
            <p className="bold-paragraf">Data Laporan Tahun 2022</p>
            <div className='d-flex'>
              <p className='d-flex align-items-center text-style-paragraf mx-3'>
                <span className='label-statistik-masuk'></span>
                Laporan Masuk
              </p>
              <p className='d-flex align-items-center text-style-paragraf mx-3'>
                <span className='label-statistik-selesai'></span>
                Laporan Selesai
              </p>
            </div>
          </div>
          <canvas id='myChart' className='mt-2'></canvas>
        </div>
      </div>
    )
  }
}
export default Dasboard;