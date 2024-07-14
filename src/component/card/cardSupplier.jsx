const CardSupplier = () => {
  return (
    <>
      <div className="bg-white p-2 flex gap-1 rounded-md">
        <div>
          <p>Nama supplier</p>
          <p>Alamat</p>
          <p>No tlp</p>
        </div>
        <div className=" w-fit">
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>
        <div className="">
          <p>asdasdasasdasdasda</p>
          <p>asdasdasasdasdasda</p>
          <p>asdasdasasdasdasda</p>
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="checkbox" />
        </div>
      </div>
    </>
  );
};
export default CardSupplier;
