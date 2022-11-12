import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useCountries } from "../../hooks/useCountries";
import { ISelectOption } from "../../interfaces/interfaces";
import Select from "../Select";

function Search() {
  const { dispatch, query, options } = useCountries();
  const [value, setValue] = useState<ISelectOption | undefined>(options[0]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "EVENT_SEARCH", payload: e.target.value });
  };

  return (
    <div className="form-group">
      <div className="search">
        <FaSearch className="icon" />
        <input
          type="search"
          value={query}
          placeholder="Search for a country"
          onChange={handleSearch}
        />
      </div>

      <Select value={value} onChange={(o) => setValue(o)} options={options} />
    </div>
  );
}

export default Search;
