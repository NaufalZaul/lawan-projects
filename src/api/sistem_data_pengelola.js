import {
  ref,
  set,
  child,
  update
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { database } from "./firebase";

export function updateDataLaporan({ keyData, status }) {
  update(child(ref(database), "laporan/" + keyData), {
    status_laporan: status.status_laporan,
  }).then(() => console.log("success"));
}

export function hapusDataLaporan(dataId) {
  set(child(ref(database), "laporan/" + dataId), {});
}
