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
      <div className=" bg-white flex min-h-screen justify-center items-center">
        <div className=" bg-blue-950 p-10 rounded-xl">
          <div className="grid grid-cols-2 gap-10 justify-center items-center">
            <div className=" w-full">
              <div className=" text-center font-bold text-xl ">Tolehh</div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Id Pegawai</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  id="idPegawai"
                  value={idPegawai}
                  onChange={(e) => setidPegawai(e.target.value)}
                />
                <div className="label">
                  <span className="label-text-alt">Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn btn-secondary mt-7 "
                  onClick={handleLogin}
                >
                  Login
                </button>
              </label>
            </div>
            <div className=" p-10">
              <img src="./img/l.png" alt="" className="mt-10  shadow-md" />
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
