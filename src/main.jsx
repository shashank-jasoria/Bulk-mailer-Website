import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/theme.css";
import "./styles/site.css";
import NotificationProvider from "./context/notifications/NotificationProvider";
import ToastContainer from "./context/notifications/toast/ToastContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
      <ToastContainer />
    </NotificationProvider>
  </React.StrictMode>,
);
