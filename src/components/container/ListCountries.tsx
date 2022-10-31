import { FC } from "react";
import { ICountries } from "../../interfaces/interfaces";

const ListCountries: FC<ICountries> = (country) => {
  return (
    <article>
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
