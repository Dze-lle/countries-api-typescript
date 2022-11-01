import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ICountries } from "../../interfaces/interfaces";

const ListCountries: FC<ICountries> = (country) => {
  const navigate = useNavigate();

  const handleDetails = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <article onClick={() => handleDetails(country.ccn3)}>
      <img src={country.flags.png} alt={country.name.common} />
      <div className="details">
        <p className="title">{country.name.common}</p>
        <p className="population">
          <span>population:</span> {country.population.toLocaleString("en-US")}
        </p>
        <p className="region">
          <span>region:</span> {country.region}
        </p>
        <p className="capital">
          <span>capital:</span> {country.capital}
        </p>
      </div>
    </article>
  );
};

export default ListCountries;
