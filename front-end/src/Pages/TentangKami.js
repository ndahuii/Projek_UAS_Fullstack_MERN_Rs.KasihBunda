import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nurse from "../Assets/img/nurse.jpg"
import Ig from "../Assets/img/ig.png"
import Tw from "../Assets/img/tw.png"
import Wa from "../Assets/img/wa.png"
import GeneralLayout from '../Layouts/GeneralLayout'

const TentangKami = () => {
    const navigate = useNavigate()
  return (
    <GeneralLayout>
      <div className="bg-[#dfe8f7] min-h-[96vh] flex justify-center">
        <div className="self-center flex gap-32">
          <div className="max-w-[700px]">
            <div>
              <p className="font-semibold text-4xl mb-10">Tentang Kami</p>
              <p>
              Kami bertekad menjadi penyedia jasa layanan kesehatan bagi yang terkemuka dibidangnya. 
              Dengan kepercayaan yang Anda berikan kepada kami, disertai dengan kompetensi, kapabilitas 
              dan kapasitas kami sebagai profesional dibidang kesehatan, maka hal tersebut adalah kesempatan 
              terbaik bagi kami. RS Kasih Bunda didirikan sebagai inisiatif swasta yang melihat kekosongan 
              ruang dalam layanan kesehatan terpadu di Indonesia, kami memberikan pelayanan kesehatan secara 
              paripurna serta memberikan rasa nyaman bagi pasien secara langsung maupun keluarga. Selain 
              didukung oleh sarana fisik yang terbaik, kami juga memiliki tenaga medis yang berkompetensi 
              dibidangnya. Dengan kelebihan dalam pelayanan yangkami berikan, maka RS Kasih Bunda menjadi 
              prioritas pilihan bagi Anda yang membutuhkan jasa pelayanan kesehatan yang lebih baik, 
              memberikan rasa nyaman serta berkualitas bagi Anda serta Keluarga Anda.
              </p>
              <button
                onClick={() => navigate("/")}
                className="mt-10 bg-slate-600 py-1 px-10 text-white font-semibold hover:scale-110 transition duration-300"
              >
                Beranda
              </button>
              <div className="flex gap-2 pt-7">
                <a
                  href="https://www.instagram.com/novick_/"
                  className="flex h-max"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <img src={Ig} alt="s" className="h-16 p-0" />{" "}
                </a>
                <a href="htt" className="" rel="noreferrer" target="_blank">
                  {" "}
                  <img src={Tw} alt="s" className="h-16" />{" "}
                </a>
                <a
                  href="https://wa.link/o0nckl"
                  className=""
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <img src={Wa} alt="s" className="h-16" />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end min-w-[300px]">
            <img src={Nurse} alt="nurse" className="h-[400px]" />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default TentangKami