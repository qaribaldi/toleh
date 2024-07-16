const CardPembelianKeranjang = (barang) => {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      <div className="flex  p-1   ">
        <div className=" w-48 h-full p-5 ">
          {" "}
          <div
            className=" w-full h-full bg-cover rounded-md"
            style={{
              backgroundImage: `url( ${
                "http://localhost/tubes/be/foto/" +
                barang.barang.id_barang +
                ".png"
              })`,
            }}
          ></div>
        </div>
        <div className="p-2 pt-1 w-full">
          <p className="text-black font-bold">{barang.barang.nama_barang}</p>
          <div className="h-3/4 w-full flex items-end gap-1 text-black mt-1">
            <div>
              <p>Supplier</p>
              <p>Jumlah Barang</p>
              <p>Harga Beli</p>
              <p>Total Harga</p>
            </div>
            <div>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div>
              <p>{barang.barang.id_supplier}</p>
              <p>{barang.barang.jumlah}</p>
              <p>{formatRupiah(barang.barang.harga_beli)}</p>
              <p>
                {formatRupiah(barang.barang.harga_beli * barang.barang.jumlah)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPembelianKeranjang;
