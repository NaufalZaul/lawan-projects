import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { Link } from 'react-router-dom'
import { Modal } from "../../components/modal";
import { addPengelola, GetPengelola } from "../../api/sistem_pengelola";


import { ref, onValue, set, get, child, push } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js'
import { database } from "../../api/firebase";

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




class SuperAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: []
    }
  }

  componentDidMount() {
    onValue(child(ref(database), "polsek/"), (dt) => {
      let dataArr = [];
      dt.forEach(element => {
        const dataKey = element.key;
        const dataVal = element.val();
        dataArr.push({ "idData": dataKey, "dataValue": dataVal })
      });
      this.setState({ tableData: dataArr })
    })
  }

  render() {
    console.log(this.state.tableData)
    return (
      <div className="container bg-secondary-subtle pt-2" >
        <div className="card p-4 m-2">

          <div className="d-flex justify-content-between">
            <Button.ButtonTambahAkun />
            <div className=" w-50 input-group me-3">
              <input type="text" className="form-control border-end-0" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span className="input-group-text bg-transparent" id="basic-addon2">
                <i className="fas fa-search"></i>
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
              {
                this.state.tableData.map((data, key) => (
                  <tr className="text-style-paragraf align-middle" >
                    <Modal.ModalTambahAkun />
                    <Modal.ModalUbahAkun keyData={data.idData} />
                    <Modal.ModalHapusAkun keyData={data.idData} />
                    <Modal.ModalBerhasil />
                    <td className="text-center">{key + 1}</td>
                    <td>{data.dataValue.nama}</td>
                    <td className="text-center">{data.dataValue.alamat}</td>
                    <td className="text-center d-flex justify-content-evenly">
                      <Button.ButtonUbahAkun />
                      <Button.ButtonHapusAkun />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default SuperAdmin;
















// export default function SuperAdmin() {
//   return (
//     <div className="container bg-secondary-subtle pt-2" >
//       <div className="card p-4 m-2">

//         <div className="d-flex justify-content-start mb-5">
//           <div className=" w-50 input-group me-3">
//             <input type="text" className="form-control border-end-0" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
//             <span className="input-group-text bg-transparent" id="basic-addon2">
//               <i className="fas fa-search"></i>
//             </span>
//           </div>
//           {/* <button type="submit" onClick={() => hahaha()}>haha</button> */}
//           <Button.ButtonUrutkan data='nopal' />
//         </div>

//         <div id="demo_info" className="box"></div>
//         <table id="example" className="display table">
//           <thead className="border-3">
//             <tr>
//               <th scope="col" className="text-style-button text-center">No</th>
//               <th scope="col" className="text-style-button">Akun Pengelola</th>
//               <th scope="col" className="text-style-button text-center">Daerah</th>
//               <th scope="col" className="text-style-button text-center">Aksi</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               dataGetPengelola.map((value, key) => (
//                 <tr key={key} className="text-style-paragraf align-middle" id="data-laporan">

//                   <td className="text-center">{key + 1}</td>
//                   <td>{value.element.nama}</td>
//                   <td className="text-center">{value.element.alamat}</td>
//                   <td className="text-center d-flex justify-content-evenly">
//                     {/* <Link to="/kelola/detail_laporan"
//           state={{
//             detailData: sistemDataPengelola[key], backpage: page
//           }}>
//         </Link> */}
//                     <Button.ButtonPrint />
//                     <Button.ButtonTolak />
//                   </td>
//                 </tr>
//               ))
//             }

//           </tbody>
//         </table>
//       </div>

//       <Modal.ModalTerima />
//       <Modal.ModalTolak />
//       <Modal.ModalBerhasil />

//     </div>
//   )
// }

