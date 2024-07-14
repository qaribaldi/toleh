import { useState } from "react";

const Popuplogin = ({ isipesan, closePopup }) => {
  return (
    <>
      <div className=" bg-gray-500/50 flex min-h-screen justify-center items-center absolute top-0 w-full">
        <div className=" bg-white p-10 rounded-xl flex justify-center items-center flex-col">
          <p>{isipesan}</p>
          <button className="btn btn-secondary mt-7 " onClick={closePopup}>
            Oke
          </button>
        </div>
      </div>
    </>
  );
};
export default Popuplogin;
