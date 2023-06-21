import { Link } from 'react-router-dom'
import StorageImage from '../../../api/storage_firebase'


const storageImage = StorageImage()

export default function DetailLaporan({ detail, backpage }) {
  return (
    <div class="w-100 container bg-secondary-subtle p-3 row justify-content-center">
      <div class="col-7 d-flex flex-column justify-content-between bg-white p-4">
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
        <div class="row row-cols-4 my-5">
          <img src={storageImage[1]} alt="" class="my-2" />
          <img src={storageImage[1]} alt="" class="my-2" />
          <img src={storageImage[1]} alt="" class="my-2" />
          <img src={storageImage[1]} alt="" class="my-2" />
          <img src={storageImage[1]} alt="" class="my-2" />
          <img src={storageImage[1]} alt="" class="my-2" />
          <img src={storageImage[1]} alt="" class="my-2" />
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
      <div class="col-4 bg-blue text-white">
        <div class="text-center my-4">
          {/* <img className='' src={storageImage[0]} alt="" class="" /> */}
        </div>
        <table class="table table-borderless">
          <thead>
          </thead>
          <tbody className='text-white'>
            <tr>
              <td scope='row'>Nama</td>
              <td colSpan={2}>: Zulkarnain</td>
            </tr>
            <tr>
              <td scope='row'>NIK</td>
              <td colSpan={2}>: 01234567230158901</td>
            </tr>
            <tr>
              <td scope='row'>TTL</td>
              <td colSpan={2}>: Batam, 23 Januari 1985</td>
            </tr>
            <tr>
              <td scope='row'>Telp</td>
              <td colSpan={2}>: 091234567890</td>
            </tr>
            <tr>
              <td scope='row'>Alamat</td>
              <td colSpan={2}>: Tiban Mas blok AAA 100, Rt 02, Rw 05, TibanLama, Sekupang, Batam</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};
