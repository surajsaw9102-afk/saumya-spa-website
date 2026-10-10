import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet";
import { GlobalContextProviders } from "../components/_globalContextProviders";
import HomePage from "../pages/_index";
import ServicesPage from "../pages/services";
import MassagePage from "../pages/services.massage";
import AboutPage from "../pages/about";
import GalleryPage from "../pages/gallery";
import ContactPage from "../pages/contact";
import BookPage from "../pages/book";
import "../base.css";

function App() {
  return <HelmetProvider><BrowserRouter><GlobalContextProviders><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/services/massage" element={<MassagePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/book" element={<BookPage />} />
    <Route path="*" element={<HomePage />} />
  </Routes></GlobalContextProviders></BrowserRouter></HelmetProvider>;
}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
