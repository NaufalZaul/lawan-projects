import { ref, onValue, set, push } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js'
import { database } from './firebase';
import { v4 } from 'uuid';


// const refDBPolsek = ref(database, 'polsek/');
// const refDBAkses = ref(database, 'polsek/akses/');

function getPengelola() {
  const dataArr = [];
  const refDB = ref(database, 'polsek/');

  // polseklububaja polseklububaja457212

  onValue(refDB, (dt) => {
    const data = dt.val();

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        const newData = {
          idData: key,
          element: element
        }
        dataArr.push(newData)
      }
    }
  })
  console.log(1)
  return dataArr;
}

function addPengelola(username, pass) {
  // set(refDBAkses, + v4()), {
  //   username: username, //nama polsek
  //   pass: pass,
  // }
}

function updateUsernamePengelola(dataOld, newUsername) {
  console.log(dataOld);
}

export { getPengelola, addPengelola };