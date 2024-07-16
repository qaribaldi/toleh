import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import PopupNotif from "./popup/popupNotif";

const PegawaiPembelian = () => {
  const [popup, setPopup] = useState(false);
  const [isiPopup, setIsiPopup] = useState();
  const navigate = useNavigate();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const dayName = days[currentDateTime.getDay()];
  const [respon, setRespon] = useState();
  const cari = () => {
    fetch(`http://localhost/tubes/be/cek_pembelian.php`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          navigate("/pegawai/pembelian/" + data.id_pembelian);
        } else {
          setPopup(true);
          setIsiPopup(data.message);
        }
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  };

  return (
    <>
      <div>
        <div className=" flex min-h-screen ">
          <div className=" w-14 bg-white shadow-lg">
            <img src="../img/logo.png" alt="" />
            <div className="w-full px-1">
              <div className=" p-0.5 w-full bg-black"> </div>
            </div>
            <button
              className="mt-2 flex justify-center p-2  "
              onClick={() => {
                navigate("/pegawai");
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000"
                className=" hover:bg-[#3F72AF] p-1 rounded-lg"
              />
            </button>
          </div>
          <div className="p-1 bg-gradient-to-r from-gray-200 to-[#F0F0F0] "></div>
          <div className="bg-[#F0F0F0] w-full flex ">
            <div className="w-full flex flex-col p-10 justify-center items-center">
              <p className="text-7xl font-bold text-black mb-10">Pintu Snack</p>
              <p className="text-4xl">
                Kerjakan pekerjaan anda dengan ketulusan hati, maka anda akan
                meraih sukses dengan sedikit kompetisi dalam pekerjaan anda.
              </p>
              <div className="flex gap-16 mt-[60px]">
                <button
                  className="bg-[#3F72AF] hover:bg-[#112D4E] p-5 rounded-[40px] w-[228px] shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,15)]"
                  onClick={() => {
                    navigate("/pegawai/pembelian/input");
                  }}
                >
                  <div>
                    <img
                      src="https://img.icons8.com/?size=100&id=HzeaDe1Gb33P&format=png&color=ffffff"
                      alt=""
                    />
                    <div className="flex w-full justify-end">
                      <img
                        src="https://img.icons8.com/?size=100&id=3223&format=png&color=ffffff"
                        className=" rotate-180 w-1/4"
                        alt=""
                      />
                    </div>
                    <p className="text-white text-2xl font-bold">
                      Input Data Pembelian
                    </p>
                  </div>
                </button>
                {/* box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px; */}
                <button
                  className="bg-[#3F72AF] hover:bg-[#112D4E] p-5 rounded-[40px] w-[228px] shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,15)]"
                  onClick={() => {
                    cari();
                  }}
                >
                  <div>
                    <img
                      src="https://img.icons8.com/?size=100&id=9671&format=png&color=ffffff"
                      alt=""
                    />
                    <div className="flex w-full justify-end">
                      <img
                        src="https://img.icons8.com/?size=100&id=3223&format=png&color=ffffff"
                        className=" rotate-180 w-1/4"
                        alt=""
                      />
                    </div>
                    <p className="text-white text-2xl font-bold">
                      Pencarian Data Pembelian
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-end ">
                <div className="p-5 pe-10">
                  <p className="text-5xl text-black">Pegawai</p>
                </div>
              </div>
              <div className="flex justify-end ">
                <div className="p-0.5 w-1/2 bg-black"></div>
              </div>
              <div className="w-full pe-10 pt-10 flex justify-end ">
                <img
                  src="../img/gambar.jpeg"
                  alt=""
                  className="rounded-3xl shadow-[2.4px_2.4px_3.2px_rgba(0,0,0,15)] w-[405px] "
                />
              </div>
              <div className="flex justify-center flex-col items-center  h-full ">
                <div className="flex flex-col gap-2">
                  <p className=" text-black text-3xl">{dayName}</p>
                  <p className=" text-black text-5xl">
                    {format(currentDateTime, "dd/MM/yyyy")}
                  </p>
                  <p className=" text-black text-3xl">
                    {" "}
                    {format(currentDateTime, "HH:mm")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <PopupNotif
          closePopup={() => {
            setPopup(false);
          }}
          isi={isiPopup}
        />
      )}
    </>
  );
};
export default PegawaiPembelian;
