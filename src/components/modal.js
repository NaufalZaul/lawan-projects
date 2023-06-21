import { updateData } from "../api/sistem_data_pengelola"


export const Modal = {
  ModalTerima: ({ keyData, data }) => (
    <div class="modal fade" id="exampleModalTerima" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <img class="m-auto" width="50" height="50" src="https://img.icons8.com/ios/50/00FF05/box-important--v1.png" alt="box-important--v1" />
          </div>
          <div class="modal-body">
            <p>Yakin ingin Menerima Laporan?</p>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tidak</button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil"
                onClick={() => updateData(keyData, data)}
              >Konfirmasi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  ,


  ModalTolak: () => (
    <div class="modal fade" id="exampleModalTolak" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <img class="m-auto" width="50" height="50" src="https://img.icons8.com/ios/50/00FF05/box-important--v1.png" alt="box-important--v1" />
          </div>
          <div class="modal-body">
            <p>Yakin ingin menolak laporan?</p>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tidak</button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil">Konfirmasi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalHapus: () => (
    <div class="modal fade" id="exampleModalHapus" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <img class="m-auto" width="50" height="50" src="https://img.icons8.com/ios/50/00FF05/box-important--v1.png" alt="box-important--v1" />
          </div>
          <div class="modal-body">
            <p>Yakin ingin Menghapus Laporan?</p>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tidak</button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil">Ya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalTambahAkun: () => (
    <div class="modal fade" id="exampleModalTambahAkun" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-2 rounded-4">
          <div class="modal-header">
            <h5 class="modal-title" id="TambahAkun">Tambah Akun Pengguna</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="mb-3">
                <label for="Username" class="form-label">Username</label>
                <input type="text" class="form-control border border-dark" id="Username" placeholder="Masukan Username" />
              </div>
              <div class="mb-3">
                <label for="Password" class="form-label">Password</label>
                <input type="password" class="form-control border border-dark" id="Password" placeholder="Masukan Password" />
              </div>
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-hehe rounded-2" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil">Tambah Akun</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalUbahAkun: () => (
    <div class="modal fade" id="exampleModalTambahAkun" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-2 rounded-4">
          <div class="modal-header">
            <h5 class="modal-title" id="TambahAkun">Ubah Akun Pengguna</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="mb-3">
                <label for="Username" class="form-label">Username</label>
                <input type="text" class="form-control border border-dark" id="Username" placeholder="Masukan Username" />
              </div>
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-hehe rounded-2" data-bs-toggle="modal" data-bs-target="#exampleModalBerhasil">Ubah Akun</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalBerhasil: () => (
    <div class="modal fade" id="exampleModalBerhasil" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-2 rounded-4">
          <div class="modal-header">
            <img class="m-auto" width="70" height="70" src="https://img.icons8.com/ios-glyphs/70/00FF05/ok--v1.png" alt="ok--v1" />
          </div>
          <div class="modal-body">
            <p class="text-center">Proses Berhasil</p>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-hehe rounded-2" data-bs-dismiss="modal" >Oke</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

