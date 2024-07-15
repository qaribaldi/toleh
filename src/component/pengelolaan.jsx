import { useNavigate, useSearchParams } from "react-router-dom";
import CardPengelolaan from "./card/cardPengelolaan";
import { useEffect, useState } from "react";
import Tambahbarang from "./tambahBarang";
import PopupTambahBarang from "./popup/popupTambangBarang";
const Pengelolaan = () => {
  const navigate = useNavigate();
  const [tambahBarang, setTambahBarang] = useState(false);
  const [barang, setBarang] = useState([]);
  useEffect(() => {
    fetch("http://localhost/tubes/be/get_barang.php")
      .then((response) => response.json())
      .then((data) => setBarang(data))
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  return (
    <>
      <div>
        <div className=" flex ">
          <div className=" bg-white h-screen  w-20   ">
            <div className="w-full justify-center items-center ">
              {" "}
              <img src="../img/logo.png" alt="" className="w-20" />
            </div>
            <div className="w-full px-1">
              <div className=" p-0.5 w-full bg-black"> </div>
            </div>
            <button
              className="mt-2 flex justify-center p-2  "
              onClick={() => {
                navigate("/pegawai");
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000"
                className=" hover:bg-[#3F72AF] p-1 rounded-lg"
              />
            </button>
          </div>
          <div className="p-1 bg-gradient-to-r from-gray-200 to-[#F0F0F0] "></div>
          <div className="bg-[#F0F0F0] w-full h-screen  flex items-center flex-col">
            <div className=" px-5 py-1 fixed  w-1/2 flex gap-5 ">
              <label className="input input-bordered flex items-center gap-2 bg-white shadow-xl w-full">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <button
                className="bg-white rounded-md p-1 w-fit shadow-lg text-black font-bold"
                onClick={() => {
                  setTambahBarang(true);
                }}
              >
                Tambah barang
              </button>
            </div>
            <div className="overflow-auto   flex-col w-full gap-20 p-10 ">
              {barang.map((barang) => (
                <CardPengelolaan
                  key={barang.id_barang}
                  nama={barang.nama_barang}
                  jual={barang.harga_jual}
                  beli={barang.harga_beli}
                  supplier={barang.id_supplier}
                  id_barang={barang.id_barang}
                />
              ))}
            </div>
          </div>
          <div className=" flex flex-col items-center h-screen w-2/5  px-5 bg-white">
            {tambahBarang && <Tambahbarang />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pengelolaan;
