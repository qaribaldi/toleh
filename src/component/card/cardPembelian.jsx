import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
const CardPembelian = ({ pembelian }) => {
  const navigate = useNavigate();
  const date = parseISO(pembelian.tanggal_pembelian);
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  return (
    <>
      <div className="bg-white rounded-md mt-5 flex shadow-md text-black">
        <div className=" p-2 w-full">
          <div className=" flex">
            <p className="w-full font-bold text-xl">
              Tanggal : {format(date, "dd-MM-yyyy")}
            </p>
            <p className=" w-full text-end">Status : {pembelian.status}</p>
          </div>
          <div className=" mt-2 flex gap-3 w-full">
            <div className=" w-full">
              <p>Jumlah Barang</p>
              <p>Total Harga</p>
            </div>
            <div className="w-fit">
              <p>:</p>
              <p>:</p>
            </div>
            <div className="w-full">
              <p>{pembelian.jumlah_barang}</p>
              <p>{formatRupiah(pembelian.harga_total)}</p>
            </div>
            <div className=" flex justify-end  w-full ">
              {pembelian.status === "Menunggu" && (
                <button
                  className=" bg-[#112D4E]  rounded-md text-white font-bold h-fit p-3"
                  onClick={() => {
                    navigate("/pemilik/pembelian/" + pembelian.id_pembelian);
                  }}
                >
                  Lakukan Validasi
                </button>
              )}
              {pembelian.status === "Terbeli" && (
                <button
                  className=" bg-[#3F72AF]  rounded-md text-white font-bold h-fit p-3"
                  onClick={() => {
                    navigate("/pemilik/pembelian/" + pembelian.id_pembelian);
                  }}
                >
                  Lihat Detail
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPembelian;
