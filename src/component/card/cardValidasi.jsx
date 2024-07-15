const CardValidasi = () => {
  return (
    <>
      <div className="bg-white rounded-md mt-10 flex ">
        <div className="flex w-1/4 h-full p-1 ">
          <img
            src="https://img.okezone.com/content/2023/03/02/406/2774395/sah-dodol-garut-tradisi-ngawuwuh-dan-burayot-jadi-warisan-budaya-tak-benda-0KkEVDhh7V.jpg"
            className="  rounded-md"
          />
        </div>
        <div className=" p-2 w-full">
          <div className=" flex">
            <p className="w-full font-bold text-xl">Nama Snack</p>
            <p className=" w-full text-end">XX.Kg</p>
          </div>
          <div className=" mt-2 flex gap-3 w-full">
            <div className=" w-48">
              <p>Supplier</p>
              <p>Harga Beli</p>
              <p>Total Harga</p>
            </div>
            <div>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className="w-full">
              <p>2</p>
              <p>Rp.xxxxxx / kg</p>
              <p>Rp.xxxxxx</p>
            </div>
            <div className=" flex mt-10 ">
              <input type="checkbox" defaultChecked className="checkbox" />
            </div>
          </div>
        </div>
      </div>
      ​
    </>
  );
};

export default CardValidasi;
