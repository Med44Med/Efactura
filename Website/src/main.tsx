import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ConfigContextProvider from './context/configContext';
import AuthProvider from './components/AuthProvider';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ConfigContextProvider>
  </StrictMode>
);
