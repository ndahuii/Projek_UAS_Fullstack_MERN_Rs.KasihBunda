import React from 'react'
import { dataDokter } from '../Helper/dataDokter';
import GeneralLayout from '../Layouts/GeneralLayout'

const Dokter = () => {

  return (
    <GeneralLayout>
      <div>
        <div>
          <div className='text-5xl text-center font-semibold mb-10 mt-10'>Daftar Tugas Dokter</div>
          <div className='flex justify-center w-full'>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg lg:min-w-[1100px]">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Poli/Spesialis
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Dokter
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Hari
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Jam
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {dataDokter !== null ? (
                        <>
                        {dataDokter.map((e,i) => {
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
                                  {e.spesialis}
                                </th>
                                <td class="px-6 py-4">{e.dokter}</td>
                                <td class="px-6 py-4">{e.hari}</td>
                                <td class="px-6 py-4">{e.jam}</td>
                              </tr>
                            );

                        } )}
                        </>
                    ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Dokter