import { useState } from "react";
import Popuplogin from "./popup/popupLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [idPegawai, setidPegawai] = useState();
  const [password, setPassword] = useState();
  const [respon, setRespon] = useState();
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append("id_pegawai", idPegawai);
    formData.append("password", password);
    const res = await fetch("http://192.168.0.105/tubes/be/login.php", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data);
    setRespon(data);
    setPopup(true);
  };
  const closePopup = () => {
    setPopup(false);
    if (respon.status == "success") {
      navigate("/");
    }
  };
  return (
    <>
      <div className=" bg-[#112D4E] flex min-h-screen justify-center items-center">
        <div className=" bg-white p-10 rounded-xl shadow-md">
          <div className="grid grid-cols-2 gap-10 justify-center items-center">
            <div className=" w-full">
              <div className=" text-center font-bold text-xl ">
                Toko Oleh Oleh
              </div>
              <label className="form-control w-full">
                <div className="label mt-10">
                  <span className="label-text text-black font-bold">
                    Id Pegawai
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full shadow-md"
                  id="idPegawai"
                  value={idPegawai}
                  onChange={(e) => setidPegawai(e.target.value)}
                />
                <div className="label">
                  <span className="label-text-alt text-black font-bold">
                    Password
                  </span>
                </div>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full shadow-md"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn  mt-7 bg-[#0065DC] text-white shadow-md "
                  onClick={handleLogin}
                >
                  Login
                </button>
              </label>
            </div>
            <div className=" p-10 w-96">
              <img src="./img/logo.png" alt="" className="mt-10 " />
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <Popuplogin
          isipesan={respon.message}
          setPopup={setPopup}
          closePopup={closePopup}
        />
      )}
    </>
  );
};
export default Login;
