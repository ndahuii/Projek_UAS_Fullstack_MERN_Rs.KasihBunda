import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5';
import { TiSocialInstagram } from "react-icons/ti";
import { RiHospitalLine, RiMailLine, RiSendToBack } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import FotoRs from "../Assets/img/fotoRs.jpg"
import FotoDokter from "../Assets/img/dokter.png"
import Dna from "../Assets/img/dna.png"
import Micr from "../Assets/img/micr.png"
import Stet from "../Assets/img/stet.png"
import GeneralLayout from '../Layouts/GeneralLayout'

const Beranda = () => {
    const navigate = useNavigate()
  return (
    <GeneralLayout>
      <div>
        <div
          className="w-full h-[400px] bg-no-repeat bg-cover bg-bottom"
          style={{
            backgroundImage: "url(" + FotoRs + ")",
          }}
        >
          <div className="flex justify-end pt-32 px-[100px]">
            <div
              className="w-max p-5 py-8"
              style={{ background: "rgba(39, 187, 245, 0.60)" }}
            >
              <p className="font-semibold">
                Percayakan Kesehatan Anda Pada Dokter Kami
              </p>
              <p className="text-white text-3xl">Peduli Pada Kesehatan Anak.</p>
              <p className="text-white text-3xl mb-7">
                Jaga Kesehatan Anak Anda.
              </p>
              <button
                onClick={() => navigate("/pendaftaran")}
                className="border border-white px-4 py-2 text-white flex gap-3 hover:scale-x-110 transition duration-300"
              >
                Daftar Segera!{" "}
                <span className="self-center pt-1">
                  <IoArrowForwardOutline />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <p className="text-center my-10 font-bold text-black text-4xl">
                Kenapa Kami?
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div
                className="w-[350px] h-[250px] text-white p-5"
                style={{ background: "rgba(131, 220, 255, 1)" }}
              >
                <p className="text-2xl font-bold mb-4">Dokter Berpengalaman</p>
                <p className="mb-4">
                  Kami memiliki banyak dokter yang berpengalaman di bidangnya,
                  dan juga lulusan terbaik dari pendidikannya
                </p>
                <button
                  onClick={() => navigate("/dokter")}
                  className="border border-white px-4 py-2 text-white flex gap-3 hover:scale-x-110 transition duration-300"
                >
                  Lihat Daftar Dokter{" "}
                  <span className="self-center pt-1">
                    <IoArrowForwardOutline />
                  </span>
                </button>
              </div>
              <div
                className="w-[350px] h-[250px] text-white p-5"
                style={{ background: "rgba(91, 207, 253, 1)" }}
              >
                <p className="text-2xl font-bold mb-4">Pelayanan 24 Jam</p>
                <p>
                  Kami siap melayani anda 24 jam dalam seminggu, kami selalu
                  menyediakan pelayanan baik dalam situasi gawat darurat atau
                  normal, sehingga kami menjamin kesehatan anda kapanpun,
                  kecuali kalau sudah azal kami hanya bisa berusaha semaksimal
                  mungkin
                </p>
              </div>
              <div
                className="w-[350px] h-[250px] text-white p-5"
                style={{ background: "rgba(24, 188, 252, 1)" }}
              >
                <p className="text-2xl font-bold mb-4">Fasilitas Canggih</p>
                <p>
                  Rumah Sakit Kasih Bunda memiliki fasilitas dan peralatan yang
                  canggih yang dapat menunjang efisiensi perobatan yang
                  dilakukan
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#a1e3f7] mt-20 flex justify-start">
          <div>
            <img src={FotoDokter} alt="dokter" />
          </div>
          <div className="py-10  flex flex-col gap-10">
            <p className="text-3xl font-semibold text-center">
              Melayani kebutuhan kesehatan anda adalah <br /> prioritas kami
            </p>
            <p className="w-[600px] text-center">
              Konsultasi dengan dokter kami, kami akan memberikan yang terbaik
              untuk kesehatan anda, jaga kesehatanmu dan lindungi masa depanmu
            </p>
            <div className="flex justify-center gap-6">
              <img src={Dna} alt="dna" className="w-32 h-32" />
              <img src={Stet} alt="stet" className="w-32 h-32" />
              <img src={Micr} alt="mic" className="w-28 h-32" />
            </div>
          </div>
        </div>
        <div className="mt-32">
          <div className="flex justify-center gap-5">
            <div className="border border-slate-300 min-h-[400px] w-[350px]">
              <div className="flex justify-center pt-10">
                <span className="text-center text-4xl mx-auto">
                  <RiMailLine />
                </span>
              </div>
              <p className="text-2xl font-semibold text-center mb-10">Email</p>
              <ul className="list-disc ps-20 pe-5 font-semibold text-sm">
                <li>staff@kasihbunda.com</li>
                <li>pendaftaran@kasihbunda.com</li>
                <li>customer.service@kasihbunda.com</li>
              </ul>
            </div>
            <div className="border border-slate-300 min-h-[400px] w-[350px]">
              <div className="flex justify-center pt-10">
                <span className="text-center text-4xl mx-auto">
                  <RiHospitalLine />
                </span>
              </div>
              <p className="text-2xl font-semibold text-center mb-10">Alamat</p>
              <ul className="list-disc pe-5 font-semibold text-sm ps-20">
                <li>jln A.Yamin | Pekanbaru</li>
                <li>jln Sudirman | Tangerang</li>
                <li>jln Soekarna-hatta | Jakarta Utara</li>
                <li>jln Nangka | Denpasar</li>
                <li>jln Ring Road | Pontianak</li>
                <li>jln Soetomo | Bandung</li>
              </ul>
            </div>
            <div className="border border-slate-300 min-h-[400px] w-[350px]">
              <div className="flex justify-center pt-10">
                <span className="text-center text-4xl mx-auto">
                  <RiSendToBack />
                </span>
              </div>
              <p className="text-2xl font-semibold text-center mb-10">Cabang</p>
              <p className="ps-10 pe-5 font-semibold text-sm">
                Pekanbaru | Tangerang | Jakarta Utara | Denpasar | Pontianak |
                Bandung
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <footer className="bg-gray-900 py-4 text-white">
            <div className="px-[100px] flex justify-between">
              <p>
                ©️ Indonesia 2023 | Created by : Indah & Novi | All Right Reserved
              </p>
              <div>
                <a
                  href="https://www.instagram.com/ndahuii"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-3xl text-slate-300">
                    <TiSocialInstagram />
                  </span>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Beranda