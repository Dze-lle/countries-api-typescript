import { FC, useEffect, useState } from "react";
import { ICountries } from "../../interfaces";
import ListCountries from "./ListCountries";
import SearchCountries from "./SearchCountries";

const Container: FC = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <section className="container">
      <SearchCountries />
      <div className="container__article">
        {loading ? (
          <div>loading...</div>
        ) : (
          countries.map(({ flag, region, name, flags }: ICountries) => (
            <ListCountries
              key={flag}
              flag={flag}
              region={region}
              name={name}
              flags={flags}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Container;
