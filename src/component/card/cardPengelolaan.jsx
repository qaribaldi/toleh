const CardPengelolaan = ({ nama, beli, jual, supplier, id_barang }) => {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  return (
    <>
      <div className="bg-white shadow-xl rounded-md mt-10 flex">
        <div className="p-2 w-1/3 flex">
          <div
            className="w-full h-[150px] bg-cover rounded-md"
            style={{
              backgroundImage: `url( ${
                "http://localhost/tubes/be/foto/" + id_barang + ".png"
              })`,
            }}
          ></div>
        </div>
        <div className="w-full">
          <p className="text-3xl font-bold mt-2 text-black">{nama}</p>
          <div className="px-5 w-full text-lg flex ">
            <div className="flex gap-2 w-full text-black">
              <div>
                <p className="text-lg mt-5">Harga beli </p>
                <p className="text-lg">Harga jual </p>
                <p className="text-lg mb-5">Supplier </p>
              </div>
              <div>
                <p className="text-lg mt-5">: </p>
                <p className="text-lg">:</p>
                <p className="text-lg mb-5">: </p>
              </div>
              <div>
                <p className="text-lg mt-5">{formatRupiah(beli)} </p>
                <p className="text-lg">{formatRupiah(jual)}</p>
                <p className="text-lg mb-5">{supplier} </p>
              </div>
            </div>
            <div>
              <div
                className=" flex flex-col p-3 gap-2 justify-end h-full
          "
              >
                <button className="p-1 px-3 bg-[#0065DC] hover:bg-[#112D4E] w-full rounded-md text-white font-bold">
                  Edit
                </button>
                <button className="p-1 px-3 bg-black w-full rounded-md text-white font-bold">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPengelolaan;
