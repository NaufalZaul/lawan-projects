import { ref, get, child } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { database } from "./firebase";

// const refDBPolsek = ref(database, 'polsek/');
// const refDBAkses = ref(database, 'polsek/akses/');

function GetPengelola() {
  // const [isDataPengelola, setIsDataPengelola] = useState(['haloo']);
  // const refDB = ref(database);
  const dataArr = [];
  // polseklububaja polseklububaja457212

  get(child(ref(database), "polsek/")).then((data) => {
    const dataPengelola = data.val();

    for (const key in dataPengelola) {
      if (Object.hasOwnProperty.call(dataPengelola, key)) {
        const element = dataPengelola[key];
        dataArr.push(element);
      }
    }
  });

  // console.log(dataArr);
  return dataArr;

  // console.log(isDataPengelola);

  // onValue(refDB, (dt) => {
  //   const data = dt.val();

  //   for (const key in data) {
  //     if (Object.hasOwnProperty.call(data, key)) {
  //       const element = data[key];
  //       const newData = {
  //         idData: key,
  //         element: element
  //       }
  //       dataArr.push(newData)
  //     }
  //   }
  // })
  // console.log('ini data pengelola')

  // return dataArr;
}

function addPengelola(username, pass) {
  // set(refDBAkses, + v4()), {
  //   username: username, //nama polsek
  //   pass: pass,
  // }
}

// function updateUsernamePengelola(dataOld, newUsername) {
//   console.log(dataOld);
// }

export { GetPengelola, addPengelola };
