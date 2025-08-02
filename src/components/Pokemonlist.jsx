import { useEffect, useState } from 'react';
import PokemonCard from './Pokemoncard';
import Loader from './Loader';

function PokemonList({ searchTerm, selectedType }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=386');
        const data = await res.json();
        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
        setPokemonList(detailedData);
      } catch (error) {
        console.error('Erreur lors du chargement des Pokémon', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  const filteredList = pokemonList.filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const idMatch = pokemon.id.toString() === searchTerm;
    const typeMatch = selectedType
      ? pokemon.types.some((t) => t.type.name === selectedType)
      : true;
    return (nameMatch || idMatch) && typeMatch;
  });

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {filteredList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
