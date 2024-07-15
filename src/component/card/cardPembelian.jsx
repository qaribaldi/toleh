const CardPembelian = () => {
  return (
    <>
      <div className="bg-white rounded-md mt-10 flex shadow-md">
        <div className=" p-2 w-full">
          <div className=" flex">
            <p className="w-full font-bold text-xl">Tanggal : dd - mm - yy</p>
            <p className=" w-full text-end">Status : Gari Baldi Ganteng</p>
          </div>
          <div className=" mt-2 flex gap-3 w-full">
            <div className=" w-48">
              <p>Jumlah Barang</p>
              <p>Total Harga</p>
            </div>
            <div>
              <p>:</p>
              <p>:</p>
            </div>
            <div className="w-full">
              <p>2</p>
              <p>Rp.xxxxxx</p>
            </div>
            <div className=" flex justify-end ">
              <button className=" bg-[#112D4E]  rounded-md text-white font-bold w-full">
                Lakukan Validasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPembelian;
