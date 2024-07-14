import { useNavigate } from "react-router-dom";

const Pegawai = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="flex ">
          <div className="w-28 bg-white min-h-screen text-center">
            {" "}
            <img
              src="https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami2-95-512.png"
              alt=""
            />
          </div>
          <div className="bg-red-200 min-h-screen w-full flex items-center flex-col">
            <p className="text-4xl text-black">Pegawai</p>
            <div className="flex flex-col w-full p-10 gap-10">
              <button
                onClick={() => {
                  navigate("/pegawai/pengelolaan");
                }}
                className="bg-gray-500 p-10 w-full rounded-md grid grid-cols-2 justify-center items-center text-black text-2xl"
              >
                <img
                  className="w-40"
                  src="https://cdn3.iconfinder.com/data/icons/project-and-time-management-2/66/1_project_management_manage_projects_job_management_report_management_finance_management_document_management-128.png"
                  alt=""
                />
                <p>Pengelolaan Barang</p>
              </button>
              <button className="bg-gray-500 p-10 w-full rounded-md grid grid-cols-2 justify-center items-center text-black text-2xl">
                <img
                  className="w-40"
                  src="https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami3-18-512.png"
                  alt=""
                />
                <p>Pencarian Barang</p>
              </button>
              <button
                className="bg-gray-500 p-10 w-full rounded-md grid grid-cols-2 justify-center items-center text-black text-2xl"
                onClick={() => {
                  navigate("/pegawai/pembelian");
                }}
              >
                <img
                  className="w-40"
                  src="https://cdn3.iconfinder.com/data/icons/project-and-time-management-2/66/1_project_management_manage_projects_job_management_report_management_finance_management_document_management-128.png"
                  alt=""
                />
                <p>Pembelian</p>
              </button>
            </div>
          </div>
          <div className="bg-blue-300 min-h-screen w-1/4 text-center"> 90</div>
        </div>
      </div>
    </>
  );
};

export default Pegawai;
