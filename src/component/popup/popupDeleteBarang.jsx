const PopupDeleteBarang = ({ closePopup, isi, confirm }) => {
  return (
    <>
      <div className="min-h-screen absolute bg-black top-0 left-0 w-full opacity-50 flex justify-center items-center"></div>
      <div className="min-h-screen absolute  top-0 left-0 w-full flex justify-center items-center ">
        <div className="bg-white p-5 rounded-2xl w-1/3">
          <div className=" relative">
            <div className="w-full">
              <p className="text-3xl text-black font-bold pb-5 w-full text-center ">
                {isi}
              </p>
            </div>
          </div>
          <div className="w-full flex gap-5 justify-center items-center">
            <button
              className="bg-[#0065DC] p-1 px-8 rounded-lg text-white"
              onClick={confirm}
            >
              Ya
            </button>
            <button
              className="bg-[#112D4E] p-1 px-8 rounded-lg text-white"
              onClick={() => {
                closePopup();
              }}
            >
              Tidak
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupDeleteBarang;
