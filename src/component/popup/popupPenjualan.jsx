const PopupPenjualan = ({ closePopup, isi }) => {
  return (
    <>
      <div className="min-h-screen absolute bg-black top-0 left-0 w-full opacity-50 flex justify-center items-center"></div>
      <div className="min-h-screen absolute  top-0 left-0 w-full flex justify-center items-center ">
        <div className="bg-white p-5 rounded-2xl w-1/2">
          <div className=" relative">
            <div className="w-full">
              <p className="text-4xl text-black font-bold pb-5 w-full text-center ">
                Pesanan Selesai
              </p>
            </div>
            <button
              className="text-black hover:text-white text-3xl  text-end  rounded-full absolute   -top-4 -right-4 hover:bg-[#112D4E] p-1 pb-2 px-4"
              onClick={() => {
                closePopup();
              }}
            >
              x
            </button>
          </div>
          <div>{isi}</div>
        </div>
      </div>
    </>
  );
};

export default PopupPenjualan;
