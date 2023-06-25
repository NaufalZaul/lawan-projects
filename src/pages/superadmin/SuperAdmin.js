import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { Modal } from "../../components/Modal";


import {
  ref,
  onValue,
  child,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { database } from "../../api/firebase";



const $ = require("jquery");
$.DataTable = require("datatables.net");

function controlTable() {
  setTimeout(() => {
    const table = $("#example").DataTable({
      columnDefs: [
        {
          // "orderable": true,
        },
      ],
      // ordering: false,
      paging: true,
      searching: false,
    });

    table
      .on("order.dt page.dt", () => {
        table
          .column(0, { order: "applied", page: "applied" })
          .nodes()
          .each((cell, count) => {
            cell.innerHTML = count + 1;
          });
      })
      .draw();

    table.destroy();
  }, 2000);
}

export default function SuperAdmin() {
  let [dataPengelola, setDataPengelola] = useState([])
  let [dataForModal, setDataForModal] = useState([])

  useEffect(() => {
    onValue(child(ref(database), "polsek/"), (dt) => {
      let dataArr = [];
      dt.forEach((element) => {
        const dataKey = element.key;
        const dataVal = element.val();
        dataArr.push({ idData: dataKey, dataValue: dataVal });
      });
      setDataPengelola(dataArr)
    });
    controlTable()
  }, [])

  return (
    <div className="container bg-secondary-subtle pt-2" >
      <div className="card p-4 m-2">

        <div className="d-flex justify-content-between">
          <Button.ButtonTambahAkun />
          <div className=" w-25 input-group me-3">
            <input
              type="text"
              className="form-control border-end-0"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text bg-transparent" id="basic-addon2">
              <i className="fas fa-search" />
            </span>
          </div>
        </div>

        <div id="demo_info" className="box"></div>
        <table id="example" className="display table">
          <thead className="border-3">
            <tr>
              <th scope="col" className="text-style-button text-center">No</th>
              <th scope="col" className="text-style-button">Akun Pengelola</th>
              <th scope="col" className="text-style-button text-center">Daerah</th>
              <th scope="col" className="text-style-button text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataPengelola.map((data, key) => (
              <tr key={key} className="text-style-paragraf align-middle">
                <td className="text-center">{key + 1}</td>
                <td>{data.dataValue.nama}</td>
                <td className="text-center">{data.dataValue.alamat}</td>
                <td className="text-center d-flex justify-content-evenly">
                  <button
                    type="button"
                    className="btn btn-warning text-style-button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalUbahAkun"
                    onClick={() => setDataForModal(data)}>
                    <i className="fas fa-times-circle"></i>
                  </button>
                  <button
                    type="button"
                    className="btn button-danger text-style-button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalHapusAkun"
                    onClick={() => setDataForModal(data)}>
                    <i className="fas fa-times-circle"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal.ModalTambahAkun />
      <Modal.ModalUbahAkun idData={dataForModal.idData} />
      <Modal.ModalHapusAkun idData={dataForModal.idData} />
      <Modal.ModalBerhasil />
    </div>
  )
}
