import { useEffect, useState } from "react";
import CardPembelian from "./card/cardPembelian";
import { useNavigate } from "react-router-dom";

const PemilikTokoPembelian = () => {
  const navigate = useNavigate();
  const [pembelian, setPembelian] = useState([]);
  useEffect(() => {
    fetch("http://localhost/tubes/be/get_pembelian.php")
      .then((response) => response.json())
      .then((data) => setPembelian(data))
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);
  console.log(pembelian);
  return (
    <>
      <div>
        <div className=" flex ">
          <div className="w-16 bg-white shadow-lg">
            <img src="../img/logo.png" alt="" />
            <div className="w-full px-1">
              <div className=" p-0.5 w-full bg-black"> </div>
            </div>
            <button
              className="mt-2 flex justify-center p-2  "
              onClick={() => {
                navigate("/pemilik");
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000"
                className=" hover:bg-[#3F72AF] p-1 rounded-lg "
              />
            </button>
          </div>
          <div className=" bg-[#F0F0F0] w-full min-h-screen flex items-center flex-col">
            <div className=" overflow-scroll h-screen flex-col w-full gap-20 p-10">
              {pembelian.message !== "No data found" &&
                pembelian.map((pembelian) => (
                  <CardPembelian
                    pembelian={pembelian}
                    key={pembelian.id_pembelian}
                  />
                ))}
            </div>
          </div>

          <div className=" w-28 min-h-screen  bg-white right-0 flex flex-col"></div>
        </div>
      </div>
    </>
  );
};

export default PemilikTokoPembelian;
