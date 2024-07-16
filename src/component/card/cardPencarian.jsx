import { useEffect, useState } from "react";

const CardPencarian = ({ barang }) => {
  const [namaSupplier, setNamaSupplier] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost/tubes/be/get_supplier_byid.php?id_supplier=${barang.id_supplier}`
    )
      .then((response) => response.json())
      .then((data) => setNamaSupplier(data.nama_supplier))
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);
  return (
    <>
      <div className="bg-white rounded-md mt-10 flex shadow-md">
        <div className=" p-2  h-full">
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
          <div className=" flex ">
            <p className="w-full font-bold text-4xl">{barang.nama_barang}</p>
            <p className="  text-end">{barang.stok + ".Kg"}</p>
          </div>
          <div className=" mt-5 flex gap-3">
            <div>
              <p>Supplier</p>
              <p>Harga Beli</p>
              <p>Harga Jual</p>
            </div>
            <div>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div>
              <p>{namaSupplier}</p>
              <p>{barang.harga_beli}</p>
              <p>{barang.harga_jual}</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPencarian;
