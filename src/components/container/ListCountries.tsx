import { FC } from "react";
import { ICountries } from "../../interfaces";

const ListCountries: FC<ICountries> = ({ flag, region, name, flags }) => {
  return (
    <article>
      <img src={flags.svg} alt={name.common} />
      <div className="details">
        <p className="title">{name.common}</p>
        <p className="population">
          <strong>population:</strong> 323,947,000
        </p>
        <p className="region">
          <strong>region:</strong> {region}
        </p>
        <p className="capital">
          <strong>capital:</strong> washington, d.c
        </p>
      </div>
    </article>
  );
};

export default ListCountries;
