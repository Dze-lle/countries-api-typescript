import { useCountries } from "../../hooks/useCountries";
import Article from "./Article";
import Search from "./Search";

const Container = () => {
  const { initialCountries, countries, searchValue } = useCountries();

  return (
    <section className="container">
      <Search />

      <div className="container__article">
        {(countries.length !== 0 || !!searchValue
          ? countries
          : initialCountries
        ).map((country, index) => (
          <Article key={index} {...country} />
        ))}
      </div>
    </section>
  );
};

export default Container;
