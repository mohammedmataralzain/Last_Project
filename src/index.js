import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
import { AppProvider} from "./contexts/ModelContext";
import { JobsProvider } from "./contexts/JobsContext";
import AuthProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <AppProvider>
        <JobsProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </JobsProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
