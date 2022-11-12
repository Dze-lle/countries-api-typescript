import { useCountries } from "../../hooks/useCountries";
import Article from "./Article";
import Search from "./Search";

function Container() {
  const { countries, query, initialCountries } = useCountries();

  return (
    <section className="container">
      <Search />

      <div className="container__article">
        {(countries.length !== 0 || !!query ? countries : initialCountries).map(
          (country, index) => (
            <Article key={index} {...country} />
          )
        )}
      </div>
    </section>
  );
}

export default Container;
