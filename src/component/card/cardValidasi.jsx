import { useEffect, useState } from "react";

const CardValidasi = ({ barang, handleCheckboxChange, status }) => {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  const [barangItem, setBarangItem] = useState({
    id_barang: 17,
    id_supplier: "S005",
    nama_barang: "Astor",
    harga_beli: 33500,
    harga_jual: 40000,
    stok: 20,
  });
  useEffect(() => {
    fetch(
      `http://localhost/tubes/be/get_barang_byid.php?id_barang=${barang.id_barang}`
    )
      .then((response) => response.json())
      .then((data) => setBarangItem(data))
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  return (
    <>
      <div className="bg-white rounded-md mt-10 flex ">
        <div className="flex w-1/4 h-full p-1 ">
          <div
            className="w-48 h-[150px] bg-cover rounded-md "
            style={{
              backgroundImage: `url( ${
                "http://localhost/tubes/be/foto/" + barang.id_barang + ".png"
              })`,
            }}
          ></div>
        </div>
        <div className=" p-2 w-full text-black">
          <div className=" flex">
            <p className="w-full font-bold text-2xl">
              {barangItem.nama_barang}
            </p>
            <p className=" w-full text-end">{barangItem.stok}.Kg</p>
          </div>
          <div className=" mt-2 flex gap-3 w-full">
            <div className=" w-48">
              <p>Supplier</p>
              <p>Harga Beli</p>
              <p>Jumlah</p>
              <p>Total Harga</p>
            </div>
            <div>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className="w-full">
              <p>{barang.id_barang}</p>
              <p>{formatRupiah(barangItem.harga_beli)} / kg</p>
              <p>{barang.jumlah}</p>
              <p>{formatRupiah(barang.jumlah * barangItem.harga_beli)}</p>
            </div>
            <div className=" flex mt-10 ">
              {status !== "Terbeli" && (
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={barang.status}
                  onChange={() => {
                    handleCheckboxChange(barang.id_barang);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      ​
    </>
  );
};

export default CardValidasi;
