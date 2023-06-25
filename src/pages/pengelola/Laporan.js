import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Link, useLocation } from 'react-router-dom'
import { Modal } from "../../components/Modal";
import {
  ref,
  onValue,
  child,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { database } from "../../api/firebase";
const $ = require('jquery');
$.DataTable = require('datatables.net');
// import SistemDataPengelola, { hapusDataLaporan } from "../../api/sistem_data_pengelola";
// import StorageImage from "../../api/storage_firebase";


// function controlTable() {
//   setTimeout(() => {
//     const table = $('#example').DataTable({
//       "columnDefs": [{
//         // "orderable": true,
//       }],
//       // ordering: false,
//       paging: true,
//       searching: false,
//     });

//     table.on('order.dt page.dt', () => {
//       table.column(0, { order: 'applied', page: 'applied' })
//         .nodes()
//         .each((cell, count) => {
//           cell.innerHTML = count + 1;
//         });
//     }).draw();

//     table.destroy()
//   }, 2000)
// }

export default function Laporan({ table, page }) {
  console.log(useLocation());
  // const storageImage = StorageImage()
  const [dataLaporan, setDataLaporan] = useState([])

  useEffect(() => {
    onValue(child(ref(database), "laporan/"), (dt) => {
      let dataArr = [];
      dt.forEach((element) => {
        const dataKey = element.key;
        const dataVal = element.val();
        dataArr.push({ idData: dataKey, dataValue: dataVal });
      });
      setDataLaporan(dataArr)
    });
    // controlTable()
  }, [])
  return (
    <div className="container bg-secondary-subtle pt-2">
      <div className="card p-4 m-2">

        <div className="d-flex justify-content-start mb-5">
          <div className=" w-50 input-group me-3">
            <input type="text" className="form-control border-end-0" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span className="input-group-text bg-transparent" id="basic-addon2">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <Button.ButtonUrutkan
            data='nopal' />
        </div>

        <div id="demo_info" className="box"></div>
        <table id="example" className="display table">
          <thead className="border-3">
            <tr>
              <th scope="col" className="text-style-button text-center">No</th>
              <th scope="col" className="text-style-button">Judul Laporan</th>
              <th scope="col" className="text-style-button text-center">Jenis Kekerasan</th>
              <th scope="col" className="text-style-button text-center">Tanggal Laporan</th>
              <th scope="col" className="text-style-button text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {
              dataLaporan.map((data, key) =>
                (data.dataValue.status_laporan === table) ? (
                  <tr key={key} className="text-style-paragraf align-middle" id="data-laporan">
                    <td className="text-center">
                      <img className="w-25 profile-image" src='images/foto.png' alt="" />
                    </td>
                    <td>{data.dataValue.judul_laporan}</td>
                    <td className="text-center">{data.dataValue.jenis_kekerasan}</td>
                    <td className="text-center">{data.dataValue.tanggal_kejadian}</td>
                    {
                      (table === 'ditolak') ? (
                        <td className="text-center d-flex justify-content-evenly">
                          <Link to="/kelola/detail_laporan"
                            state={{
                              detailData: data.dataValue, backpage: page
                            }}>
                            <Button.ButtonDetail />
                          </Link>
                          <Button.ButtonHapus />
                        </td>
                      ) : (table === 'diproses') ? (
                        <td className="text-center d-flex justify-content-evenly">
                          <Link to="/kelola/detail_laporan"
                            state={{
                              detailData: data.dataValue, backpage: page
                            }}>
                            <Button.ButtonDetail />
                          </Link>
                          <Button.ButtonTolak />
                          <Button.ButtonTerima />

                        </td>
                      ) : (
                        <td className="text-center">
                          <Link to="/kelola/detail_laporan"
                            state={{
                              detailData: data.dataValue, backpage: page
                            }}>
                            <Button.ButtonDetail />
                          </Link>

                        </td>
                      )
                    }
                  </tr>
                ) : '')
            }

          </tbody>
        </table>
      </div>

      {/* <Modal.ModalTerima /> */}
      <Modal.ModalTolak />
      <Modal.ModalBerhasil />
      {/* <Modal.ModalTerima keyData={data.idData} data={data.dataValue}
        status={{ status: "diproses" }} />
      <Modal.ModalTolak keyData={data.idData} data={data.dataValue}
        statusData={{ status: "ditolak" }} />
      <Modal.ModalHapus keyData={data.idData} />

      <Modal.ModalBerhasil />
 */}

    </div>
  )
};
