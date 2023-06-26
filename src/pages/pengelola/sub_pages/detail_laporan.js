import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import StorageImage from "../../../api/storage_firebase";
import Button from "../../../components/Button";
import { Modal } from "../../../components/Modal";
import PrintPDF from "../../../components/Printpdf";
import jsPDF from "jspdf";
import { Icon } from "@iconify/react";
const storageImage = StorageImage();

export default function DetailLaporan() {

  const { state } = useLocation();
  const templateRef = useRef(null)

  const handlePDF = () => {
    console.log('sedang download');
    const doc = new jsPDF({
      format: 'a1',
      unit: 'px'
    })

    doc.html(templateRef, {
      async callback(doc) {
        await doc.save('document')
      }
    })
  }

  return (
    <div className="w-100 container bg-secondary-subtle p-3 row justify-content-center mx-0">
      <div className="col-7 d-flex flex-column justify-content-between bg-white p-4">
        <div className="">
          <Link to={`/kelola/laporan-${state.defaultUrl}`}
            state={{
              defaultUrl: state.defaultUrl,
              isLogin: state.isLogin,
              userLoginName: state.userLoginName
            }}>
            <button type="submit" className="border-0 bg-transparent mb-5 label">
              <i className="fas fa-arrow-circle-left me-2"></i>
              Kembali
            </button>
          </Link>
          <h4 className="semi-heading-2">{state.detailData.dataValue.judul_laporan}</h4>
          <ul className="d-flex justify-content-between my-4 p-0">
            <li className="list-group-item">
              <p className="bold-paragraf mb-1">Jenis Kekerasan</p>
              <p className="paragraf">{state.detailData.dataValue.jenis_kekerasan}</p>
            </li>
            <li className="list-group-item">
              <p className="bold-paragraf mb-1">Lokasi Kejadian</p>
              <p className="paragraf">{state.detailData.dataValue.lokasi_kejadian}</p>
            </li>
            <li className="list-group-item">
              <p className="bold-paragraf mb-1">Tanggal Kejadian</p>
              <p className="paragraf">{state.detailData.dataValue.tanggal_kejadian}</p>
            </li>
          </ul>
          <div className="">
            <p className="bold-paragraf mb-1">Deskripsi</p>
            <p className="paragraf">{state.detailData.dataValue.isi_laporan}</p>
          </div>
        </div>
        <div className="row row-cols-4 my-5 mx-0">
          <img src={storageImage[1]} alt="" className="my-2" />
          <img src={storageImage[1]} alt="" className="my-2" />
          <img src={storageImage[1]} alt="" className="my-2" />
          <img src={storageImage[1]} alt="" className="my-2" />
          <img src={storageImage[1]} alt="" className="my-2" />
          <img src={storageImage[1]} alt="" className="my-2" />
          <img src={storageImage[1]} alt="" className="my-2" />
        </div>

        {state.detailData.dataValue.status_laporan === "diterima" ? (
          <div className="d-flex justify-content-between">
            <Button.ButtonTerima text="Terima" />
            {/* <Button.ButtonDownload text="PDF" download={() => handlePDF()} /> */}
            <button type="submit"
              className="btn button-print text-style-button"
              onClick={() => handlePDF()}>
              PDF
              <Icon icon="fluent:document-pdf-20-regular" width="20" height="20" className="ms-2" />
            </button>

            <Button.ButtonTolak text="Tolak" />
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            {/* <Button.ButtonDownload data={state.detailData} /> */}
            <Button.ButtonDownload text="PDF" download={() => handlePDF()} />
          </div>
        )}
      </div>
      <div className="col-4 bg-blue text-white">
        <div className="text-center my-4">
          <img className="" src={storageImage[2]} alt="" width="100px" height="100px" />
        </div>
        <table className="table table-borderless">
          <thead></thead>
          <tbody className="text-white">
            <tr>
              <td>Nama</td>
              <td colSpan={2}>: {state.detailData.dataValue.nama}</td>
            </tr>
            <tr>
              <td>Usia</td>
              <td colSpan={2}>: {state.detailData.dataValue.usia}</td>
            </tr>
            <tr>
              <td>Telp</td>
              <td colSpan={2}>: {state.detailData.dataValue.telp}</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td colSpan={2}>: {state.detailData.dataValue.alamat}</td>
            </tr>
          </tbody>
        </table>
      </div>


      <div ref={templateRef}>
        <PrintPDF />
      </div>

      <Modal.ModalTerima
        keyData={state.detailData.idData}
        status={{ status_laporan: "diproses" }}
      />

      <Modal.ModalTolak
        keyData={state.detailData.idData}
        status={{ status_laporan: "ditolak" }}
      />

      <Modal.ModalBerhasil />
    </div>
  );
}
