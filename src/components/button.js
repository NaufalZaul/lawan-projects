import { Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PrintPDF } from './printpdf';
import DetailLaporan from '../pages/pengelola/sub_pages/detail_laporan';


const Button = {
  ButtonTerima: (data) => {
    // console.log(data);
    return (
      <button type="button"
        class="btn button-success text-style-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalTerima">
        <i class="fas fa-check"></i>
      </button>
    )
  },
  ButtonTolak: () => (
    <button type="button"
      class="btn button-danger text-style-button"
      data-bs-toggle="modal" data-bs-target="#exampleModalTolak">
      <i class="fas fa-times-circle"></i>
    </button>
  ),
  ButtonDetail: () => (
    <button type="button"
      class="btn button-print text-style-button">
      <i class="fas fa-file-alt"></i>
    </button>
  ),
  ButtonKonfirmasi: () => (
    <button type="button"
      class="btn button-success text-style-button"
      data-bs-toggle="modal" data-bs-target="#exampleModalKonfirmasi">
      <i class="fas fa-check"></i>
    </button>
  ),
  ButtonUrutkan: ({ data }) => (
    <button
      type="button"
      onClick={() => alert(data)}
      class="btn button-print text-style-button">
      <i class="fas fa-sort-amount-up me-1 px-1"></i>
      Urutkan
    </button>
  ),
  ButtonKembali: () => (
    <button type="submit" className="border-0 bg-transparent mb-5 label">
      <i class="fas fa-arrow-circle-left me-2"></i>
      Kembali
    </button>
  ),
  ButtonDownload: () => (
    <PDFDownloadLink document={<DetailLaporan />} fileName='Laporan'>
      <button type="button"
        class="btn button-print text-style-button">
        <i class="fas fa-file-alt"></i>
      </button>
    </PDFDownloadLink>
  ),
  ButtonTambahAkun: () => (
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalTambahAkun">
      Tambah Pengguna
    </button>
  )
}

export default Button;