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
  const [filteredPembelian, setFilteredPembelian] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
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
        setFilteredPembelian(data.details); // Set default filtered data
      })
      .catch((error) => console.error("Error fetching pembelian:", error));

    fetch(
      `http://localhost/tubes/be/get_supplier_byid_pembeli.php?id_pembelian=${id_pembelian}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSupplier(data);
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, [id_pembelian]);

  const handleSupplierChange = (supplier) => {
    // Deselect the previously selected supplier
    if (
      selectedSupplier &&
      selectedSupplier.id_supplier === supplier.id_supplier
    ) {
      setSelectedSupplier(null);
      setFilteredPembelian(pembelian); // Show all pembelian if no supplier is selected
    } else {
      setSelectedSupplier(supplier);
      // Filter pembelian based on the selected supplier
      const filtered = pembelian.filter(
        (item) => item.id_supplier === supplier.id_supplier
      );
      setFilteredPembelian(filtered);
    }
  };

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
      console.log(data);
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
        <div className="flex">
          <div className="bg-white min-h-screen w-20">
            <div className="w-full justify-center items-center">
              <img src="/img/logo.png" alt="" className="w-20" />
            </div>
            <div className="w-full px-1">
              <div className="p-0.5 w-full bg-black"></div>
            </div>
            <button
              className="mt-2 flex justify-center p-2"
              onClick={() => {
                navigate("/pegawai/pembelian");
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000"
                className="hover:bg-[#3F72AF] p-1 rounded-lg"
              />
            </button>
          </div>
          <div className="p-1 bg-gradient-to-r from-gray-200 to-[#F0F0F0]"></div>
          <div className="bg-[#F0F0F0] w-full min-h-screen flex items-center flex-col">
            <div className="overflow-scroll h-screen flex-col w-full gap-20 p-10">
              {filteredPembelian.map((barang) => (
                <CardMelihatPembelian key={barang.id_barang} barang={barang} />
              ))}
            </div>
          </div>

          <div className="w-1/2 h-screen bg-white right-0 flex flex-col p-5 gap-2">
            <p className="text-center text-3xl text-black mt-2">
              List Pembelian
            </p>
            <div className="text-black flex gap-2">
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

            <div className="overflow-scroll h-full flex flex-col gap-2">
              {supplier &&
                supplier.map((sup) => (
                  <CardSupplier
                    key={sup.id_supplier}
                    supplier={sup}
                    isSelected={
                      selectedSupplier?.id_supplier === sup.id_supplier
                    }
                    onSelect={handleSupplierChange}
                  />
                ))}
            </div>
            <div className="h-1/4 w-full p-2">
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
          isi={"Apakah Anda yakin sudah membeli list barang ini?"}
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
