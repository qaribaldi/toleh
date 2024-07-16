import { useEffect, useState } from "react";
import PopupTambahBarang from "./popup/popupTambahBarang";
import PopupNotif from "./popup/popupNotif";

const EditBarang = ({ barang, change }) => {
  const [namaBarang, setNamaBarang] = useState(barang.nama_barang);
  const [hargaBeli, setHargaBeli] = useState(barang.harga_beli);
  const [hargaJual, setHargaJual] = useState(barang.harga_jual);
  const [stok, setStok] = useState(barang.stok);
  const [idSupplier, setIdSupplier] = useState(barang.id_supplier);

  const [suppliers, setSuppliers] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popup1, setPopup1] = useState(false);
  const [isiPopup, setIsiPopup] = useState("");
  useEffect(() => {
    setNamaBarang(barang.nama_barang);
    setHargaBeli(barang.harga_beli);
    setHargaJual(barang.harga_jual);
    setStok(barang.stok);
    setIdSupplier(barang.id_supplier);
  }, [barang]);

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
    const id = barang.id_barang;
    console.log(id);
    const formData = new FormData();
    formData.append("id_barang", id);
    formData.append("nama_barang", namaBarang);
    formData.append("harga_beli", hargaBeli);
    formData.append("harga_jual", hargaJual);
    formData.append("stok", stok);
    formData.append("id_supplier", idSupplier);

    fetch("http://localhost/tubes/be/update_barang.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setIsiPopup(data.error);
        } else {
          setIsiPopup(data.message);
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
      <div className="text-3xl text-black font-bold mt-5">Edit Barang</div>
      <form onSubmit={handlePopup} className="h-screen w-full">
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
              <option disabled>Pilih Supplier</option>
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
          isi={"Anda yakin ingin edit barang ini"}
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

export default EditBarang;
