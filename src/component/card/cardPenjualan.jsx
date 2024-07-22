const CardPenjualan = ({
  barang,
  tambahkanKeKeranjang,
  keranjang,
  kurangiJumlahItem,
  pembelian = false,
  updateJumlahItem,
}) => {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleInputChange = (event) => {
    const newJumlah = parseFloat(event.target.value);
    if (!isNaN(newJumlah) && newJumlah >= 0) {
      updateJumlahItem(barang, newJumlah);
    } else if (event.target.value === "") {
      // Handle empty input as 0
      updateJumlahItem(barang, 0);
    }
  };

  return (
    <>
      <div className="bg-white w-full shadow-2xl rounded-lg  pb-5 h-fit">
        <div className="p-3">
          <div
            className="w-full h-[150px] bg-cover rounded-md"
            style={{
              backgroundImage: `url( ${
                "http://localhost/tubes/be/foto/" + barang.id_barang + ".png"
              })`,
            }}
          ></div>
        </div>
        <div className="px-5 flex flex-col gap-1">
          <p className="text-black font-bold text-xl">{barang.nama_barang}</p>
          {pembelian ? (
            <>
              <p className="text-black  text-md">Stok : {barang.stok} Kg</p>
              <p className="text-lg text-[#0065DC] ">
                {formatRupiah(barang.harga_beli)}
              </p>
            </>
          ) : (
            <p className="text-lg text-[#0065DC] ">
              {formatRupiah(barang.harga_jual)}
            </p>
          )}

          {keranjang[barang.id_barang] === undefined ? (
            <button
              className="p-2 bg-[#0065DC] hover:bg-[#112D4E] w-full rounded-md text-white font-bold text-md"
              onClick={() => {
                tambahkanKeKeranjang(barang);
              }}
            >
              + Keranjang
            </button>
          ) : (
            <div className="flex justify-center items-center ">
              {" "}
              <button
                className="p-2 px-4 bg-[#0065DC] hover:bg-[#112D4E]  rounded-md text-white font-bold text-md"
                onClick={() => {
                  kurangiJumlahItem(barang);
                }}
              >
                -
              </button>
              <input
                type="number"
                value={keranjang[barang.id_barang].jumlah}
                onChange={handleInputChange}
                min="0"
                className="bg-white w-3/4 text-center text-black font-bold text-lg"
              />
              <button
                className="p-2 px-4 bg-[#0065DC] hover:bg-[#112D4E]  rounded-md text-white font-bold text-md"
                onClick={() => {
                  tambahkanKeKeranjang(barang);
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardPenjualan;
