const CardSupplier = ({ supplier, isSelected, onSelect }) => {
  return (
    <>
      <div className="bg-white p-2 flex gap-1 rounded-md text-black ">
        <div className="w-fit">
          <p>Nama.supplier</p>
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
        <div className="flex items-center w-fit justify-end">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(supplier)}
            className="checkbox border border-black"
          />
        </div>
      </div>
    </>
  );
};
export default CardSupplier;
