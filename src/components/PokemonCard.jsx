import { getTypeGradient } from "./utils/typecolors";
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function PokemonCard({ pokemon, delay = 0 }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const type = pokemon.types[0]?.type.name;
  const bgColor = getTypeGradient(type);
  
  const getTypeColor = (typeName) => {
    const typeColors = {
      normal: 'bg-gray-400/80',
      fire: 'bg-red-500/80',
      water: 'bg-blue-500/80',
      electric: 'bg-yellow-400/80',
      grass: 'bg-green-500/80',
      ice: 'bg-blue-300/80',
      fighting: 'bg-red-700/80',
      poison: 'bg-purple-500/80',
      ground: 'bg-yellow-600/80',
      flying: 'bg-indigo-400/80',
      psychic: 'bg-pink-500/80',
      bug: 'bg-green-400/80',
      rock: 'bg-yellow-800/80',
      ghost: 'bg-purple-700/80',
      dragon: 'bg-indigo-700/80',
      dark: 'bg-gray-800/80',
      steel: 'bg-gray-600/80',
      fairy: 'bg-pink-300/80',
    };
    return typeColors[typeName] || 'bg-gray-500/80';
  };

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="block group">
      <Tilt
        glareEnable={true}
        glareColor="#ffffff"
        glareMaxOpacity={0.3}
        scale={1.05}
        transitionSpeed={400}
        gyroscope={true}
        glarePosition="all"
        glareBorderRadius="20px"
      >
        <div
          className={`
            relative overflow-hidden rounded-2xl shadow-lg p-6 text-white 
            transition-all duration-500 cursor-pointer
            hover:shadow-2xl hover:shadow-black/25
            border border-white/20 backdrop-blur-sm
            transform-gpu
            animate-fade-in
            ${isHovered ? 'scale-105' : 'scale-100'}
          `}
          style={{
            backgroundImage: bgColor,
            animationDelay: `${delay}ms`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out transform skew-x-12"></div>
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/3 animate-shine transform skew-x-12"></div>
          </div>
          
          <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-700"></div>

          <div className="absolute top-3 right-3 text-xs font-mono text-white/70 bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
            #{pokemon.id.toString().padStart(3, '0')}
          </div>

          <div className="relative mb-4 flex justify-center">
            <div className={`
              absolute inset-0 bg-white/10 rounded-full blur-xl scale-75
              transition-all duration-500
              ${isHovered ? 'scale-100 bg-white/20' : 'scale-75'}
            `}></div>
            
            <div className="relative z-10">
              {!imageLoaded && (
                <div className="w-28 h-28 bg-white/20 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                </div>
              )}
              <img
                src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default}
                alt={pokemon.name}
                className={`
                  w-28 h-28 object-contain drop-shadow-2xl
                  transition-all duration-500 transform-gpu
                  ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                  ${isHovered ? 'scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]' : ''}
                `}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />
            </div>
            
            <div className={`
              absolute -bottom-2 left-1/2 transform -translate-x-1/2 
              bg-black/20 rounded-full w-16 h-4 blur-md
              transition-all duration-500
              ${isHovered ? 'w-20 h-5' : 'w-16 h-4'}
            `}></div>
          </div>

          <h2 className={`
            text-xl font-bold text-center mb-3 capitalize
            transition-all duration-300
            bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent
            ${isHovered ? 'scale-105' : 'scale-100'}
          `}>
            {pokemon.name}
          </h2>

          <div className="flex justify-center gap-2">
            {pokemon.types.map((t, index) => (
              <span
                key={t.type.name}
                className={`
                  px-3 py-1.5 text-xs font-bold rounded-full capitalize
                  border border-white/30 backdrop-blur-sm
                  transition-all duration-300 transform-gpu
                  hover:scale-110 hover:border-white/50
                  ${getTypeColor(t.type.name)}
                  ${isHovered ? 'translate-y-0 shadow-lg' : 'translate-y-0'}
                `}
                style={{
                  animationDelay: `${delay + (index * 100)}ms`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {t.type.name}
              </span>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden rounded-b-2xl">
            <div 
              className={`
                h-full bg-gradient-to-r from-white/60 to-white/40
                transition-all duration-700 ease-out
                ${isHovered ? 'w-full' : 'w-0'}
              `}
            ></div>
          </div>

          <div className={`
            absolute inset-0 rounded-2xl
            transition-all duration-500
            ${isHovered ? 'shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]' : ''}
          `}></div>
        </div>
      </Tilt>
    </Link>
  );
}

const shineStyles = `
  @keyframes shine {
    0% {
      transform: translateX(-100%) skewX(12deg);
    }
    100% {
      transform: translateX(300%) skewX(12deg);
    }
  }
  
  .animate-shine {
    animation: shine 3s ease-in-out infinite;
    animation-delay: 2s;
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('shine-styles')) {
  const style = document.createElement('style');
  style.id = 'shine-styles';
  style.textContent = shineStyles;
  document.head.appendChild(style);
}

export default PokemonCard;