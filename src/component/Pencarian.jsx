import { useEffect, useState } from "react";
import CardPencarian from "./card/cardPencarian";
import { useNavigate } from "react-router-dom";

const Pencarian = ({ status }) => {
  const [barang, setBarang] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let url = `http://localhost/tubes/be/get_barang.php`;
      if (searchTerm) {
        url += `?search_term=${searchTerm}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setBarang(data);
      } catch (error) {
        console.error("Error fetching barang:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div>
        <div className="flex">
          <div className="bg-white min-h-screen w-16">
            <div className="w-full justify-center items-center">
              <img src="../img/logo.png" alt="" />
            </div>
            <div className="w-full px-1">
              <div className="p-0.5 w-full bg-black"></div>
            </div>
            <button
              className="mt-2 flex justify-center p-2"
              onClick={() => {
                if (status === "pemilik") {
                  navigate("/pemilik");
                } else if (status === "pegawai") {
                  navigate("/pegawai");
                } else {
                  navigate("/kasir");
                }
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000"
                className="hover:bg-[#3F72AF] p-1 rounded-lg"
              />
            </button>
          </div>
          <div className="p-1 bg-gradient-to-r from-gray-200 to-[#F0F0F0]"></div>
          <div className="bg-[#F0F0F0] w-full min-h-screen flex items-center flex-col">
            <div className="px-5 py-1 fixed w-4/5 flex gap-5">
              <label className="input input-bordered flex items-center gap-2 bg-white w-full shadow-md">
                <input
                  type="text"
                  className="grow"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
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
            <div className="overflow-scroll h-screen w-full gap-20 p-10">
              {barang.map((item) => (
                <CardPencarian barang={item} key={item.id_barang} />
              ))}
            </div>
          </div>
          <div className="w-28 min-h-screen bg-white right-0 flex flex-col"></div>
        </div>
      </div>
    </>
  );
};

export default Pencarian;
