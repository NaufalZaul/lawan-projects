import React, { createContext, useContext, useEffect, useState } from 'react';
import '../../styles/login.css';
import { sistemLogin } from '../../api/sistem_login';
import { Link, Navigate, Route, redirect, useLocation } from 'react-router-dom';



const fakeAuth = {
  isAunthenticated: false,
  signing(cb) {
    fakeAuth.isAunthenticated = true;
    setTimeout(cb, 100); //fake async
  },
  signout(cb) {
    fakeAuth.isAunthenticated = false;
    setTimeout(cb, 100) //fake async
  }
}

const authContext = createContext();

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signing = cb => {
    return fakeAuth.signing(() => {
      setUser("user");
      cb();
    })
  }

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    })
  }

  return (user, signing, signout)
}

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

function useAuth() {
  return useContext(authContext);
}

function AuthButton() {
  let auth = useAuth()
  return auth.user ? (
    <p>Welcome!
      <button onClick={() => {
        auth.signout(() => window.location.href = window.location.origin)
      }} type="submit">Logout</button>
    </p>
  ) : (
    <p>not login</p>
  )
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}


function LoginPage() {
  let location = useLocation();
  let auth = useAuth()

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      // history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}




// function controlForm() {
//   const inputs = document.querySelectorAll(".input");

//   inputs.forEach(input => {
//     input.addEventListener("focus", (e) => {
//       let parent = e.currentTarget.parentNode.parentNode;
//       parent.classList.add("focus");

//     });

//     input.addEventListener("blur", (e) => {
//       let parent = e.currentTarget.parentNode.parentNode;
//       if (e.currentTarget.value == "") {
//         parent.classList.remove("focus");
//       }
//     });
//   });
// }


export default function Login({ statusLogin }) {
  //   const [isUsername, setIsUsername] = useState('s')
  //   const [isPass, setIsPass] = useState('s')
  //   const [isLogin, setIsLogin] = useState(statusLogin)

  //   useEffect(() => {
  //     controlForm()
  //   })


  //   return (
  //     <div className="container-login">
  //       <div className="img">
  //         <img src="./images/image-login.jpg" />
  //       </div>
  //       <div className="login-content">
  //         <div className='form'>
  //           <img className='mb-4 ' src="./images/logo-large.png" />
  //           <h2 className="mb-3 bold-heading-2">LOGIN PENGELOLA</h2>
  //           <div className="input-div one text-style-navbar">
  //             <div className="i">
  //               <i className="fas fa-user"></i>
  //             </div>
  //             <div className="div">
  //               <h5>Username</h5>
  //               <input type="text" className="input" id='username'
  //                 onChange={(val) => {
  //                   setIsUsername(val.target.value)
  //                 }} />
  //             </div>
  //           </div>
  //           <div className="input-div pass text-style-navbar">
  //             <div className="i">
  //               <i className="fas fa-lock"></i>
  //             </div>
  //             <div className="div">
  //               <h5>Password</h5>
  //               <input type="password" className="input" id='pass'
  //                 onChange={(val) => {
  //                   setIsPass(val.target.value)
  //                 }}
  //               />
  //             </div>
  //           </div>
  //           <Link to={isLogin == false ? '/login' : '/kelola'}
  //             state={{ isLogin: isLogin }}>
  //             <button type="submit" className='w-100 mt-3 btn text-style-button button-print' id='login'
  //               onClick={() => sistemLogin(isUsername, isPass)}
  //             >Login</button>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   )
}
