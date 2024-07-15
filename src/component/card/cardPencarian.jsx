const CardPencarian = () => {
  return (
    <>
      <div className="bg-white rounded-md mt-10 flex shadow-md">
        <div className=" p-2  h-full">
          <div
            className="w-48 h-[150px] bg-cover rounded-md "
            style={{
              backgroundImage: `url( ${"http://img.okezone.com/content/2023/03/02/406/2774395/sah-dodol-garut-tradisi-ngawuwuh-dan-burayot-jadi-warisan-budaya-tak-benda-0KkEVDhh7V.jpg"})`,
            }}
          ></div>
        </div>
        <div className=" p-2 w-full">
          <div className=" flex ">
            <p className="w-full font-bold text-4xl">Nama Snack</p>
            <p className="  text-end">XX.kg</p>
          </div>
          <div className=" mt-5 flex gap-3">
            <div>
              <p>Supplier</p>
              <p>Harga Beli</p>
              <p>Harga Jual</p>
            </div>
            <div>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPencarian;
