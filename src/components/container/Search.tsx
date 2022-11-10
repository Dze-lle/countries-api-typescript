import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import Select, { StylesConfig } from "react-select";
import { useCountries } from "../../hooks/useCountries";
import { getCountriesByRegion } from "../../lib/api";

interface IOptionType {
  value: string;
  label: string;
}

function Search() {
  const { initialCountries, dispatch, query } = useCountries();

  const regions = initialCountries.reduce<IOptionType[]>(
    (arr, item) => {
      let found = arr.find((a) => a.value === item.region);
      if (!found) {
        arr.push({
          value: item.region,
          label: item.region,
        });
      }
      return arr;
    },
    [{ value: "All", label: "All" }]
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "EVENT_SEARCH", payload: e.target.value });
  };

  const handleSelectChange = (option: IOptionType | null) => {
    // const data = await getCountriesByRegion(option!.value);
    // dispatch({ type: "FILTER_BY_REGION", payload: data });
  };

  // const customStyles: StylesConfig<IOptionType, false> = {
  //   container: (provided) => ({
  //     ...provided,
  //     flexGrow: 1,
  //   }),
  //   control: (provided) => ({
  //     ...provided,
  //     background: "#fff",
  //     borderColor: "#9e9e9e",
  //     minHeight: "24px",
  //   }),
  //   option: (provided) => ({
  //     ...provided,
  //     background: "#fff",
  //   }),
  // };

  return (
    <div className="form-group">
      <div className="search">
        <FaSearch className="icon" />
        <input
          type="search"
          value={query}
          placeholder="Search for a country"
          onChange={handleInputChange}
        />
      </div>

      <Select
        options={regions}
        // styles={customStyles}
        // theme={theme}
        onChange={handleSelectChange}
      />
    </div>
  );
}

export default Search;
