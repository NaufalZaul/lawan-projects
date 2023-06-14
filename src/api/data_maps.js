import { ref, onValue } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js'
import { database } from './firebase';


export default function DataMaps() {
  const refDB = ref(database, 'polsek/');
  const dataArr = []
  // polseklububaja polseklububaja457212

  onValue(refDB, (dt) => {
    const data = dt.val();

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        dataArr.push({
          alamat: element.alamat,
          maps: element.maps,
          nama: element.nama,
          telp: element.telp,
        })
      }
    }
  })

  return dataArr;
}

