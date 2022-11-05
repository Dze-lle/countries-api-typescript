import { ChangeEvent, FC, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import { useCountries } from "../../hooks/useCountries";

const Search: FC = () => {
  const { initialCountries, searchValue, dispatch } = useCountries();

  const students = [
    { value: "Alex", label: "Alex" },
    { value: "Deven", label: "Deven" },
    { value: "Vinicious", label: "Vinicious" },
  ];

  function handleInputSearch(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "HANDLE_SEARCH", payload: e.target.value });
    dispatch({ type: "FILTER_COUNTRIES" });
  }

  return (
    <div className="form-group">
      <div className="search">
        <FaSearch className="icon" />
        <input
          type="search"
          value={searchValue}
          placeholder="Search for a country"
          onChange={(e) => handleInputSearch(e)}
        />
      </div>

      <Select options={students} />
    </div>
  );
};

export default Search;
