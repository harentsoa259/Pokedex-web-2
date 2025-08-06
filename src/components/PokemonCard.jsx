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
      normal: 'bg-gradient-to-br from-gray-400 to-gray-500',
      fire: 'bg-gradient-to-br from-red-400 to-orange-600',
      water: 'bg-gradient-to-br from-blue-400 to-blue-600',
      electric: 'bg-gradient-to-br from-yellow-300 to-yellow-500',
      grass: 'bg-gradient-to-br from-green-400 to-green-600',
      ice: 'bg-gradient-to-br from-blue-200 to-cyan-400',
      fighting: 'bg-gradient-to-br from-red-600 to-red-800',
      poison: 'bg-gradient-to-br from-purple-400 to-purple-600',
      ground: 'bg-gradient-to-br from-yellow-500 to-amber-700',
      flying: 'bg-gradient-to-br from-indigo-300 to-purple-400',
      psychic: 'bg-gradient-to-br from-pink-400 to-purple-500',
      bug: 'bg-gradient-to-br from-green-300 to-lime-500',
      rock: 'bg-gradient-to-br from-yellow-700 to-amber-800',
      ghost: 'bg-gradient-to-br from-purple-600 to-indigo-800',
      dragon: 'bg-gradient-to-br from-indigo-600 to-purple-700',
      dark: 'bg-gradient-to-br from-gray-700 to-black',
      steel: 'bg-gradient-to-br from-gray-500 to-slate-600',
      fairy: 'bg-gradient-to-br from-pink-200 to-pink-400',
    };
    return typeColors[typeName] || 'bg-gradient-to-br from-gray-400 to-gray-600';
  };

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="block group">
      <Tilt
        glareEnable={true}
        glareColor="#ffffff"
        glareMaxOpacity={0.4}
        scale={1.08}
        transitionSpeed={350}
        gyroscope={true}
        glarePosition="all"
        glareBorderRadius="24px"
        perspective={1000}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
      >
        <div
          className={`
            h-80
            relative overflow-hidden rounded-3xl shadow-xl p-6 text-white 
            transition-all duration-700 cursor-pointer
            hover:shadow-3xl hover:shadow-black/30
            border-2 border-white/25 backdrop-blur-lg
            transform-gpu will-change-transform
            animate-fade-in
            ${isHovered ? 'scale-[1.02]' : 'scale-100'}
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-3xl
          `}
          style={{
            backgroundImage: `${bgColor}, radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            animationDelay: `${delay}ms`,
            boxShadow: `
              0 20px 40px -12px rgba(0,0,0,0.25),
              0 0 0 1px rgba(255,255,255,0.1),
              inset 0 1px 0 rgba(255,255,255,0.2)
            `
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out transform skew-x-12 opacity-60"></div>
          
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-conic from-transparent via-white/15 to-transparent w-1/2 animate-shine-slow transform rotate-45 origin-center"></div>
          </div>
          
          <div className="absolute top-3 right-4 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
          <div className="absolute bottom-6 left-5 w-1.5 h-1.5 bg-white/30 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/3 left-3 w-1 h-1 bg-white/25 rounded-full animate-pulse-slow"></div>

          <div className="absolute top-3 right-3 text-xs font-bold text-white/90 bg-black/30 px-3 py-1.5 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg">
            #{pokemon.id.toString().padStart(3, '0')}
          </div>

          <div className="relative mb-6 flex justify-center">
            <div className={`
              absolute inset-0 bg-gradient-radial from-white/20 via-white/10 to-transparent rounded-full blur-2xl scale-75
              transition-all duration-700
              ${isHovered ? 'scale-110 from-white/30 via-white/15' : 'scale-75'}
            `}></div>
            
            <div className={`
              absolute inset-0 rounded-full border-2 border-white/20 scale-75
              transition-all duration-500
              ${isHovered ? 'scale-90 border-white/30 rotate-180' : 'scale-75 rotate-0'}
            `}></div>
            
            <div className="relative z-10">
              {!imageLoaded && (
                <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full animate-pulse flex items-center justify-center shadow-inner">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/30 to-white/20 rounded-full"></div>
                </div>
              )}
              <img
                src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default}
                alt={pokemon.name}
                className={`
                  w-32 h-32 object-contain drop-shadow-2xl
                  transition-all duration-700 transform-gpu
                  ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                  ${isHovered ? 'scale-115 drop-shadow-[0_15px_35px_rgba(0,0,0,0.4)]' : ''}
                `}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />
            </div>
            
            <div className={`
              absolute -bottom-3 left-1/2 transform -translate-x-1/2 
              bg-gradient-radial from-black/30 to-transparent rounded-full w-20 h-6 blur-lg
              transition-all duration-700
              ${isHovered ? 'w-24 h-7 from-black/40' : 'w-20 h-6'}
            `}></div>
          </div>

          <h2 className={`
            text-2xl font-black text-center mb-4 capitalize
            transition-all duration-500
            bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent
            drop-shadow-lg
            ${isHovered ? 'scale-110 tracking-wide' : 'scale-100 tracking-normal'}
          `}>
            {pokemon.name}
          </h2>

          <div className="flex justify-center gap-3 mb-2">
            {pokemon.types.map((t, index) => (
              <span
                key={t.type.name}
                className={`
                  px-4 py-2 text-xs font-bold rounded-2xl capitalize
                  border border-white/40 backdrop-blur-md shadow-lg
                  transition-all duration-500 transform-gpu
                  hover:scale-125 hover:border-white/60 hover:-translate-y-1
                  ${getTypeColor(t.type.name)}
                  ${isHovered ? 'translate-y-0 shadow-2xl scale-105' : 'translate-y-0'}
                `}
                style={{
                  animationDelay: `${delay + (index * 150)}ms`,
                  transitionDelay: `${index * 75}ms`,
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                {t.type.name}
              </span>
            ))}
          </div>

          <div className="absolute bottom-2 left-4 right-4">
            <div className="flex justify-between text-xs text-white/60 mb-1">
              <span>HP</span>
              <span>ATK</span>
              <span>DEF</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3].map((_, i) => (
                <div 
                  key={i}
                  className={`
                    h-1 flex-1 rounded-full bg-white/20
                    transition-all duration-700
                    ${isHovered ? 'bg-gradient-to-r from-white/40 to-white/60' : ''}
                  `}
                  style={{ animationDelay: `${delay + (i * 100)}ms` }}
                ></div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/20 overflow-hidden rounded-b-3xl">
            <div 
              className={`
                h-full bg-gradient-to-r from-white/70 via-white/90 to-white/70
                transition-all duration-1000 ease-out
                ${isHovered ? 'w-full shadow-glow' : 'w-0'}
              `}
            ></div>
          </div>

          <div className={`
            absolute inset-0 rounded-3xl
            transition-all duration-700
            ${isHovered ? 'shadow-[inset_0_0_30px_rgba(255,255,255,0.15)]' : ''}
          `}></div>

          <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-white/30 to-transparent rounded-tl-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-white/20 to-transparent rounded-br-3xl opacity-40"></div>
        </div>
      </Tilt>
    </Link>
  );
}

const enhancedStyles = `
  @keyframes shine-slow {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(300%) rotate(45deg); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
    50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
  }
  
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
    50% { transform: translateY(-8px) scale(1.2); opacity: 0.9; }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.3); }
  }
  
  .animate-shine-slow {
    animation: shine-slow 4s ease-in-out infinite;
    animation-delay: 1s;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 3.5s ease-in-out infinite;
    animation-delay: 1s;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
    animation-delay: 2s;
  }
  
  .bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-stops));
  }
  
  .bg-gradient-conic {
    background: conic-gradient(var(--tw-gradient-stops));
  }
  
  .shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
  
  .shadow-glow {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  }
  
  .will-change-transform {
    will-change: transform;
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('enhanced-pokemon-styles')) {
  const style = document.createElement('style');
  style.id = 'enhanced-pokemon-styles';
  style.textContent = enhancedStyles;
  document.head.appendChild(style);
}

export default PokemonCard;