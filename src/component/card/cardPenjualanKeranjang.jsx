const CardPenjualanKeranjang = (barang) => {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      <div className="flex  p-5  ">
        <div
          className="p-10 bg-cover rounded-md"
          style={{
            backgroundImage: `url( ${
              "http://localhost/tubes/be/foto/" +
              barang.barang.id_barang +
              ".png"
            })`,
          }}
        ></div>
        <div className="p-2 pt-1 w-full">
          <p className="text-black font-bold">{barang.barang.nama_barang}</p>
          <div className="h-3/4 w-full flex items-end">
            <p className="text-black w-full">{barang.barang.jumlah + " "}Kg</p>
            <p className="text-[#0065DC]">
              {formatRupiah(barang.barang.harga_jual * barang.barang.jumlah)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPenjualanKeranjang;
