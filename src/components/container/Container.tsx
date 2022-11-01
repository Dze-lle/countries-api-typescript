import { useCountries } from "../../hooks/useCountries";
import Article from "./Article";
import Search from "./Search";

const Container = () => {
  const { countries } = useCountries();

  return (
    <section className="container">
      <Search />

      <div className="container__article">
        {countries.map((country, index) => (
          <Article key={index} {...country} />
        ))}
      </div>
    </section>
  );
};

export default Container;
