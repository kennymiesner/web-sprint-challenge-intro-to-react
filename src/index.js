// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
// Allows us to grab info from theme from anywhere in App
import { ThemeProvider } from 'styled-components'
import "./index.css";
import App from "./App";
// Import global theme styles
import theme from './theme' 

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
