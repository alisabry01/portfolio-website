import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { LangProvider } from "@/providers";
import { router } from "@/router";
import "@/globals.css";
import "@/lib/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  </StrictMode>,
);
