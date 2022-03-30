import React from 'react';
import { Navbar, Welcome, Transactions, Loader, Services, Footer } from './components';
// import { useMoralis } from "react-moralis";

const  App = () => {

  // const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  // const login = async () => {
  //   if (!isAuthenticated) {

  //     await authenticate({signingMessage: "Log in using Moralis" })
  //       .then(function (user) {
  //         console.log("logged in user:", user);
  //         // console.log(user!.get("ethAddress"));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // }

  // const logOut = async () => {
  //   await logout();
  //   console.log("logged out");
  // }

  // gradient-bg-welcome
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
      </div>
      <Welcome />
      <Loader />
      {/* <div class="sticky inset-x-0 top-0 left-0 bg-gray-400 py-5">Menu</div> */}
      <Loader />
      <Loader />
    </div>
  );
}
export default App




// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

// export default App
