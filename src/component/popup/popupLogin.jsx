import { useState } from "react";

const Popuplogin = ({ isipesan, closePopup }) => {
  return (
    <>
      <div className="min-h-screen absolute bg-black top-0 left-0 w-full opacity-50 flex justify-center items-center"></div>
      <div className="min-h-screen absolute  top-0 left-0 w-full flex justify-center items-center ">
        <div className="bg-white p-5 rounded-2xl w-1/2">
          <div className=" relative">
            <div className="w-full">
              <p className="text-4xl text-black font-bold pb-5 w-full text-center ">
                {isipesan}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              className="bg-[#0065DC] p-1 px-8 rounded-lg text-white"
              onClick={closePopup}
            >
              Ya
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popuplogin;
