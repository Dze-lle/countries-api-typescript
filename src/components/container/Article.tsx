import { useNavigate } from 'react-router-dom';
import { Countries } from '../../interfaces/interfaces';

function Article(country: Countries) {
  const navigate = useNavigate();

  const navigateByCode = (id: string) => {
    navigate(`/countries-api-typescript/${id}`);
  };

  return (
    <article onClick={() => navigateByCode(country.alpha3Code)}>
      <img src={country.flags.png} alt={country.name} />
      <div className="description">
        <p className="description__title">{country.name}</p>
        <p className="description__population">
          <span>population:</span> {country.population.toLocaleString('en-US')}
        </p>
        <p className="description__region">
          <span>region:</span> {country.region}
        </p>
        <p className="description__capital">
          <span>capital:</span> {country.capital}
        </p>
      </div>
    </article>
  );
}

export default Article;
