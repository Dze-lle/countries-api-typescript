import { useEffect, useState } from "react";
import { ICountries } from "../interfaces";

export const useCountries = () => {
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCountries = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return { fetchCountries, loading, countries, error };
};
