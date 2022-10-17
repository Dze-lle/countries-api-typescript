import { FC } from "react";
import { ICountries } from "../../interfaces";

const ListCountries: FC<ICountries> = ({
  flags,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <article>
      <img src={flags.png} alt={name.common} />
      <div className="details">
        <p className="title">{name.common}</p>
        <p className="population">
          <strong>population:</strong> {population}
        </p>
        <p className="region">
          <strong>region:</strong> {region}
        </p>
        <p className="capital">
          <strong>capital:</strong> {capital}
        </p>
      </div>
    </article>
  );
};

export default ListCountries;
