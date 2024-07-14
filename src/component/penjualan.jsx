import CardPenjualan from "./card/cardPenjualan";
import CardPenjualanKeranjang from "./card/cardPenjualanKeranjang";

const Penjualan = () => {
  return (
    <>
      <div>
        <div className=" flex ">
          <div className="w-28 bg-slate-200 ">Logo</div>
          <div className="w-28 bg-slate-200 fixed min-h-screen flex justify-center">
            Logo
          </div>
          <div className="bg-red-600 w-full min-h-screen flex items-center flex-col">
            <div className=" px-5 py-1 fixed  w-1/2 ">
              <label className="input input-bordered flex items-center gap-2 bg-white opacity-50">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div className="grid grid-cols-3 w-full gap-5 p-10">
              <CardPenjualan />
              <CardPenjualan />
              <CardPenjualan />
              <CardPenjualan />
              <CardPenjualan />
              <CardPenjualan />
            </div>
          </div>
          <div className="w-1/3"></div>
          <div className=" fixed w-1/4 min-h-screen  bg-slate-500 right-0 ">
            <div>
              <CardPenjualanKeranjang />
              <CardPenjualanKeranjang />
              <CardPenjualanKeranjang />
            </div>
            <div className="bg-white fixed bottom-0 w-1/4 p-5">
              <div className="grid grid-cols-2 w-full  ">
                <p>Sub Total </p>
                <p>Rp.xxxx</p>
                <p>Tax Total </p>
                <p>Rp.xxxx</p>
              </div>
              <div className="p-1">
                <div className=" w-full h-1 bg-black "></div>
              </div>
              <div className="grid grid-cols-2 w-full">
                <p>Total </p>
                <p>Rp.xxxx</p>
              </div>
              <button className="p-5 bg-red-500 w-full rounded-md mt-2 text-white">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Penjualan;
