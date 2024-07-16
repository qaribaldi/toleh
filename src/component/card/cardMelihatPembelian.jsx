import { useEffect, useState } from "react";

const CardMelihatPembelian = ({ barang }) => {
  const [barangItem, setBarangItem] = useState();
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  useEffect(() => {
    fetch(
      `http://localhost/tubes/be/get_barang_supplier.php?id_barang=${barang.id_barang}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBarangItem(data);
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);
  return (
    <>
      <div className="bg-white rounded-md mt-10 flex shadow-md">
        <div className="w-1/4 flex items-center p-2 ">
          <div
            className="w-full h-[150px] bg-cover rounded-md"
            style={{
              backgroundImage: `url( ${
                "http://localhost/tubes/be/foto/" + barang.id_barang + ".png"
              })`,
            }}
          ></div>
        </div>
        <div className="text-black">
          <p className="text-3xl font-bold mt-2">
            {barangItem && barangItem.nama_barang}
          </p>
          <div className="px-5 w-full text-lg flex gap-2">
            <div>
              <p className="text-lg mt-5">Jumlah</p>
              <p className="text-lg ">Harga beli </p>
              <p className="text-lg ">Harga Total </p>
              <p className="text-lg ">Supplier </p>
            </div>
            <div>
              <p className="text-lg mt-5">:</p>
              <p className="text-lg">:</p>
              <p className="text-lg ">:</p>
              <p className="text-lg ">:</p>
            </div>
            <div>
              <p className="text-lg mt-5">{barang.jumlah}</p>
              <p className="text-lg "> {formatRupiah(barang.harga_barang)}</p>

              <p className="text-lg ">
                {formatRupiah(barang.harga_barang * barang.jumlah)}{" "}
              </p>
              <p className="text-lg mb-4">
                {barangItem && barangItem.nama_supplier}
              </p>
            </div>
          </div>
        </div>
        <div
          className=" flex flex-col p-3 gap-2 justify-end
          "
        ></div>
      </div>
    </>
  );
};

export default CardMelihatPembelian;
