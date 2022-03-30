import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  < MoralisProvider serverUrl="https://bdyir3ngauv6.usemoralis.com:2053/server" appId="ut3Icy6uM55LLdHwrW0q2dCrtLqyJYkjCHbGxoJu">
    <App />
  </ MoralisProvider > ,
  document.getElementById('root')
);
