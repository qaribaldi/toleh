import { useEffect, useState } from "react";
import CardPenjualan from "./card/cardPenjualan";
import CardPenjualanKeranjang from "./card/cardPenjualanKeranjang";
import PopupPenjualan from "./popup/popupPenjualan";
import { useNavigate } from "react-router-dom";
import CardPembelian from "./card/cardPembelian";
import CardPembelianKeranjang from "./card/cardPembelianKeranjang";
import PopupTambahPembelian from "./popup/popupTambahBarang";
import PopupNotif from "./popup/popupNotif";

const Pembelian = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [popup1, setPopup1] = useState(false);
  const [isiPopup, setIsiPopup] = useState(true);
  const [barang, setBarang] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  useEffect(() => {
    const fetchData = async () => {
      let url = `http://localhost/tubes/be/get_barang.php`;
      if (searchTerm) {
        url += `?search_term=${searchTerm}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setBarang(data);
      } catch (error) {
        console.error("Error fetching barang:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const [keranjang, setKeranjang] = useState({});

  const tambahkanKeKeranjang = (barang) => {
    if (keranjang[barang.id_barang]) {
      // Jika barang sudah ada di keranjang, tambahkan jumlahnya
      setKeranjang({
        ...keranjang,
        [barang.id_barang]: {
          ...barang,
          jumlah: keranjang[barang.id_barang].jumlah + 1,
        },
      });
    } else {
      // Jika barang belum ada di keranjang, tambahkan sebagai baru dengan jumlah 1
      setKeranjang({
        ...keranjang,
        [barang.id_barang]: {
          ...barang,
          jumlah: 1,
        },
      });
    }
  };

  const kurangiJumlahItem = (barang) => {
    if (keranjang[barang.id_barang].jumlah > 1) {
      setKeranjang({
        ...keranjang,
        [barang.id_barang]: {
          ...keranjang[barang.id_barang],
          jumlah: keranjang[barang.id_barang].jumlah - 1,
        },
      });
    } else {
      // Jika jumlah barang tinggal 1, hapus dari keranjang
      const updatedKeranjang = { ...keranjang };
      delete updatedKeranjang[barang.id_barang];
      setKeranjang(updatedKeranjang);
    }
  };

  const updateJumlahItem = (barang, jumlah) => {
    if (jumlah >= 0) {
      setKeranjang({
        ...keranjang,
        [barang.id_barang]: {
          ...barang,
          jumlah: jumlah,
        },
      });
    } else {
      const updatedKeranjang = { ...keranjang };
      delete updatedKeranjang[barang.id_barang];
      setKeranjang(updatedKeranjang);
    }
  };

  const keranjangItems = Object.values(keranjang);
  const totalHarga = keranjangItems.reduce((total, item) => {
    return total + parseInt(item.harga_beli) * item.jumlah;
  }, 0);

  const handleCheckout = async () => {
    const keranjangFinal = Object.values(keranjang).map((item) => {
      return {
        id_barang: item.id_barang,
        jumlah: item.jumlah,
      };
    });
    const data = {
      barang: keranjangFinal,
    };

    const response = await fetch("http://localhost/tubes/be/pembelian.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    setPopup(true);
    if (result.status === "success") {
      setIsiPopup(result.message);
      setPopup(false);
      setPopup1(true);
      setKeranjang({});
    } else {
      setIsiPopup(result.message);
      setPopup(false);
      setPopup1(true);
      setKeranjang({});
    }
  };

  const closePopup = () => {
    setPopup(false);
    setKeranjang({});
  };

  return (
    <>
      <div className="">
        <div className=" flex ">
          <div className=" bg-white min-h-screen w-20   ">
            <div className="w-full justify-center items-center ">
              <img src="/img/logo.png" alt="" />
            </div>
            <div className="w-full px-1">
              <div className=" p-0.5 w-full bg-black"> </div>
            </div>
            <button
              className="mt-2 flex justify-center p-2  "
              onClick={() => {
                navigate("/pegawai/pembelian");
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
            <div className=" px-5 py-1 fixed  w-1/2 ">
              <label className="input input-bordered flex items-center gap-2 bg-white shadow-xl">
                <input
                  type="text"
                  className="grow"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
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
            <div className="overflow-auto h-screen grid grid-cols-3 w-full  gap-5 p-3 pt-20  ">
              {barang.map((barang) => (
                <CardPenjualan
                  key={barang.id_barang}
                  barang={barang}
                  tambahkanKeKeranjang={tambahkanKeKeranjang}
                  keranjang={keranjang}
                  kurangiJumlahItem={kurangiJumlahItem}
                  pembelian={true}
                  updateJumlahItem={updateJumlahItem}
                />
              ))}
            </div>
          </div>
          <div className="p-1 bg-gradient-to-l from-gray-200 to-[#F0F0F0]  "></div>
          <div className=" h-screen flex  w-1/2 bg-white flex-col ">
            <div className="overflow-auto h-3/4 flex flex-col gap-2 ">
              {keranjangItems.map((barang) => (
                <CardPembelianKeranjang
                  key={barang.id_barang}
                  barang={barang}
                />
              ))}
            </div>
            <div className=" flex flex-col justify-center  h-1/3 w-full  px-5">
              <div className="flex w-full  ">
                <div className="w-full">
                  <p className="text-black text-xl">Jumlah Barang</p>
                </div>
                <div className="">
                  <p className="text-black text-xl">{keranjangItems.length}</p>
                </div>
              </div>
              <div className="p-1">
                <div className=" w-full h-1 bg-black "></div>
              </div>
              <div className="flex w-full  ">
                <div className="w-full">
                  <p className="text-black text-xl">Total</p>
                </div>
                <div className="">
                  <p className="text-[#0065DC] text-xl font-bold">
                    {formatRupiah(totalHarga)}
                  </p>
                </div>
              </div>
              <button
                className="p-5 bg-[#0065DC]  w-full rounded-lg mt-2 text-white"
                onClick={() => {
                  setPopup(true);
                }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      {popup && keranjangItems.length > 0 && (
        <PopupTambahPembelian
          closePopup={closePopup}
          confirm={handleCheckout}
          isi={"Anda yakin ingin menambah list pembelian ini?"}
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

export default Pembelian;
