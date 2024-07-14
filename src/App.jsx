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
          <Route path="/penjualan" element={<Penjualan />} />
          <Route path="/pengelolaan" element={<Pengelolaan />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
