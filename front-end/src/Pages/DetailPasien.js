import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { IoChevronBackSharp, IoPencilSharp, IoTrashSharp } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import ModalConfirm from '../Components/ModalConfirm';
import { DataContext } from '../context';

const DetailPasien = () => {
    const [data, setData] = useState(null)
    const [fetchData, setFetchData] = useState(true)
    const [modalShow, setModalShow] = useState(false)

       const { setShowAlert, setTextAlert } = useContext(DataContext);

    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const fetch = async () => {
            try
            {
                const response = await axios.get(`http://localhost:8082/pasien/${id}`)
                setData(response.data)
            }
            catch
            {
                alert("Gagal Mengambil Data")
            }
        }

        if(fetchData)
        {
            fetch();
            setFetchData(false)
        }
    },[fetchData])

    const handleDelete = async () => {
        try
        {
            await axios.delete(`http://localhost:8082/pasien/${id}`)
          setTextAlert(`Berhasil Hapus Pasien ${data.nama}`)
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(false)
          },5000)
            navigate("/pendaftaran")
        }catch
        {
            alert("Gagal Hapus Data!")
        }
    }

  return (
    <div className="pt-10">
        {modalShow ? <ModalConfirm setModalShow={setModalShow} text={`Hapus Pasien ${data?.nama}`} funcConfirm={handleDelete} /> : null}
      <div className="lg:max-w-[1000px] mx-auto bg-slate-200 rounded-lg shadow-lg p-3">
        <div>
          <button onClick={() => navigate("/pendaftaran")}>
            <span className="h-20 w-20 text-3xl">
              <IoChevronBackSharp height={30} width={30} />
            </span>
          </button>
        </div>
        <div className='px-10'>
        <div>
          <p>Nama: {data?.nama}</p>
        </div>
        <div>
          <p>No.Hp: {data?.noHp}</p>
        </div>
        <div>
          <p>Umur: {data?.umur} Tahun</p>
        </div>
        <div>
          <p>Poli: {data?.poli}</p>
        </div>
        <div>
          <p>Dokter: {data?.dokter}</p>
        </div>
        <div>
          <p>Hari: {data?.hari}</p>
        </div>
        <div>
          <p>Pembayaran: {data?.pembayaran}</p>
        </div>
        </div>
        <div className="flex justify-evenly p-2">
          <button
          onClick={() => setModalShow(true)}
            className="px-3 py-3 rounded-full text-xl font-semibold text-white shadow-lg hover:-translate-y-1 hover:scale-105 transition duration-300 flex gap-2"
            style={{
              background:
                "linear-gradient(0deg, rgba(207,77,77,1) 35%, rgba(226,130,130,1) 100%)",
            }}
          >
            <IoTrashSharp />
          </button>
          <button
            onClick={() => navigate(`/edit-pasien/${data?._id}`)}
            className="px-6 py-2 rounded font-semibold text-white self-center shadow-lg hover:-translate-y-1 hover:scale-105 transition duration-300 flex gap-2"
            style={{
              background:
                "linear-gradient(0deg, rgba(77,207,77,1) 35%, rgba(165,239,165,1) 100%)",
            }}
          >
            <span className="self-center">
              <IoPencilSharp />{" "}
            </span>
            <span className="self-center">Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPasien