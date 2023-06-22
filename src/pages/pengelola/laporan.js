import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { Link } from 'react-router-dom'
import SistemDataPengelola, { hapusDataLaporan } from "../../api/sistem_data_pengelola";
import { Modal } from "../../components/modal";
import StorageImage from "../../api/storage_firebase";

const $ = require('jquery');
$.DataTable = require('datatables.net');



hapusDataLaporan()



function controlTable() {
  setTimeout(() => {
    const table = $('#example').DataTable({
      "columnDefs": [{
        // "orderable": true,
      }],
      // ordering: false,
      paging: true,
      searching: false,
    });

    table.on('order.dt page.dt', () => {
      table.column(0, { order: 'applied', page: 'applied' })
        .nodes()
        .each((cell, count) => {
          cell.innerHTML = count + 1;
        });
    }).draw();

    table.destroy()
  }, 2000)
}

export default function Laporan({ table, page }) {

  const sistemDataPengelola = SistemDataPengelola()
  const storageImage = StorageImage()

  return (
    <div class="container bg-secondary-subtle pt-2">
      <div class="card p-4 m-2">

        <div class="d-flex justify-content-start mb-5">
          <div class=" w-50 input-group me-3">
            <input type="text" class="form-control border-end-0" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span class="input-group-text bg-transparent" id="basic-addon2">
              <i class="fas fa-search"></i>
            </span>
          </div>
          <Button.ButtonUrutkan
            data='nopal' />
        </div>

        <div id="demo_info" class="box"></div>
        <table id="example" class="display table">
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
              sistemDataPengelola.map((value, key) => (value.element.status_laporan == table) ? (
                <tr key={key} className="text-style-paragraf align-middle" id="data-laporan">

                  <Modal.ModalTerima keyData={value.idData} data={value}
                    status={{ status: "diproses" }} />
                  <Modal.ModalTolak keyData={value.idData} data={value}
                    statusData={{ status: "ditolak" }} />
                  <Modal.ModalHapus keyData={value.idData} />

                  <Modal.ModalBerhasil />

                  <td className="text-center" scope='row'>
                    {/* <img className="w-25" src='images/foto.png' alt="" style={{ height: '100px', width: '100px' }} /> */}
                  </td>
                  <td>{value.element.judul_laporan}</td>
                  <td className="text-center">{value.element.jenis_kekerasan}</td>
                  <td className="text-center">{value.element.tanggal_kejadian}</td>
                  {
                    (table == 'ditolak') ? (
                      <td className="text-center d-flex justify-content-evenly">
                        <Link to="/kelola/detail_laporan"
                          state={{
                            detailData: { value }, backpage: page
                          }}>
                          <Button.ButtonDetail />
                        </Link>
                        <Button.ButtonHapus />
                      </td>
                    ) : (table == 'diproses') ? (
                      <td className="text-center d-flex justify-content-evenly">
                        <Link to="/kelola/detail_laporan"
                          state={{
                            detailData: { value }, backpage: page
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
                            detailData: { value }, backpage: page
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

    </div>
  )
};
