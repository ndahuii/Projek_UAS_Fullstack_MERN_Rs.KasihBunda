import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { IoAddCircleSharp, IoInformationCircleOutline, IoWarningOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import GeneralLayout from '../Layouts/GeneralLayout';

const Pendaftaran = () => {
    const [data, setData] = useState(null);
    const [fetchData, setFetchData] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const fetch = async () => {
            try
            {
                const response = await axios.get("http://localhost:8082/pasien",)
                setData(response.data)
                console.log(response.data)
            }
            catch
            {
                alert("gagal menampilkan data")
            }
        }

        if(fetchData)
        {
            fetch()
            setFetchData(false)
        }
    },[fetchData])

  return (
    <GeneralLayout>
      <div>
        <div>
          <div className="text-5xl text-center font-semibold mb-4 mt-10">
            Daftar Pasien
          </div>
          <div className="flex justify-center mb-10">
            <div className="max-w-[700px] lg:min-w-[1000px] flex justify-end">
              <button
              onClick={() => navigate("/tambah-pasien")}
                className="py-2 px-5 rounded-md text-xl font-semibold text-white  shadow-lg hover:-translate-y-1 hover:scale-105 transition duration-300 flex gap-2"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(77,207,77,1) 35%, rgba(165,239,165,1) 100%)",
                }}
              >
                Tambah Pasien
                <span className='self-center'>
                  <IoAddCircleSharp />
                </span>{" "}
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg lg:min-w-[1100px]">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Nama
                    </th>
                    <th scope="col" class="px-6 py-3">
                      No.Hp
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Umur
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Poli Tujuan
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Dokter
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Hari Kunjungan
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Jenis Pembayaran
                    </th>
                    <th scope="col" class="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {data !== null ? (
                    <>
                      {data.map((e, i) => {
                        return (
                          <tr
                            key={i}
                            class={` ${
                              i % 2 === 0 ? "bg-slate-300" : "bg-slate-100"
                            } border-b text-black`}
                          >
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium whitespace-nowrap text-black"
                            >
                              {e.nama}
                            </th>
                            <td class="px-6 py-4">{e.noHp}</td>
                            <td class="px-6 py-4">{e.umur} Tahun</td>
                            <td class="px-6 py-4">{e.poli}</td>
                            <td class="px-6 py-4">{e.dokter}</td>
                            <td class="px-6 py-4">{e.hari}</td>
                            <td class="px-6 py-4">{e.pembayaran}</td>
                            <td class="px-6 py-4">
                              <button
                              onClick={() => navigate(`/detail-pasien/${e._id}`)}
                                className="flex gap-1 rounded-lg px-3 py-1 text-white shadow-lg hover:-translate-y-1 hover:scale-105 transition duration-300"
                                style={{
                                  background:
                                    "linear-gradient(0deg, rgba(77,115,207,1) 35%, rgba(130,158,226,1) 100%)",
                                }}
                              >
                                <span className="self-center pt-1">
                                  <IoInformationCircleOutline />
                                </span>{" "}
                                detail
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  ) : 
null}
                </tbody>
              </table>
              {data == null || data.length === 0 ? (
                <>
                <div className='bg-red-300 py-3 flex justify-center gap-2'>
                    <span className='self-center pt-1'><IoWarningOutline /></span>
                    <p className='text-xl'>Tidak ada data Pasien</p>
                </div>
                </>
              ) :null}
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Pendaftaran