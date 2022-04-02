import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  < MoralisProvider serverUrl="https://piwhmoitousi.usemoralis.com:2053/server" appId="CAj0GwMIlqrbHbzDUw8SurLsCAn3BGOXI2DKTThX">
    <App />
  </ MoralisProvider > ,
  document.getElementById('root')
);
