// import { PDFDownloadLink } from "@react-pdf/renderer";
// import PrintPDF from "./Printpdf";
import { Icon } from '@iconify/react'


const Button = {
  ButtonTerima: (props, { data }) => {
    return (
      <button
        type="button"
        className="btn button-success text-style-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalTerima"
        onClick={data}
      >
        {props.text}
        <Icon icon="mingcute:check-fill" width="25" height="25" className="ms-2" />
      </button>
    );
  },
  ButtonTolak: (props, { data }) => (
    <button
      type="button"
      className="btn button-danger text-style-button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalTolak"
      onClick={data}
    >
      {props.text}
      <Icon icon="mingcute:close-fill" width="25" height="25" className="ms-2" />
    </button>
  ),
  ButtonHapus: ({ data }) => (
    <button
      type="button"
      className="btn button-danger text-style-button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalHapus"
      onClick={data}
    >
      <Icon icon="mingcute:delete-2-line" width="25" height="25" />
    </button>
  ),
  ButtonDetail: () => (
    <button type="button" className="btn button-print text-style-button">
      <Icon icon="icon-park-outline:view-grid-detail" width="25" height="25" />
    </button>
  ),
  ButtonKonfirmasi: () => (
    <button
      type="button"
      className="btn button-success text-style-button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalKonfirmasi"
    >
      <i className="fas fa-check"></i>
    </button>
  ),
  ButtonUrutkan: ({ data }) => (
    <button
      type="button"
      onClick={() => alert(data)}
      className="btn button-print text-style-button d-flex align-items-center"
    >
      <Icon icon="bx:sort-up" width="22" height="22" className="me-2 " />
      Urutkan
    </button>
  ),
  ButtonKembali: () => (
    <button type="submit" className="border-0 bg-transparent mb-5 label">
      <i className="fas fa-arrow-circle-left me-2"></i>
      Kembali
    </button>
  ),
  ButtonSelesai: ({ data }) => (
    <button
      type="button"
      className="btn button-success text-style-button"
      data-bs-toggle="modal"
      onClick={data}
      data-bs-target="#exampleModalSelesai"
    >
      <i className="fas fa-check"></i>
    </button>
  ),
  ButtonDownload: (props, { download }) => (
    // <PDFDownloadLink document={<PrintPDF data={data} />} fileName="Laporan">
    // </PDFDownloadLink>
    <button type="submit"
      className="btn button-print text-style-button"
      onClick={download}>
      {props.text}
      <Icon icon="fluent:document-pdf-20-regular" width="20" height="20" className="ms-2" />
    </button>
  ),
  ButtonTambahAkun: () => (
    <button
      type="button"
      className="btn button-print text-style-button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalTambahAkun"
    >
      <Icon icon="ion:person-add" width="20" height="20" className="me-2" />
      Tambah Akun
    </button>
  ),
  ButtonUbahAkun: () => (
    <button
      type="button"
      className="btn btn-warning text-style-button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalUbahAkun"
    >
      <i className="fas fa-times-circle"></i>
    </button>
  ),
  ButtonHapusAkun: () => (
    <button
      type="button"
      className="btn button-danger text-style-button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalHapusAkun"
    >
      <i className="fas fa-times-circle"></i>
    </button>
  ),
};

export default Button;
