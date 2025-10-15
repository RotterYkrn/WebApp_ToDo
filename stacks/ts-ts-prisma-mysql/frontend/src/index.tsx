import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

const appRoot = document.getElementById("app-root");
if (appRoot) {
    const root = ReactDOM.createRoot(appRoot);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
} else {
    throw new Error("Failed to find the app root element.");
}
