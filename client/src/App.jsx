import React from 'react';
import { Navbar, Welcome, Transactions, Loader, Services, Footer } from './components';
import { useMoralis } from "react-moralis";


const  App = () => {

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

///  moralis login  ////
// import './App.css';

// function App() {
//     const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
//     const login = async () => {
//         if (!isAuthenticated) {
//             await authenticate({ signingMessage: "Log in using Moralis" })
//                 .then(function (user) {
//                 console.log("logged in user:", user);
//                 console.log(user.get("ethAddress"));
//             })
//                 .catch(function (error) {
//                 console.log(error);
//             });
//         }
//     };
//     const logOut = async () => {
//         await logout();
//         console.log("logged out");
//     };
//     return (<div>
//       <h1>Moralis Hello World!</h1>
//       <button onClick={login}>Moralis Metamask Login</button>
//       <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
//     </div>);
// }
// export default App;




///login-web3 LAVA UI
// const  App = () => {

//   // gradient-bg-welcome
//   return (
//     <div className="min-h-screen">
//       <div className="gradient-bg-welcome">
//       <Navbar />
//       <Welcome />
//       </div>
//       <Welcome />
//       <Loader />
//       {/* <div class="sticky inset-x-0 top-0 left-0 bg-gray-400 py-5">Menu</div> */}
//       <Loader />
//       <Loader />
//     </div>
//   );
// }
// export default App