import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import { ICountries } from "../../interfaces/interfaces";

const Search: FC = () => {
  const students = [
    { value: "Alex", label: "Alex" },
    { value: "Deven", label: "Deven" },
    { value: "Vinicious", label: "Vinicious" },
  ];

  return (
    <div className="form-group">
      <div className="search">
        <FaSearch className="icon" />
        <input type="search" name="" id="" placeholder="Search for a country" />
      </div>

      <Select options={students} />
    </div>
  );
};

export default Search;
