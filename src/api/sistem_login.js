import { ref, onValue } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js'
import { database } from './firebase';


export default async function SistemLogin() {

  const username = document.getElementById('username').value;
  const password = document.getElementById('pass').value;

  const refDB = ref(database, 'polsek/');
  const dataArr = []
  // polseklububaja polseklububaja457212

  onValue(refDB, (dt) => {
    const data = dt.val();

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];

        dataArr.push(element)

        if (username == element.username && password == element.pass) {
          console.log('correct account');
          window.location.href = `${window.location.origin}/kelola`
        } else
          console.log('incorrect account');
      }
    }
  })

  return dataArr;
}

