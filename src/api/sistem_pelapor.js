import { ref, onValue, set, get, child, remove } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js'
import { database } from "./firebase";


export function getDataPelapor(idData) {
  get(ref(child(database, 'laporan/' + idData)))
    .then(e => {
      console.log(e);
    })
}