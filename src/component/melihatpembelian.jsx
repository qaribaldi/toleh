import { useEffect, useState } from "react";
import CardMelihatPembelian from "./card/cardMelihatPembelian";
import CardSupplier from "./card/cardSupplier";
import { useNavigate, useParams } from "react-router-dom";
import PopupValidasiPembelian from "./popup/popupValidasiPembelian";
import PopupNotif from "./popup/popupNotif";
const Melihatpembelian = () => {
  const navigate = useNavigate();
  const { id_pembelian } = useParams();
  const [pembelian, setPembelian] = useState([]);
  const [supplier, setSupplier] = useState();
  const [popup, setPopup] = useState(false);
  const [popup1, setPopup1] = useState(false);
  const [isiPopup, setIsiPopup] = useState();
  useEffect(() => {
    fetch(
      `http://localhost/tubes/be/get_pembelian_byid.php?id_pembelian=${id_pembelian}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPembelian(data.details);
      })
      .catch((error) => console.error("Error fetching suppliers:", error));

    fetch(
      `http://localhost/tubes/be/get_supplier_byid_pembeli.php?id_pembelian=${id_pembelian}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSupplier(data);
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost/tubes/be/selesai_pembelian.php",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_pembelian: id_pembelian,
          }),
        }
      );
      const data = await response.json();
      setIsiPopup(data.message);
      setPopup(false);
      setPopup1(true);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      <div>
        <div className=" flex ">
          <div className=" bg-white min-h-screen w-20   ">
            <div className="w-full justify-center items-center ">
              <img src="/img/logo.png" alt="" className="w-20" />
            </div>
            <div className="w-full px-1">
              <div className=" p-0.5 w-full bg-black"> </div>
            </div>
            <button
              className="mt-2 flex justify-center p-2  "
              onClick={() => {
                navigate("/kasir");
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000"
                className=" hover:bg-[#3F72AF] p-1 rounded-lg"
              />
            </button>
          </div>
          <div className="p-1 bg-gradient-to-r from-gray-200 to-[#F0F0F0] "></div>
          <div className="bg-[#F0F0F0] w-full min-h-screen flex items-center flex-col">
            <div className=" px-5 py-1 fixed  w-1/2 flex gap-5">
              <label className="input input-bordered flex items-center gap-2 bg-white  w-full shadow-lg">
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
            </div>
            <div className=" overflow-scroll  h-screen flex-col w-full gap-20 p-10">
              {pembelian.map((barang) => (
                <CardMelihatPembelian key={barang.id_barang} barang={barang} />
              ))}
            </div>
          </div>

          <div className="  w-1/2 h-screen  bg-white right-0 flex flex-col p-5 gap-2 ">
            <p className="text-center text-3xl text-black mt-2">
              List Pembelian
            </p>
            <div className="text-black flex  gap-2">
              <div>
                <p>Tanggal Validasi</p>
                <p>Jumlah Barang</p>
                <p>Daftar Supplier</p>
              </div>
              <div>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div>
                <p>Tanggal Validasi</p>
                <p>Jumlah Barang</p>
              </div>
            </div>

            <div className=" overflow-scroll h-full flex flex-col gap-2">
              {supplier &&
                supplier.map((supplier) => (
                  <CardSupplier
                    key={supplier.id_supplier}
                    supplier={supplier}
                  />
                ))}
            </div>
            <div className="  h-1/4w-full p-2">
              <button
                className="bg-[#0065DC] text-white font-bold w-full p-2 rounded-xl"
                onClick={() => {
                  setPopup(true);
                }}
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <PopupValidasiPembelian
          closePopup={() => {
            setPopup(false);
          }}
          isi={"Apakah Anda yakin sudah membeli list barang ini ?"}
          confirm={handleSubmit}
        />
      )}
      {popup1 && (
        <PopupNotif
          closePopup={() => {
            setPopup1(false);
            navigate("/pegawai/pembelian");
          }}
          isi={isiPopup}
        />
      )}
    </>
  );
};

export default Melihatpembelian;
