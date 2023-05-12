import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ICountries } from "../interfaces/interfaces";
import { getCountryByCode } from "../lib/api";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useCountries } from "../hooks/useCountries";

function Details() {
  const { id } = useParams();
  const [country, setCountry] = useState<ICountries>();
  const { initialCountries } = useCountries();

  async function setCountryByCode(id: string) {
    const data = await getCountryByCode(id);
    setCountry(data);
  }

  useEffect(() => {
    setCountryByCode(id!);
  }, []);

  return (
    <section className="details">
      <div className="details__button">
        <Link to="/countries-api-typescript" className="btn">
          <FaLongArrowAltLeft className="arrow-icon" />
          <span>back</span>
        </Link>
      </div>

      <div className="details__container">
        <img src={country?.flags.png} alt={country?.name} />
        <div className="country">
          <h4>{country?.name}</h4>
          <div className="country__left">
            <span>
              <strong>native name:</strong> {country?.nativeName}
            </span>
            <span>
              <strong>population:</strong>{" "}
              {country?.population.toLocaleString("en-US")}
            </span>
            <span>
              <strong>region:</strong> {country?.region}
            </span>
            <span>
              <strong>sub region:</strong> {country?.subregion}
            </span>
            <span>
              <strong>capital:</strong> {country?.capital}
            </span>
          </div>
          <div className="country__right">
            <span>
              <strong>top level domain:</strong> {country?.topLevelDomain}
            </span>
            <span>
              <strong>currencies:</strong>{" "}
              {country?.currencies.map((a) => a.name)}
            </span>
            <span>
              <strong>languages:</strong>{" "}
              {country?.languages.map((a) => a.name).join(", ")}
            </span>
          </div>
          {country?.borders === undefined ? (
            <></>
          ) : (
            <div className="country__border">
              <strong>border countries:</strong>
              {country?.borders.map((code, index) => (
                <span key={index}>
                  {initialCountries.find((c) => c.alpha3Code === code)?.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Details;
