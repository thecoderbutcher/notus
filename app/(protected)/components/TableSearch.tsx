import { MdSearch } from 'react-icons/md';

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto md:flex items-center justify-center rounded-xl px-2 py-1 text-info-dark/50 border border-info-dark/20 shadow-md shadow-shadow cursor-pointer hover:bg-info/10 transition-all duration-300 ease-in-outs hover:text-info-dark ">
      <input
        className="outline-none p-1 w-[300px]"
        type="search"
        name="search"
        id=""
        placeholder="Search..."
      />
      <span className="text-xl ml-1">
        <MdSearch />
      </span>
    </div>
  );
};

export default TableSearch;
