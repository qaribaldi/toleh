import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menuutama from "./component/menukasir";
import Login from "./component/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menukasir from "./component/menukasir";
import Penjualan from "./component/penjualan";
import Pengelolaan from "./component/pengelolaan";
import Pegawai from "./component/pegawai";
import PemilikToko from "./component/pemilikToko";
import PegawaiPembelian from "./component/pegawaiPembelian";
import Melihatpembelian from "./component/melihatpembelian";
import Editbarang from "./component/editbarang";
import PemilikTokoPembelian from "./component/pemilikTokoPembelian";
import PemilikTokoValidasi from "./component/pemilikTokoValidasi";
import Tambahbarang from "./component/tambahBarang";
import Pencarian from "./component/Pencarian";
import Pembelian from "./component/pembelian";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <Login />
        <Menuutama />
      </div> */}
      <Router>
        <Routes>
          {/* bebas */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Menuutama />} />
          <Route path="/kasir" element={<Menukasir />} />
          <Route path="/kasir/penjualan" element={<Penjualan />} />
          <Route path="/kasir/pencarian" element={<Pencarian />} />

          <Route path="/pegawai" element={<Pegawai />} />
          <Route path="/pegawai/pembelian" element={<PegawaiPembelian />} />
          <Route path="/pegawai/pengelolaan" element={<Pengelolaan />} />
          <Route path="/pegawai/melihat" element={<Melihatpembelian />} />
          <Route path="/pegawai/editbarang" element={<Editbarang />} />
          <Route path="/pegawai/tambahbarang" element={<Tambahbarang />} />
          <Route path="/pegawai/pembelian/input" element={<Pembelian />} />
          <Route
            path="/pegawai/pembelian/:id_pembelian"
            element={<Melihatpembelian />}
          />

          <Route path="/pemilik" element={<PemilikToko />} />
          <Route path="/pemilik/pembelian" element={<PemilikTokoPembelian />} />
          <Route
            path="/pemilik/pembelian/:id_pembelian"
            element={<PemilikTokoValidasi />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
