import React, { useEffect, useState } from "react";
// import Chart from "../../components/Chart";
import { useLocation } from "react-router-dom";
import { Icon } from '@iconify/react'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

export default function Dasboard() {
  const { state } = useLocation();

  const [chart, setChart] = useState({
    type: 'line',
    data: {
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
      datasets: [{
        label: '# of Votes',
        data: [10, 20, 30, 40, 10, 20, 30, 5, 20, 30, 25, 20],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })

  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);


  return (
    <div className="container bg-secondary-subtle pt-2">
      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="card-text mb-1 text-style-label">Selamat Datang</p>
          <h5 className="card-title p-0 text-style-navbar">{state.userLoginName}</h5>
        </div>
      </div>
      <div className="row m-auto">
        <div className="col card flex-row align-items-center me-2 shadow-sm">
          <Icon icon="fluent:document-arrow-down-16-regular" width="50" height="50" className="me-2" />

          <div className="card-body">
            <p className="card-text mb-0 text-style-navbar">Laporan Masuk</p>
            <h5 className="card-title bold-heading-1">10</h5>
          </div>
        </div>
        <div className="col card flex-row align-items-center me-2 shadow-sm">
          <Icon icon="fluent:document-briefcase-20-regular" width="50" height="50" className="me-2" />
          <div className="card-body">
            <p className="card-text mb-0 text-style-navbar">Laporan Diproses</p>
            <h5 className="card-title bold-heading-1">10</h5>
          </div>
        </div>
        <div className="col card flex-row align-items-center shadow-sm">
          <Icon icon="fluent:document-checkmark-16-regular" width="50" height="50" className="me-2" />
          <div className="card-body">
            <p className="card-text mb-0 text-style-navbar">Laporan Selesai</p>
            <h5 className="card-title bold-heading-1">10</h5>
          </div>
        </div>
      </div>
      <div className="bg-white my-3 p-4 rounded shadow-sm">
        <h5 className="text-style-navbar">Statistik Laporan</h5>
        <div className="w-100 d-flex justify-content-between mt-4">
          <p className="bold-paragraf">Data Laporan Tahun 2022</p>
          <div className="d-flex">
            <p className="d-flex align-items-center text-style-paragraf mx-3">
              <span className="label-statistik-masuk"></span>
              Laporan Masuk
            </p>
            <p className="d-flex align-items-center text-style-paragraf mx-3">
              <span className="label-statistik-selesai"></span>
              Laporan Selesai
            </p>
          </div>
        </div>
        <canvas id="myChart" className="mt-2"></canvas>
      </div>
    </div>
  );
};
