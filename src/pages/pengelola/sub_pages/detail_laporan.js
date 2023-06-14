import { Link } from 'react-router-dom'
// id_pelapor
// : 
// "-NXsX356dgPVwFSTpieU"
// id_polsek
// : 
// "-NXsKgeUC3_C8Xt9lgvM"
// isi_laporan
// : 
// "Saya mendapatkan kekerasan secara fisik maupun psikis di sekolah, saya sering di buli dan di hajar oleh teman kelas saya sendiri hingga saya mendapatkan luka lebam yang sangat serius. saya ingin bisa belajar dengan tenang dan saya ingin  menjadi seperti murid normal lainnya yang tidak kena buli, dan saya harap yang membuli saya dapat di proses dan ditindak lanjuti dan  diberi arahan langsung oleh pihak yang berwajib agar tidak ada lagi korban yang akan bernasip sama seperti saya."
// jenis_kekerasan
// : 
// "Pembullyan"
// judul_laporan
// : 
// "Pembullyan Sesama Teman Bermain"
// lokasi_kejadian
// : 
// "Desa Waduk"
// status_laporan
// : 
// "masuk"
// tanggal_kejadian
// : 
// "29/01/2023"
// unggah_bukti
// : 
// ""
export default function DetailLaporan({ detail, backpage }) {
  return (
    <div class="container bg-secondary-subtle p-3 row">
      <div class="col-8 d-flex flex-column justify-content-between bg-white p-4">
        <div class="">
          <Link to={`/kelola/laporan_${backpage}`}
            state={{ defaultUrl: backpage }}>
            <button type="submit" className="border-0 bg-transparent mb-5 label">
              <i class="fas fa-arrow-circle-left me-2"></i>
              Kembali
            </button>
          </Link>
          <h4 className="semi-heading-2">{detail.judul_laporan}</h4>
          <ul className="d-flex justify-content-between my-4 p-0">
            <li className="list-group-item">
              <p className="bold-paragraf mb-1">Jenis Kekerasan</p>
              <p className="paragraf">{detail.jenis_kekerasan}</p>
            </li>
            <li className="list-group-item">
              <p className="bold-paragraf mb-1">Lokasi Kejadian</p>
              <p className="paragraf">{detail.lokasi_kejadian}</p>
            </li>
            <li className="list-group-item">
              <p className="bold-paragraf mb-1">Tanggal Kejadian</p>
              <p className="paragraf">{detail.tanggal_kejadian}</p>
            </li>
          </ul>
          <div class="">
            <p className="bold-paragraf mb-1">Deskripsi</p>
            <p className="paragraf">{detail.isi_laporan}</p>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" className="btn button button-danger">
            Tolak
            <i class="fas fa-times ms-2"></i>
          </button>
          <button type="submit" className="btn button button-print">
            PDF
            <i class="fas fa-file-pdf ms-2"></i>
          </button>
          <button type="submit" className="btn button button-success">
            Proses
            <i class="fas fa-check ms-2"></i>
          </button>
        </div>
      </div>
      <div class="col-4 bg-blue">
        <img src="" alt="" />
        <div class="">

        </div>
      </div>
    </div>
  )
};
