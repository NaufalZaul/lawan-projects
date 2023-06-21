import React, { useEffect } from 'react';
import '../../styles/login.css';
import SistemLogin from '../../api/sistem_login';

function controlForm() {
  const inputs = document.querySelectorAll(".input");

  inputs.forEach(input => {
    input.addEventListener("focus", (e) => {
      let parent = e.currentTarget.parentNode.parentNode;
      parent.classList.add("focus");

    });

    input.addEventListener("blur", (e) => {
      let parent = e.currentTarget.parentNode.parentNode;
      if (e.currentTarget.value == "") {
        parent.classList.remove("focus");
      }
    });
  });
}

export default function Login() {

  useEffect(() => {
    controlForm()
  })

  return (
    <div class="container-login">
      <div class="img">
        <img src="./images/image-login.jpg" />
      </div>
      <div class="login-content">
        <div className='form'>
          <img className='mb-4 ' src="./images/logo-large.png" />
          <h2 class="mb-3 bold-heading-2">LOGIN PENGELOLA</h2>
          <div class="input-div one text-style-navbar">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
              <h5>Username</h5>
              <input type="text" class="input" id='username' />
            </div>
          </div>
          <div class="input-div pass text-style-navbar">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Password</h5>
              <input type="password" class="input" id='pass' />
            </div>
          </div>
          <button type="submit" className='w-100 mt-3 btn text-style-button button-print' id='login' onClick={() => SistemLogin()}>Login</button>
        </div>
      </div>
    </div>
  )
}
