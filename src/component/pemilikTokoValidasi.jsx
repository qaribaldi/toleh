import { useEffect, useState } from "react";
import CardValidasi from "./card/cardValidasi";
import { useParams } from "react-router-dom";
import PopupValidasiPembelian from "./popup/popupValidasiPembelian";
import PopupNotif from "./popup/popupNotif";
const PemilikTokoValidasi = () => {
  const [popup, setPopup] = useState(false);
  const [popup1, setPopup1] = useState(false);
  const [isiPopup, setIsiPopup] = useState("");
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  const { id_pembelian } = useParams();

  const [details, setDetails] = useState([]);
  const [statusPembelian, setStatusPembelian] = useState("Tervalidasi");
  const [pembelian, setPembelian] = useState({
    pembelian: {
      id_pembelian: "1",
      jumlah_barang: "3",
      harga_total: "136000",
      status: "Menunggu",
      tanggal_pembelian: "2024-07-16 13:55:32",
    },
    details: [
      {
        id_pembelian: "1",
        id_barang: "16",
        harga_barang: "85000",
        jumlah: "1",
      },
    ],
  });

  useEffect(() => {
    fetch(
      `http://localhost/tubes/be/get_pembelian_byid.php?id_pembelian=${id_pembelian}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPembelian(data);
        setDetails(
          data.details.map((item) => ({ ...item, status: item.status === "1" }))
        );
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);
  const handleCheckboxChange = (id_barang) => {
    setDetails(
      details.map((item) =>
        item.id_barang === id_barang ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleSubmit = async () => {
    try {
      const updatedDetails = details.map((item) => ({
        id_barang: item.id_barang,
        status: item.status ? "1" : "0",
        harga_barang: item.harga_barang,
      }));

      const response = await fetch(
        "http://localhost/tubes/be/validasi_pembelian.php",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_pembelian: pembelian.pembelian.id_pembelian,
            status: statusPembelian,
            details: updatedDetails,
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
  const totalHargaStatusTrue = details.reduce((total, item) => {
    if (item.status) {
      return total + item.harga_barang * item.jumlah;
    }
    return total;
  }, 0);

  return (
    <>
      <div>
        <div className=" flex ">
          <div className="w-20 bg-white shadow-lg">
            <img src="/img/logo.png" alt="" />
            <div className="w-full px-1">
              <div className=" p-0.5 w-full bg-black"> </div>
            </div>
            <button className="mt-2 flex justify-center p-2  ">
              <img
                src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000"
                className=" hover:bg-[#3F72AF] p-1 rounded-lg "
              />
            </button>
          </div>
          <div className="bg-[#F0F0F0] w-full min-h-screen flex items-center flex-col">
            <div className=" px-5 py-1 fixed  w-1/2 flex gap-5 ">
              <label className="input input-bordered flex items-center gap-2 bg-white opacity-50 w-full :bg-black">
                <input type="text" className="grow" placeholder="Search " />
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
            <div className=" overflow-auto  h-screen flex-col w-full gap-20 p-10">
              {details.map((barang) => (
                <CardValidasi
                  key={barang.id_barang}
                  barang={barang}
                  handleCheckboxChange={handleCheckboxChange}
                  status={pembelian.pembelian.status}
                />
              ))}
            </div>
          </div>

          {pembelian.pembelian.status === "Terbeli" ? (
            <div className=" w-2/5 h-screen bg-slate-500 right-0 flex flex-col">
              <div className="bg-white min-h-screen flex flex-col  text-black">
                <div className="p-5 ">
                  <p className="text-center text-xl font-bold">
                    {pembelian.pembelian.tanggal_pembelian}
                  </p>
                </div>
                <div className="flex p-5 h-full items-end">
                  <div>
                    <p>Jumlah Harga Total</p>
                    <p>Jumlah Total Barang</p>
                  </div>
                  <div className="px-1">
                    <p>:</p>
                    <p>:</p>
                  </div>
                  <div className="px-1">
                    <p>{formatRupiah(totalHargaStatusTrue)}</p>
                    <p>{details.filter((item) => item.status).length}</p>
                  </div>
                </div>
                <div className="flex p-4 "></div>
              </div>
            </div>
          ) : (
            <div className=" w-2/5 min-h-screen bg-slate-500 right-0 flex flex-col">
              <div className="bg-white min-h-screen flex flex-col justify-end text-black">
                <div className="flex p-5">
                  <div>
                    <p>Jumlah Harga Total</p>
                    <p>Jumlah Total Barang</p>
                  </div>
                  <div className="px-1">
                    <p>:</p>
                    <p>:</p>
                  </div>
                  <div className="px-1">
                    <p>{formatRupiah(totalHargaStatusTrue)}</p>
                    <p>{details.filter((item) => item.status).length}</p>
                  </div>
                </div>
                <div className="flex p-4 ">
                  <button
                    className="bg-[#0065DC] w-full p-2 rounded-md text-white"
                    onClick={() => {
                      setPopup(true);
                    }}
                  >
                    {" "}
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {popup && (
        <PopupValidasiPembelian
          closePopup={() => {
            setPopup(false);
          }}
          isi={"Apakah Anda yakin ingin memvalidasi list pembelian ini ?"}
          confirm={handleSubmit}
        />
      )}
      {popup1 && (
        <PopupNotif
          closePopup={() => {
            setPopup1(false);
          }}
          isi={isiPopup}
        />
      )}
    </>
  );
};

export default PemilikTokoValidasi;
