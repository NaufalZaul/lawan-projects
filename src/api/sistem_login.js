import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { database } from "./firebase";

// export function SistemLogin() {

//   const username = document.getElementById('username').value;
//   const password = document.getElementById('pass').value;
//   const [isLogin, setIsLogin] = useState(false)

//   const refDB = ref(database, 'polsek/');
//   const dataArr = []
//   // polseklububaja polseklububaja457212

//   onValue(refDB, (dt) => {
//     const data = dt.val();

//     for (const key in data) {
//       if (Object.hasOwnProperty.call(data, key)) {
//         const element = data[key];

//         dataArr.push(element)

//         if (username == element.username && password == element.pass) {
//           console.log('correct account');
//           setIsLogin(true)
//           // window.location.href = `${window.location.origin}/kelola`
//         } else
//           console.log('incorrect account');

//         // if (username !== element.username && password !== element.pass) {
//         //   alert('incorrect account');
//         //   // window.location.href = `${window.location.origin}/login`
//         // }

//         // setIsLogin(true)
//       }
//     }
//   })
//   // console.log(isLogin);
//   // alert('correct account');
//   // return isLogin;
//   return isLogin;
// }
export function sistemLogin(username, password) {
  // // polseklububaja polseklububaja457212

  let loginStatus = false;

  onValue(ref(database, "polsek/"), (dt) => {
    const data = dt.val();

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        if (element.username !== undefined) {
          if (username === element.username && password === element.pass) {
            console.log("correct account");
            loginStatus = true;
            return loginStatus;
          }
        } else {
          console.log("incorrect account");
        }
      }
    }
  });
  return loginStatus;
}

export default function IsLoginStatus() {
  // const [isLogin, setIsLogin] = useState(false)
  // setIsLogin(sistemLogin())
  // console.log(isLogin)
  // return isLogin;
}
