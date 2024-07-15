const CardPenjualan = ({
  barang,
  tambahkanKeKeranjang,
  keranjang,
  kurangiJumlahItem,
}) => {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      <div className="bg-white shadow-2xl rounded-lg w-[200px] pb-5 h-fit">
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
        <div className="px-5 flex flex-col gap-3">
          <p className="text-black font-bold text-xl">{barang.nama_barang}</p>
          <p className="text-lg text-[#0065DC] ">
            {formatRupiah(barang.harga_jual)}
          </p>

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
              <div className="w-full text-center text-xl font-bold  text-black">
                {keranjang[barang.id_barang].jumlah}
              </div>
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
