import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./contexts/BackgroundProvider";
import CurrentUserProvider from "./contexts/currentUserProvider";
import AxiosWrapper from "./utils/AxiosWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AxiosWrapper>
      <CurrentUserProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </CurrentUserProvider>
    </AxiosWrapper>
  </BrowserRouter>
);
