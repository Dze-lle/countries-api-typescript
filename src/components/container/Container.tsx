import ListCountries from "./ListCountries";
import SearchCountries from "./SearchCountries";

const Container = () => {
  return (
    <section className="container">
      <SearchCountries />
      <div className="container__article">
        <ListCountries />
        <ListCountries />
        <ListCountries />
        <ListCountries />
        <ListCountries />
      </div>
    </section>
  );
};

export default Container;
