import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ICountries } from "../interfaces/interfaces";
import { getCountryByCode } from "../lib/api";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const [country, setCountry] = useState<ICountries>();

  const setCountryByCode = async (id: string | undefined) => {
    const data = await getCountryByCode(id);
    setCountry(data);
  };
  useEffect(() => {
    setCountryByCode(id);
  }, []);

  return (
    <section className="details">
      <Link to="/countries-api-typescript" className="details__button">
        <FaLongArrowAltLeft />
        <span>back</span>
      </Link>

      <div className="details__container">
        <img src={country?.flags.png} alt={country?.name} />
        <div className="characteristics">
          <h4>{country?.name}</h4>
        </div>
      </div>
    </section>
  );
};

export default Details;
