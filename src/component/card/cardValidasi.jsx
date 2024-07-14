const CardValidasi = () => {
  return (
    <>
      <div className="bg-black rounded-md mt-10 flex ">
        <div className="flex w-1/4 h-full p-1 ">
          <img
            src="https://img.okezone.com/content/2023/03/02/406/2774395/sah-dodol-garut-tradisi-ngawuwuh-dan-burayot-jadi-warisan-budaya-tak-benda-0KkEVDhh7V.jpg"
            className="  rounded-md"
          />
        </div>
        <div className="flex w-full pt-5">
          <div className="w-1/4">
            <p> Nama Snack</p>
            <p>Supplier</p>
            <p>Harga Beli</p>
            <p>Harga Total</p>
          </div>
          <div className="w-full">
            <p>HAHAHAHAHAHH</p>
            <p>HAHAHAHAHAHH</p>
            <p>HAHAHAHAHAHH</p>
            <p>HAHAHAHAHAHH</p>
          </div>
          <div className=" flex flex-col w-1/4">
            <p>XXKg</p>
            <div className=" flex bg-black h-full items-end p-8">
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
