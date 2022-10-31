import { useCountries } from "../../hooks/useCountries";
import ListCountries from "./ListCountries";
import SearchCountries from "./SearchCountries";

const Container = () => {
  const { countries } = useCountries();

  return (
    <section className="container">
      <SearchCountries />

      <div className="container__article">
        {countries.map((country, index) => (
          <ListCountries key={index} {...country} />
        ))}
      </div>
    </section>
  );
};

export default Container;
