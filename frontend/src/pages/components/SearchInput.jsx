import { FaSearch } from "react-icons/fa";
function SearchInput() {
  return (
    <from className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
      />
      <div role="button" className="btn  btn-circle bg-blue-500 border-none  ">
        <button type="submit" className="btn-btn-circle   text-white">
          <FaSearch className="text-xl" />
        </button>
      </div>
    </from>
  );
}

export default SearchInput;
