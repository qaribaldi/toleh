import { useEffect, useState } from "react";
import PopupDeleteBarang from "../popup/popupDeleteBarang";
import PopupNotif from "../popup/popupNotif";
import { useNavigate } from "react-router-dom";

const CardPengelolaan = ({
  nama,
  beli,
  jual,
  supplier,
  id_barang,
  stok,
  edit,
  change,
}) => {
  const navigate = useNavigate();
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
  const [namaSupplier, setNamaSupplier] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost/tubes/be/get_supplier_byid.php?id_supplier=${supplier}`
    )
      .then((response) => response.json())
      .then((data) => setNamaSupplier(data.nama_supplier))
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, [supplier]);

  const handleSubmit = (e) => {
    setPopup(false);
    setPopup1(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("id_barang", id_barang);

    fetch("http://localhost/tubes/be/delete_barang.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setIsiPopup(data.error);
        } else {
          setIsiPopup(data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="bg-white shadow-xl rounded-md mt-10 flex">
        <div className="p-2 w-1/3 flex">
          <div
            className="w-full h-[150px] bg-cover rounded-md"
            style={{
              backgroundImage: `url( ${
                "http://localhost/tubes/be/foto/" + id_barang + ".png"
              })`,
            }}
          ></div>
        </div>
        <div className="w-full">
          <div className="w-full flex items-center">
            <p className="text-3xl font-bold mt-2 text-black w-full">{nama}</p>
            <div className="pe-10 w-full">
              <p className="w-full text-end text-black text-xl">
                {stok + " Kg"}
              </p>
            </div>
          </div>
          <div className="px-5 w-full text-lg flex ">
            <div className="flex gap-2 w-full text-black">
              <div>
                <p className="text-lg mt-5">Harga beli </p>
                <p className="text-lg">Harga jual </p>
                <p className="text-lg mb-5">Supplier </p>
              </div>
              <div>
                <p className="text-lg mt-5">: </p>
                <p className="text-lg">:</p>
                <p className="text-lg mb-5">: </p>
              </div>
              <div>
                <p className="text-lg mt-5">{formatRupiah(beli)} </p>
                <p className="text-lg">{formatRupiah(jual)}</p>
                <p className="text-lg mb-5">{namaSupplier} </p>
              </div>
            </div>
            <div>
              <div
                className=" flex flex-col p-3 gap-2 justify-end h-full
          "
              >
                <button
                  className="p-1 px-3 bg-[#0065DC] hover:bg-[#112D4E] w-full rounded-md text-white font-bold"
                  onClick={edit}
                >
                  Edit
                </button>
                <button
                  className="p-1 px-3 bg-black w-full rounded-md text-white font-bold"
                  onClick={() => {
                    setPopup(true);
                  }}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <PopupDeleteBarang
          isi={"Apakah Anda Yakin ingin menghapus barang ini"}
          closePopup={() => {
            setPopup(false);
          }}
          confirm={handleSubmit}
        />
      )}
      {popup1 && (
        <PopupNotif
          isi={isiPopup}
          closePopup={() => {
            setPopup1(false);
            change();
            navigate("/pegawai/pengelolaan");
          }}
        />
      )}
    </>
  );
};

export default CardPengelolaan;
