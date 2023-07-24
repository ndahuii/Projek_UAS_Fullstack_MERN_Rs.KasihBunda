import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../context'
import { dataDokter } from '../Helper/dataDokter'

const Form = ({func}) => {
    const [input, setInput] = useState({
      nama: "",
      noHp: "",
      umur: "",
      poli: "",
      dokter: "Dr. Haru Herdiyanto",
      hari: "Senin",
      pembayaran: "Tunai",
    });

    const {setShowAlert, setTextAlert} = useContext(DataContext)

    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(
                  `http://localhost:8082/pasien/${id}`
                );

                setInput(response.data)
            } catch (error) {
                alert("gagal ambil data")
            }
        }

        if(id && func === "EDIT") 
        {
            fetch();
        }
    },[])

    const handleChange = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try
        {
            if (id && func === "EDIT")
            {
                input._id = id
                await axios.post(`http://localhost:8082/pasien/edit`, input);
                setTextAlert("Berhasil Edit Pasien " + input.nama)
            }
            else
            {
              await axios.post("http://localhost:8082/pasien", input);
              setTextAlert("Berhasil Tambah Pasien " + input.nama)
            }
            
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false)
            },5000)
            navigate("/pendaftaran")
        }
        catch
        {
            alert("Gagal Tambah Pasien")
        }
    }

  return (
    <div className="pt-10">
      <div className="lg:max-w-[1000px] mx-auto bg-slate-200 rounded-lg shadow-lg p-3">
        <div>
          <p className="text-black text-center text-3xl font-bold">
            FORM {func}
          </p>
        </div>
        <form action="POST" method="POST" onSubmit={handleSubmit}>
          <div className="flex justify-evenly">
            <div>
              <div className="mb-3">
                <p>Nama :</p>
                <input
                  required
                  className=" py-1 px-2 rounded"
                  type="text"
                  name="nama"
                  value={input.nama}
                  onChange={handleChange}
                  placeholder="Nama"
                />
              </div>
              <div className="mb-3">
                <p>No.Hp :</p>
                <input
                  required
                  className=" py-1 px-2 rounded"
                  type="text"
                  name="noHp"
                  value={input.noHp}
                  onChange={handleChange}
                  placeholder="08XXXXXXXXXX"
                />
              </div>
              <div className="mb-3">
                <p>Umur :</p>
                <input
                  required
                  className=" py-1 px-2 rounded"
                  type="number"
                  name="umur"
                  value={input.umur}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <p>Poli :</p>
                <input
                  required
                  className=" py-1 px-2 rounded"
                  type="text"
                  name="poli"
                  value={input.poli}
                  onChange={handleChange}
                  placeholder="Poli"
                />
              </div>
            </div>

            <div>
              <div className="mb-3">
                <p>Nama Dokter :</p>
                <select
                  name="dokter"
                  id=""
                  value={input.dokter}
                  onChange={handleChange}
                  className="w-48 rounded px-2 py-1"
                >
                    {dataDokter.map((e,i) => {
                        return (
                            <option key={i} value={e.dokter}>{e.dokter}</option>
                        )
                    })}
                </select>
              </div>
              <div className="mb-3">
                <p>Hari :</p>
                <select
                  name="hari"
                  id=""
                  value={input.hari}
                  onChange={handleChange}
                  className="w-48 rounded px-2 py-1"
                >
                  <option value="Senin">Senin</option>
                  <option value="Selasa">Selasa</option>
                  <option value="Rabu">Rabu</option>
                  <option value="Kamis">Kamis</option>
                  <option value="Jum'at">Jum'at</option>
                  <option value="Sabtu">Sabtu</option>
                  <option value="Minggu">Minggu</option>
                </select>
              </div>
              <div className="mb-3">
                <p>Pembayaran :</p>
                <select
                  name="pembayaran"
                  onChange={handleChange}
                  id=""
                  value={input.pembayaran}
                  className="w-48 rounded px-2 py-1"
                >
                  <option value="Tunai">Tunai</option>
                  <option value="BPJS">BPJS</option>
                  <option value="Asuransi">Asuransi</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly mt-10">
            <button
              type="button"
              onClick={() => {
                if (func === "EDIT") {
                  navigate(`/detail-pasien/${id}`);
                } else navigate("/pendaftaran");
              }}
              className="py-2 px-5 rounded-md text-xl font-semibold text-white  shadow-lg hover:-translate-y-1 hover:scale-105 transition duration-300 flex gap-2"
              style={{
                background:
                  "linear-gradient(0deg, rgba(207,77,77,1) 35%, rgba(226,130,130,1) 100%)",
              }}
            >
              Batal
            </button>
            <button
              type="submit"
              className="py-2 px-5 rounded-md text-xl font-semibold text-white  shadow-lg hover:-translate-y-1 hover:scale-105 transition duration-300 flex gap-2"
              style={{
                background:
                  "linear-gradient(0deg, rgba(77,207,77,1) 35%, rgba(165,239,165,1) 100%)",
              }}
            >
              {func === "EDIT" ? "Edit" : "Daftar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form