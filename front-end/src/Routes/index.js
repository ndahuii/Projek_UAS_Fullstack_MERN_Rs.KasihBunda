import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateManagement from "../context";
import Beranda from "../Pages/Beranda";
import DetailPasien from "../Pages/DetailPasien";
import Dokter from "../Pages/Dokter";
import Form from "../Pages/Form";
import Pendaftaran from "../Pages/Pendaftaran";
import TentangKami from "../Pages/TentangKami";

const Router = () => {
  return (
    <BrowserRouter>
      <StateManagement>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/dokter" element={<Dokter />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/tambah-pasien" element={<Form func="DAFTAR" />} />
          <Route path="/edit-pasien/:id" element={<Form func="EDIT" />} />
          <Route path="/detail-pasien/:id" element={<DetailPasien />} />
        </Routes>
      </StateManagement>
    </BrowserRouter>
  );
};

export default Router;
