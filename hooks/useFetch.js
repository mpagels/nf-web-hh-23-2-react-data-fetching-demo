import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    async function fetchJoke() {
      const response = await fetch(url);
      const newDate = await response.json();
      setJoke(newDate);
    }
    fetchJoke();
  }, [url]);

  return joke;
}
