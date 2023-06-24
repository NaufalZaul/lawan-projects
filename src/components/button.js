import { PDFDownloadLink } from '@react-pdf/renderer';
import PrintPDF from './printpdf';
import DetailLaporan from '../pages/pengelola/sub_pages/detail_laporan';


const Button = {
  ButtonTerima: () => {
    return (
      <button type="button"
        className="btn button-success text-style-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalTerima">
        <i className="fas fa-check"></i>
      </button>
    )
  },
  ButtonTolak: () => (
    <button type="button"
      className="btn button-danger text-style-button"
      data-bs-toggle="modal" data-bs-target="#exampleModalTolak">
      <i className="fas fa-times-circle"></i>
    </button>
  ),
  ButtonHapus: () => (
    <button type="button"
      className="btn button-danger text-style-button"
      data-bs-toggle="modal" data-bs-target="#exampleModalHapus">
      <i className="fas fa-times-circle"></i>
    </button>
  ),
  ButtonDetail: () => (
    <button type="button"
      className="btn button-print text-style-button">
      <i className="fas fa-file-alt"></i>
    </button>
  ),
  ButtonKonfirmasi: () => (
    <button type="button"
      className="btn button-success text-style-button"
      data-bs-toggle="modal" data-bs-target="#exampleModalKonfirmasi">
      <i className="fas fa-check"></i>
    </button>
  ),
  ButtonUrutkan: ({ data }) => (
    <button
      type="button"
      onClick={() => alert(data)}
      className="btn button-print text-style-button">
      <i className="fas fa-sort-amount-up me-1 px-1"></i>
      Urutkan
    </button>
  ),
  ButtonKembali: () => (
    <button type="submit" className="border-0 bg-transparent mb-5 label">
      <i className="fas fa-arrow-circle-left me-2"></i>
      Kembali
    </button>
  ),
  ButtonSelesai: () => (
    <button type="button"
      className="btn button-success text-style-button"
      data-bs-toggle="modal" data-bs-target="#exampleModalSelesai">
      selesai
      {/* <i className="fas fa-check"></i> */}
    </button>
  ),
  ButtonDownload: ({ data }) => (
    <PDFDownloadLink document={<PrintPDF data={data} />} fileName='Laporan'>
      <button type="button"
        className="btn button-print text-style-button">
        <i className="fas fa-file-alt"></i>
      </button>
    </PDFDownloadLink>
  ),
  ButtonTambahAkun: () => (
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalTambahAkun">
      Tambah Pengguna
    </button>
  ),
  ButtonUbahAkun: () => (
    <button type="button"
      className="btn btn-warning text-style-button"
      data-bs-toggle="modal" data-bs-target="#exampleModalUbahAkun">
      <i className="fas fa-times-circle"></i>
    </button>
  ),
  ButtonHapusAkun: () => (
    <button type="button"
      className="btn button-danger text-style-button"
      data-bs-toggle="modal" data-bs-target="#exampleModalHapusAkun">
      <i className="fas fa-times-circle"></i>
    </button>
  ),
}

export default Button;