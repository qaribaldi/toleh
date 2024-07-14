const CardTambahBarang = () => {
  return (
    <>
      <div className="bg-black rounded-md mt-10 flex">
        <div className="p-2 flex">
          <img
            className=" w-48 rounded-md"
            src="https://img.okezone.com/content/2023/03/02/406/2774395/sah-dodol-garut-tradisi-ngawuwuh-dan-burayot-jadi-warisan-budaya-tak-benda-0KkEVDhh7V.jpg"
            alt=""
          />
        </div>
        <div className="px-5 w-full text-lg">
          <p className="text-3xl font-bold mt-2">Nama Snack</p>
          <p className="text-lg mt-5">Harga beli :</p>
          <p className="text-lg">Harga jual :</p>
          <p className="text-lg mb-5">Supplier : </p>
        </div>
        <div
          className=" flex flex-col p-3 gap-2 justify-end
              "
        >
          <button className="p-1 px-3 bg-red-500 w-full rounded-md text-white font-bold">
            Edit
          </button>
          <button className="p-1 px-3 bg-red-500 w-full rounded-md text-white font-bold">
            Hapus
          </button>
        </div>
      </div>
    </>
  );
};

export default CardTambahBarang;
