import { useEffect, useState } from "react";
import PopupTambahBarang from "./popup/popupTambahBarang";
import PopupNotif from "./popup/popupNotif";

const Tambahbarang = ({ change }) => {
  const [namaBarang, setNamaBarang] = useState("");
  const [hargaBeli, setHargaBeli] = useState(0);
  const [hargaJual, setHargaJual] = useState(0);
  const [stok, setStok] = useState(0);
  const [idSupplier, setIdSupplier] = useState("");
  const [fotoBarang, setFotoBarang] = useState(null);
  const [suppliers, setSuppliers] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popup1, setPopup1] = useState(false);
  const [isiPopup, setIsiPopup] = useState("");

  const handleSelectChange = (event) => {
    setIdSupplier(event.target.value);
  };

  const handleNamaChange = (event) => {
    setNamaBarang(event.target.value);
  };
  const handleBeliChange = (event) => {
    setHargaBeli(event.target.value);
  };
  const handleJualChange = (event) => {
    setHargaJual(event.target.value);
  };
  const handleStokChange = (event) => {
    setStok(event.target.value);
  };
  const handleFotoChange = (event) => {
    const file = event.target.files[0]; // Ambil file pertama dari daftar file yang dipilih
    if (file) {
      setFotoBarang(file);
    }
  };

  useEffect(() => {
    fetch("http://localhost/tubes/be/get_supplier.php")
      .then((response) => response.json())
      .then((data) => setSuppliers(data))
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  const handleSubmit = (e) => {
    setPopup(false);
    setPopup1(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_barang", namaBarang);
    formData.append("harga_beli", hargaBeli);
    formData.append("harga_jual", hargaJual);
    formData.append("stok", stok);
    formData.append("id_supplier", idSupplier);
    formData.append("foto_barang", fotoBarang);

    fetch("http://localhost/tubes/be/tambah_barang.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error("Error:", data.error);
        } else {
          setIsiPopup(data.message);
          // Reset form setelah berhasil submit
          setNamaBarang("");
          setHargaBeli("");
          setHargaJual("");
          setStok("");
          setIdSupplier("");
          setFotoBarang(null);
          change();
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handlePopup = (e) => {
    e.preventDefault();
    setPopup(true);
  };

  return (
    <>
      <div className="text-3xl text-black font-bold mt-5">Tambah Barang</div>
      <form onSubmit={handlePopup} className="h-screen">
        <div className=" w-full flex gap-1 flex-col">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-black">Nama Snack</span>
            </div>
            <input
              type="text"
              value={namaBarang}
              onChange={handleNamaChange}
              className="input input-bordered w-full bg-white shadow-md text-black"
              required
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-black">Supplier</span>
            </div>
            <select
              value={idSupplier}
              onChange={handleSelectChange}
              className="select w-full  bg-white text-black border border-black"
              required
            >
              <option disabled value={""}>
                Pilih Supplier
              </option>
              {suppliers.map((supplier) => (
                <option key={supplier.id_supplier} value={supplier.id_supplier}>
                  {supplier.nama_supplier}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-black">Harga Beli : </span>
            </div>
            <input
              type="number"
              value={hargaBeli}
              onChange={handleBeliChange}
              className="input input-bordered w-full bg-white shadow-md text-black"
              required
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-black">Harga Jual :</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full bg-white shadow-md text-black"
              value={hargaJual}
              onChange={handleJualChange}
              required
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-black">Stok :</span>
            </div>
            <input
              type="text"
              value={stok}
              className="input input-bordered w-full bg-white shadow-md text-black"
              onChange={handleStokChange}
              required
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-black">Pilih Foto :</span>
            </div>
            <div className="max-w-sm">
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-[#0065DC] file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      "
                  onChange={handleFotoChange}
                  required
                />
              </label>
            </div>
          </label>
        </div>
        <div className="w-full mt-10    flex items-end pb-5">
          <button
            className="bg-[#0065DC] h-fit w-full p-2 rounded-lg text-white font-bold "
            type="submit"
          >
            Simpan
          </button>
        </div>
      </form>

      {popup && (
        <PopupTambahBarang
          isi={"Anda yakin ingin menambah barang ini"}
          closePopup={() => {
            setPopup(false);
          }}
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

export default Tambahbarang;
