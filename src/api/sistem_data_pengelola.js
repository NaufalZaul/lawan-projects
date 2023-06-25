import {
  ref,
  onValue,
  set,
  child,
  update
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { database } from "./firebase";

export function updateDataLaporan(dataId, dataPengelola, status) {
  console.log(dataId, status);
  update(child(ref(database), "laporan/" + dataId), {
    //   status_laporan: status.status,
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
