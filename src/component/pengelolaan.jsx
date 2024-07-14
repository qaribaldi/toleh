import CardPengelolaan from "./card/cardPengelolaan";
const Pengelolaan = () => {
  return (
    <>
      <div>
        <div className=" flex ">
          <div className="w-28 bg-slate-200 ">Logo</div>
          <div className="w-28 bg-slate-200 fixed min-h-screen flex justify-center">
            Logo
          </div>
          <div className="bg-red-600 w-full min-h-screen flex items-center flex-col">
            <div className=" px-5 py-1 fixed  w-1/2 flex gap-5">
              <label className="input input-bordered flex items-center gap-2 bg-white opacity-50 w-full :bg-black">
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
              <button className="bg-gray-500 rounded-md p-1">
                Tambah barang
              </button>
            </div>
            <div className=" flex-col w-full gap-20 p-10">
              <CardPengelolaan />
              <CardPengelolaan />
              <CardPengelolaan />
              <CardPengelolaan />
              <CardPengelolaan />
              <CardPengelolaan />
            </div>
          </div>
          <div className="w-1/3"></div>
          <div className=" fixed w-1/4 min-h-screen  bg-slate-500 right-0 flex flex-col">
            <p className="text-center text-3xl text-black mt-2">
              Tambah Barang
            </p>
            <div className="p-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Nama snack:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Nama snack:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Nama snack:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Nama snack:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Nama snack:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="p-3  flex mt-28">
              <button className="bg-red-600 p-3 w-full rounded-md ">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pengelolaan;
