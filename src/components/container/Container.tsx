import ListCountries from "./ListCountries";
import SearchCountries from "./SearchCountries";

const Container = () => {
  return (
    <section className="container">
      <SearchCountries />
      <ListCountries />
    </section>
  );
};

export default Container;
