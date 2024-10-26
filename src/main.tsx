import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ZodiacContextProvider from "./context/ZodiacContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ZodiacContextProvider>
      <App />
    </ZodiacContextProvider>
  </StrictMode>,
);
