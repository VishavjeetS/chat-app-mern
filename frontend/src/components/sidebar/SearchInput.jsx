import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full input input-bordered rounded-full"
      />

      <button type="submit" className="btn btn-circle bg-orange-700 text-white">
        <CiSearch className="h-6 w-6" />
      </button>
    </form>
  );
};

export default SearchInput;
