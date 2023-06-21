import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { Link } from 'react-router-dom'
import { Modal } from "../../components/modal";
import { addPengelola, getPengelola } from "../../api/sistem_pengelola";




const $ = require('jquery');
$.DataTable = require('datatables.net');


export function controlTable() {
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

const dataGetPengelola = getPengelola()
// console.log(dataGetPengelola);

export default function SuperAdmin({ table, page }) {


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
              <th scope="col" className="text-style-button">Akun Pengelola</th>
              <th scope="col" className="text-style-button text-center">Daerah</th>
              <th scope="col" className="text-style-button text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>

      <Modal.ModalTerima />
      <Modal.ModalTolak />
      <Modal.ModalKonfirmasi />

    </div>
  )
};
            // {/* {
            //   dataGetPengelola.map((value, key) => (
            //     <tr key={key} className="text-style-paragraf align-middle" id="data-laporan">

            //       <td className="text-center">{key + 1}</td>
            //       <td>{value.nama}</td>
            //       <td className="text-center">{value.alamat}</td>
            //       <td className="text-center d-flex justify-content-evenly">
            //         {/* <Link to="/kelola/detail_laporan"
            //           state={{
            //             detailData: sistemDataPengelola[key], backpage: page
            //           }}>
            //         </Link> */}
            //         <Button.ButtonPrint />
            //         <Button.ButtonTolak />
            //       </td>
            //     </tr>
            //   ))
            // } */}
