import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Link, useLocation } from 'react-router-dom'
import { Modal } from "../../components/Modal";
import { Icon } from '@iconify/react'
import { ref, onValue, child } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { database } from "../../api/firebase";
import StorageImage from "../../api/storage_firebase";

const storageImage = StorageImage()

const $ = require('jquery');
$.DataTable = require('datatables.net');
// import StorageImage from "../../api/storage_firebase";


function controlTable() {
  setTimeout(() => {
    const table = $('#example').DataTable({
      "columnDefs": [{
        // "orderable": true,
      }],
      // ordering: false,
      paging: true,
      // searching: false,
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

export default function Laporan() {
  const { state } = useLocation()
  const [dataLaporan, setDataLaporan] = useState([])
  const [dataToModal, setDataToModal] = useState([])



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
              <Icon icon="carbon:search" width="20" height="20" />
            </span>
          </div>
          <Button.ButtonUrutkan
            data='nopal' />
        </div>
        <h3 class="semi-heading-3 text-capitalize">Laporan {state.defaultUrl}</h3>
        <div id="demo_info" className="box"></div>
        <table id="example" className="display table">
          <thead className="border-3">
            <tr>
              <th scope="col" className="text-style-button text-center">
                <Icon icon="iconamoon:profile-circle-bold" width="22" height="22" />
              </th>
              <th scope="col" className="text-style-button">Judul Laporan</th>
              <th scope="col" className="text-style-button text-center">Jenis Kekerasan</th>
              <th scope="col" className="text-style-button text-center">Tanggal Laporan</th>
              <th scope="col" className="text-style-button text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {
              dataLaporan.map((data, key) =>
                (data.dataValue.status_laporan === state.defaultUrl) ? (
                  <tr key={key} className="text-style-paragraf align-middle" id="data-laporan">
                    <td className="text-center">
                      <img className="profile-image" src={storageImage.arrProfil[2]} alt="" width="80px" height="80px" />
                    </td>
                    <td>{data.dataValue.judul_laporan}</td>
                    <td className="text-center">{data.dataValue.jenis_kekerasan}</td>
                    <td className="text-center">{data.dataValue.tanggal_kejadian}</td>
                    {
                      (state.defaultUrl === 'ditolak') ? (
                        <td className="text-center d-flex justify-content-evenly">
                          <Link to="/kelola/detail-laporan"
                            state={{
                              detailData: data,
                              defaultUrl: state.defaultUrl,
                              isLogin: state.isLogin,
                              userLoginName: state.userLoginName
                            }}>
                            <Button.ButtonDetail />
                          </Link>
                          <Button.ButtonHapus data={() => setDataToModal(data)} />
                        </td>
                      ) : (state.defaultUrl === 'diproses') ? (
                        <td className="text-center d-flex justify-content-evenly">
                          <Link to="/kelola/detail-laporan"
                            state={{
                              detailData: data,
                              defaultUrl: state.defaultUrl,
                              isLogin: state.isLogin,
                              userLoginName: state.userLoginName
                            }}>
                            <Button.ButtonDetail />
                          </Link>
                          <Button.ButtonTolak data={() => setDataToModal(data)} />
                          <Button.ButtonSelesai data={() => setDataToModal(data)} />

                        </td>
                      ) : (
                        <td className="text-center">
                          <Link to="/kelola/detail-laporan"
                            state={{
                              detailData: data,
                              defaultUrl: state.defaultUrl,
                              isLogin: state.isLogin,
                              userLoginName: state.userLoginName
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

      <Modal.ModalSelesai keyData={dataToModal.idData} status={{ status_laporan: "selesai" }} />
      <Modal.ModalTolak keyData={dataToModal.idData} status={{ status_laporan: "ditolak" }} />
      <Modal.ModalHapus keyData={dataToModal.idData} />
      <Modal.ModalBerhasil />

    </div>
  )
};
