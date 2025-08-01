import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
import { getTypeGradient } from '../utils/typecolors';

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error('Pokémon introuvable');
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
  const gradient = getTypeGradient(type) || 'linear-gradient(to right, #999, #666)';

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: gradient,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-4xl text-white">
        <div className="flex flex-col items-center">
          <img
            src={pokemon.sprites.front_default || '/placeholder.png'}
            alt={pokemon.name}
            className="w-40 mb-4"
          />
          <h2 className="text-4xl font-bold capitalize">{pokemon.name}</h2>
          <div className="flex gap-2 mt-2">
            {pokemon.types.map(t => (
              <span
                key={t.type.name}
                className="px-3 py-1 text-sm font-semibold rounded-full bg-white/20 backdrop-blur-sm capitalize"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
          <p>ID : {pokemon.id}</p>
          <p>Poids : {pokemon.weight / 10} kg</p>
          <p>Taille : {pokemon.height / 10} m</p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Stats</h3>
          <div className="space-y-4">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name}>
                <div className="flex justify-between text-sm capitalize mb-1">
                  <span>{stat.stat.name}</span>
                  <span>{stat.base_stat}</span>
                </div>
                <div className="w-full bg-white/30 h-3 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{
                      width: `${Math.min(stat.base_stat, 100)}%`,
                      backgroundColor: 'rgba(255,255,255,0.8)',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-10 w-full py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-100 transition"
        >
          ⬅️ Retour au Pokédex
        </button>
      </div>
    </div>
  );
}

export default PokemonDetail;
