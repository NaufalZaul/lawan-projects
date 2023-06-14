import { ref, onValue } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js'
import { database } from './firebase';


export default function SistemDataPengelola() {
  const dataArr = []
  const refDB = ref(database, 'laporan/');

  // polseklububaja polseklububaja457212

  onValue(refDB, (dt) => {
    const data = dt.val();
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        dataArr.push(element)
      }
    }
  })
  return dataArr;
};
