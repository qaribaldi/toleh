const CardSupplier = ({ supplier }) => {
  return (
    <>
      <div className="bg-white p-2 flex gap-1 rounded-md text-black ">
        <div className="w-full">
          <p>Nama supplier</p>
          <p>Alamat</p>
          <p>No tlp</p>
        </div>
        <div className=" w-fit">
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>
        <div className="w-full">
          <p>{supplier.nama_supplier}</p>
          <p>{supplier.alamat}</p>
          <p>{supplier.no_telp}</p>
        </div>
        <div className="flex items-center w-full justify-end">
          <input type="checkbox" defaultChecked className="checkbox" />
        </div>
      </div>
    </>
  );
};
export default CardSupplier;
