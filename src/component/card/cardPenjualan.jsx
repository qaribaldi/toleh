const CardPenjualan = () => {
  return (
    <>
      <div className="bg-black rounded-md pb-5">
        <div className="p-5">
          <img
            src="https://img.okezone.com/content/2023/03/02/406/2774395/sah-dodol-garut-tradisi-ngawuwuh-dan-burayot-jadi-warisan-budaya-tak-benda-0KkEVDhh7V.jpg"
            alt=""
          />
        </div>
        <div className="px-5">
          <p>nama Produk</p>
          <p className="text-lg">Rp.12345</p>
          <button className="p-2 bg-red-500 w-full rounded-md text-white font-bold">
            + Masukan
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPenjualan;
