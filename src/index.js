import React from "react";
import ReactDom from "react-dom";
import App1 from "./App1";
import index from './index.css'
import {BrowserRouter} from 'react-router-dom';
ReactDom.render(
      <>
      <BrowserRouter>
         <App1 />
      </BrowserRouter>
      </>,
document.getElementById("root")
	);