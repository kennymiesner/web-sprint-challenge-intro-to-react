// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'styled-components' // Allows us to grab info from theme from anywhere in App
import "./index.css";
import App from "./App";
import theme from './theme' // Import global theme styles

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
