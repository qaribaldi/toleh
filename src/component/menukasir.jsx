const Menukasir = () => {
  return (
    <>
      <div>
        <div className=" flex ">
          <div className="w-28 bg-slate-200">Logo</div>
          <div className="bg-red-600 w-full min-h-screen flex items-center flex-col">
            <p>MenuKasir</p>
            <div className="flex flex-col w-full gap-10 p-20">
              <button className="bg-slate-400 p-20 w-full"> Penjualan</button>
              <button className="bg-amber-400 p-20 w-full">
                {" "}
                Pencarian Barang
              </button>
            </div>
          </div>

          <div className="w-full  bg-slate-500">09</div>
        </div>
      </div>
    </>
  );
};
export default Menukasir;
