import { FaSearch } from "react-icons/fa";

const SearchCountries = () => {
  return (
    <div className="form-group">
      <div className="search">
        <FaSearch className="icon" />
        <input type="search" name="" id="" placeholder="Search for a country" />
      </div>
      <select name="countries" id="countries">
        <option className="option" value="0">
          filter by region
        </option>
        <option value="africa">africa</option>
        <option value="america">america</option>
        <option value="asia">asia</option>
        <option value="europe">europe</option>
        <option value="oceania">oceania</option>
      </select>
    </div>
  );
};

export default SearchCountries;
