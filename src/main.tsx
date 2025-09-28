import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Welcome from "@/pages/Welcome";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
