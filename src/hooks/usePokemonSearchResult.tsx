import useSWR from "swr";

const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  fetch(input, init).then((res) => res.json());

export default function usePokemonSearchResult(name?: string) {
  const { data, error, isLoading } = useSWR(
    name ? `https://pokeapi.co/api/v2/pokemon/${name}` : null,
    fetcher
  );

  return {
    pokemon: data,
    isLoading,
    isError: error,
  };
}
