import { hapusDataLaporan, updateDataLaporan } from "../api/sistem_data_pengelola"


export const Modal = {
  ModalTerima: ({ keyData, data, status }) => (
    <div className="modal fade" id="exampleModalTerima" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <img className="m-auto" width="50" height="50" src="https://img.icons8.com/ios/50/00FF05/box-important--v1.png" alt="box-important--v1" />
          </div>
          <div className="modal-body">
            <p>Yakin ingin Menerima Laporan?</p>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tidak</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil"
                onClick={() => updateDataLaporan(keyData, data, status)}
              >Konfirmasi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalTolak: ({ keyData, data, statusData }) => (
    <div className="modal fade" id="exampleModalTolak" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <img className="m-auto" width="50" height="50" src="https://img.icons8.com/ios/50/00FF05/box-important--v1.png" alt="box-important--v1" />
          </div>
          <div className="modal-body">
            <p>Yakin ingin menolak laporan?</p>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tidak</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil"
                onClick={() => updateDataLaporan(keyData, data, statusData)}
              >Konfirmasi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalHapus: ({ keyData }) => (
    <div className="modal fade" id="exampleModalHapus" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <img className="m-auto" width="50" height="50" src="https://img.icons8.com/ios/50/00FF05/box-important--v1.png" alt="box-important--v1" />
          </div>
          <div className="modal-body">
            <p>Yakin ingin Menghapus Laporan?</p>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tidak</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil"
                onClick={() => hapusDataLaporan(keyData)}
              >Ya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalSelesai: ({ keyData, data, statusData }) => (
    <div className="modal fade" id="exampleModalSelesai" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <img className="m-auto" width="50" height="50" src="https://img.icons8.com/ios/50/00FF05/box-important--v1.png" alt="box-important--v1" />
          </div>
          <div className="modal-body">
            <p>Yakin ingin Menyelesaikan Laporan?</p>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tidak</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil"
                onClick={() => updateDataLaporan(keyData, data, statusData)}
              >Ya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalTambahAkun: () => (
    <div className="modal fade" id="exampleModalTambahAkun" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-2 rounded-4">
          <div className="modal-header">
            <h5 className="modal-title" id="TambahAkun">Tambah Akun Pengguna</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form action="">
              <div className="mb-3">
                <label for="Username" className="form-label">Username</label>
                <input type="text" className="form-control border border-dark" id="Username" placeholder="Masukan Username" />
              </div>
              <div className="mb-3">
                <label for="Password" className="form-label">Password</label>
                <input type="password" className="form-control border border-dark" id="Password" placeholder="Masukan Password" />
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-hehe rounded-2" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil">Tambah Akun</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalUbahAkun: ({ keyData }) => (
    <div className="modal fade" id="exampleModalUbahAkun" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-2 rounded-4">
          <div className="modal-header">
            <h5 className="modal-title" id="TambahAkun">Ubah Akun Pengguna</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form action="">
              <div className="mb-3">
                <label for="Username" className="form-label">Username</label>
                <input type="text" className="form-control border border-dark" id="Username" placeholder="Masukan Username" />
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-hehe rounded-2" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil">Ubah Akun</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalHapusAkun: ({ keyData }) => (
    <div className="modal fade" id="exampleModalHapusAkun" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <img className="m-auto" width="50" height="50" src="https://img.icons8.com/ios/50/00FF05/box-important--v1.png" alt="box-important--v1" />
          </div>
          <div className="modal-body">
            <p>Yakin ingin Menghapus Akun Pengelola?</p>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tidak</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil"
                onClick={() => ('sda')}
              >Ya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalBerhasil: () => (
    <div className="modal fade" id="exampleModalBerhasil" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-2 rounded-4">
          <div className="modal-header">
            <img className="m-auto" width="70" height="70" src="https://img.icons8.com/ios-glyphs/70/00FF05/ok--v1.png" alt="ok--v1" />
          </div>
          <div className="modal-body">
            <p className="text-center">Proses Berhasil</p>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-hehe rounded-2" data-bs-dismiss="modal" >Oke</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

