import { useEffect, useState } from "react";
import { useCountries } from "../../hooks/useCountries";
import ListCountries from "./ListCountries";
import SearchCountries from "./SearchCountries";

const Container = () => {
  const { loading, countries, error } = useCountries();
  const [regions, setRegions] = useState<string[]>([]);

  useEffect(() => {
    setRegions([...new Set(countries.map((item) => item.region))]);
  }, [countries]);

  return (
    <section className="container">
      <SearchCountries {...regions} />
      <div className="container__article">
        {loading ? (
          <div>loading...</div>
        ) : (
          countries.map((items, index) => (
            <ListCountries key={index} {...items} />
          ))
        )}
      </div>
    </section>
  );
};

export default Container;
