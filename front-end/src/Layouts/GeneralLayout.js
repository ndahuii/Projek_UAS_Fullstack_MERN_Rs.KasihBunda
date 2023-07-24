import React from 'react'
import { dataNavbar } from '../Helper/dataNavbar';
import Logo from "../Assets/img/logors.png"
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../context';
import Alert from '../Components/Alert';

const GeneralLayout = (props) => {

    const { showAlert, setShowAlert } = useContext(DataContext);
    const navigate = useNavigate()
    const location = useLocation().pathname;

  return (
    <div>
        {showAlert ? <Alert /> : null}
      <div
        className="py-2 px-20 ps-36 flex justify-between fixed top-0 left-0 right-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(77,139,207,1) 35%, rgba(0,212,255,1) 100%)",
        }}
      >
        <div className="flex gap-3">
          <img src={Logo} alt="logo" className="h-12 w-12 rounded-full" />
          <p className="self-center font-bold text-3xl text-white">
            RS KASIH BUNDA
          </p>
        </div>
        <div className="flex">
          <div className="flex self-center">
            <ul className="flex gap-7 self-center">
              {dataNavbar.map((item) => {
                return (
                  <li
                    onClick={() => navigate(item.link)}
                    className={`${
                      item.link === location
                        ? "text-white scale-110 border-b border-yellow-300"
                        : "text-slate-200"
                    } self-center font-semibold hover:scale-110 transition duration-300 hover:cursor-pointer hover:text-white px-2`}
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className='pt-8'>{props.children}</div>
    </div>
  );
}

export default GeneralLayout