import {
  ref,
  onValue,
  set,
  child,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { database } from "./firebase";

export function updateDataLaporan(dataId, dataPengelola, status) {
  set(child(ref(database), "laporan/" + dataId), {
    id_pelapor: dataPengelola.id_pelapor,
    id_polsek: dataPengelola.id_polsek,
    isi_laporan: dataPengelola.isi_laporan,
    jenis_kekerasan: dataPengelola.jenis_kekerasan,
    judul_laporan: dataPengelola.judul_laporan,
    lokasi_kejadian: dataPengelola.lokasi_kejadian,
    status_laporan: status.status,
    tanggal_kejadian: dataPengelola.tanggal_kejadian,
    unggah_bukti: dataPengelola.unggah_bukti,
  }).then((e) => console.log("success"));
}

export function hapusDataLaporan(dataId) {
  set(child(ref(database), "laporan/" + dataId), {});
}

export default function SistemDataPengelola() {
  const dataArr = [];
  const refDB = ref(database, "laporan/");

  // polseklububaja polseklububaja457212

  onValue(refDB, (dt) => {
    const data = dt.val();

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        const newData = {
          idData: key,
          element: element,
        };
        dataArr.push(newData);
      }
    }
  });
  return dataArr;
}
