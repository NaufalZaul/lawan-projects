import { ref, get, child } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { useEffect, useState } from "react";
import "../../styles/login.css";
import { database } from "../../api/firebase";
import { Link } from "react-router-dom";

function controlForm() {
  const inputs = document.querySelectorAll(".input");

  inputs.forEach(input => {
    input.addEventListener("focus", (e) => {
      let parent = e.currentTarget.parentNode.parentNode;
      parent.classList.add("focus");

    });

    input.addEventListener("blur", (e) => {
      let parent = e.currentTarget.parentNode.parentNode;
      if (e.currentTarget.value === "") {
        parent.classList.remove("focus");
      }
    });
  });
}

export default function Login() {

  const [isUsername, setIsUsername] = useState('')
  const [isPass, setIsPass] = useState('')
  const [isLogin, setIsLogin] = useState({
    loginStatus: false,
    userLoginName: '',
    navigateTo: '/login'
  })

  useEffect(() => {
    get(child(ref(database), 'polsek/'))
      .then(e => {
        const datas = e.val()
        for (const key in datas) {
          if (Object.hasOwnProperty.call(datas, key)) {
            const element = datas[key];
            if (isUsername === element.username && isPass === element.pass) {
              setIsLogin({
                loginStatus: true,
                userLoginName: element.nama,
                navigateTo: '/kelola'
              })
            } else {
              get(child(ref(database), 'superadmin/'))
                .then(e => {
                  const datasSPA = e.val()
                  if (isUsername === datasSPA.username && isPass === datasSPA.pass) {
                    setIsLogin({
                      loginStatus: true,
                      userLoginName: datasSPA.nama,
                      navigateTo: '/kelola/superadmin'
                    })
                  }
                })
            }
          } else {
            setIsLogin({
              loginStatus: false
            })
          }
        }
      })
  }, [isUsername, isPass])

  controlForm()

  return (
    <div className="container-login">
      <div className="img">
        <img src="./images/image-login.jpg" alt="" />
      </div>
      <div className="login-content">
        <div className='form'>
          <img className='mb-4 ' src="./images/logo-large.png" alt="" />
          <h2 className="mb-3 bold-heading-2">LOGIN PENGELOLA</h2>
          <div className="input-div one text-style-navbar">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <h5>Username</h5>
              <input type="text" className="input" id='username'
                onChange={(val) => {
                  setIsUsername(val.target.value)
                }} />
            </div>
          </div>
          <div className="input-div pass text-style-navbar">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <h5>Password</h5>
              <input type="password" className="input" id='pass'
                onChange={(val) => {
                  setIsPass(val.target.value)
                }}
              />
            </div>
          </div>
          <Link to={isLogin.loginStatus === false ?
            isLogin.navigateTo : isLogin.navigateTo}
            state={{
              isLogin: isLogin.loginStatus,
              defaultUrl: 'dashboard',
              userLoginName: isLogin.userLoginName
            }}
            className='w-100 mt-3 btn text-style-button button-print'
            id='login'>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
