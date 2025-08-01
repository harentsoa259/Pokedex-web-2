import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
import { getTypeGradient } from '../utils/typecolors';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error('Erreur chargement Pokémon', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [id]);

  if (loading) return <Loader />;
  if (!pokemon) return <p className="text-center mt-10">Pokémon introuvable.</p>;

  const type = pokemon.types[0]?.type.name;
  const gradient = getTypeGradient(type);

  return (
    <div className="p-6">
      <div
        className="rounded-xl shadow-lg text-white p-6 max-w-md mx-auto"
        style={{ background: gradient }}
      >
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 mx-auto"
        />
        <h2 className="text-3xl font-bold text-center capitalize mt-4">
          {pokemon.name}
        </h2>
        <p className="text-center text-sm mb-2">
          Types : {pokemon.types.map(t => t.type.name).join(', ')}
        </p>
        <div className="mt-4 space-y-2">
          <p>🆔 ID : {pokemon.id}</p>
          <p>⚖️ Poids : {pokemon.weight} kg</p>
          <p>📏 Taille : {pokemon.height} m</p>
          <p>💪 Stats :</p>
          <ul className="list-disc list-inside">
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
