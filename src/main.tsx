import { StrictMode } from "react";
import AppProvider from "@/AppProvider.tsx";
import "@/UI/Layout/global.css";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </StrictMode>,
);
