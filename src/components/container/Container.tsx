import { useCountries } from "../../hooks/useCountries";
import Article from "./Article";
import Search from "./Search";

function Container() {
  const { filterCountries } = useCountries();

  return (
    <section className="container">
      <Search />

      <div className="container__article">
        {filterCountries.map((country, index) => (
          <Article key={index} {...country} />
        ))}
      </div>
    </section>
  );
}

export default Container;
