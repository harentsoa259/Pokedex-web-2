import { getTypeGradient } from "./utils/typecolors";
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon, delay = 0 }) {
  const type = pokemon.types[0]?.type.name;
  const bgColor = getTypeGradient(type);

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <Tilt
        glareEnable={true}
        glareColor="#ffffff"
        glareMaxOpacity={0.2}
        scale={1.1}
      >
        <div
          className={`rounded-lg shadow-md p-4 text-white transition hover:scale-105 animate-fade-in hover:shadow-xl hover:shadow-white/20 cursor-pointer`}
          style={{
            backgroundImage: bgColor,
            animationDelay: `${delay}ms`,
          }}
        >
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-24 mx-auto"
          />
          <h2 className="text-xl font-bold text-center mt-2 capitalize">
            {pokemon.name}
          </h2>
          <div className="flex justify-center gap-2 mt-2">
            {pokemon.types.map(t => (
              <span
                key={t.type.name}
                className="px-2 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm capitalize"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </Link>
  );
}

export default PokemonCard;
