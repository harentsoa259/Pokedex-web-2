import { useState, useRef, useEffect } from 'react';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setActiveSection(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Types Pokémon
  const pokemonTypes = [
    { type: "Normal", color: "#A8A878", icon: "⚪", weaknesses: ["Combat"] },
    { type: "Feu", color: "#F08030", icon: "🔥", weaknesses: ["Eau", "Sol", "Roche"] },
    { type: "Eau", color: "#6890F0", icon: "💧", weaknesses: ["Plante", "Électrik"] },
    { type: "Plante", color: "#78C850", icon: "🌿", weaknesses: ["Feu", "Glace", "Poison", "Vol", "Insecte"] },
    { type: "Électrik", color: "#F8D030", icon: "⚡", weaknesses: ["Sol"] },
    { type: "Glace", color: "#98D8D8", icon: "❄️", weaknesses: ["Feu", "Combat", "Roche", "Acier"] },
    { type: "Combat", color: "#C03028", icon: "👊", weaknesses: ["Vol", "Psy", "Fée"] },
    { type: "Poison", color: "#A040A0", icon: "☠️", weaknesses: ["Sol", "Psy"] },
    { type: "Sol", color: "#E0C068", icon: "🌍", weaknesses: ["Eau", "Plante", "Glace"] },
    { type: "Vol", color: "#A890F0", icon: "🌪️", weaknesses: ["Électrik", "Glace", "Roche"] },
    { type: "Psy", color: "#F85888", icon: "🧠", weaknesses: ["Insecte", "Spectre", "Ténèbres"] },
    { type: "Insecte", color: "#A8B820", icon: "🐛", weaknesses: ["Feu", "Vol", "Roche"] },
    { type: "Roche", color: "#B8A038", icon: "🪨", weaknesses: ["Eau", "Plante", "Combat", "Sol", "Acier"] },
    { type: "Spectre", color: "#705898", icon: "👻", weaknesses: ["Spectre", "Ténèbres"] },
    { type: "Dragon", color: "#7038F8", icon: "🐲", weaknesses: ["Glace", "Dragon", "Fée"] },
    { type: "Ténèbres", color: "#705848", icon: "🌑", weaknesses: ["Combat", "Insecte", "Fée"] },
    { type: "Acier", color: "#B8B8D0", icon: "⚙️", weaknesses: ["Feu", "Combat", "Sol"] },
    { type: "Fée", color: "#EE99AC", icon: "🧚", weaknesses: ["Poison", "Acier"] }
  ];

  const getTypeColor = (typeName) => {
    const typeData = pokemonTypes.find(t => t.type === typeName);
    return typeData ? typeData.color : "#6B7280";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setActiveSection(null);
  };

  const showSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <nav className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white py-6 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine-slow"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="absolute top-2 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-4 right-20 w-1 h-1 bg-white/40 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-3 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-500"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                
                <img 
                  src="/src/assets/logo-pokedex.png" 
                  alt="Pokédex Logo" 
                  className="relative z-10 ml-7 h-12 w-auto drop-shadow-2xl group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-500 transform-gpu" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out transform skew-x-12"></div>
              </div>
              
              <div className="ml-4 group">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                  Pokédex
                </h1>
                <div className="h-1 w-0 bg-gradient-to-r from-white/80 to-transparent group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </div>

            
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="relative group px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 rounded-lg backdrop-blur-sm border border-white/20 hover:from-white/20 hover:to-white/10 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-lg">Menu</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out transform skew-x-12 rounded-lg"></div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600/50 via-red-500/30 to-red-600/50 blur-sm"></div>
      </nav>

      {isDropdownOpen && (
        <div className="fixed inset-0 z-[99999] pointer-events-none">

          <div 
            className="absolute inset-0 pointer-events-auto" 
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(false);
              setActiveSection(null);
            }}
          ></div>
          

          <div className="absolute top-[100px] right-4 w-96 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/30 overflow-hidden pointer-events-auto" style={{ zIndex: 100000 }}>
            <div className="p-4">

              <div className="flex space-x-2 mb-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showSection('types');
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === 'types' 
                      ? 'bg-red-500 text-white shadow-lg' 
                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                  }`}
                >
                  Table des types
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showSection('about');
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === 'about' 
                      ? 'bg-red-500 text-white shadow-lg' 
                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                  }`}
                >
                  À propos
                </button>
              </div>


              <div className="max-h-[500px] overflow-y-auto relative" style={{ zIndex: 100001 }}>
                {activeSection === 'types' && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2 flex items-center">
                      <span className="text-2xl mr-2">⚔️</span>
                      Types et Faiblesses Pokémon
                    </h3>
                    <div className="grid gap-3">
                      {pokemonTypes.map((pokemon, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                          <div className="flex items-center mb-3">
                            <div 
                              className="flex items-center justify-center w-10 h-10 rounded-full mr-3 shadow-lg"
                              style={{ backgroundColor: pokemon.color }}
                            >
                              <span className="text-xl">{pokemon.icon}</span>
                            </div>
                            <div>
                              <h4 
                                className="font-bold text-lg px-3 py-1 rounded-full text-white shadow-md inline-block"
                                style={{ backgroundColor: pokemon.color }}
                              >
                                {pokemon.type}
                              </h4>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-2">Faible contre :</p>
                            <div className="flex flex-wrap gap-2">
                              {pokemon.weaknesses.map((weakness, wIndex) => (
                                <span 
                                  key={wIndex}
                                  className="px-3 py-1 rounded-full text-white text-sm font-medium shadow-sm"
                                  style={{ backgroundColor: getTypeColor(weakness) }}
                                >
                                  {weakness}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === 'about' && (
                  <div className="text-gray-800">
                    <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">
                      À propos de l'application
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border border-red-100">
                        <h4 className="font-semibold text-red-600 mb-2">Pokédex Interactif</h4>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                        <h4 className="font-semibold text-blue-600 mb-2">Fonctionnalités</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Recherche rapide de Pokémon</li>
                          <li>• Table complète des types avec leurs faiblesses xD</li>
                          <li>• Interface moderne et animations</li>
                          <li>• Design responsive</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                        <h4 className="font-semibold text-green-600 mb-2">Développeurs</h4>
                        <p className="text-sm text-gray-700">
                          Développé en utilisant React et PokeAPI
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          Version 1.4.0 - 2025
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!activeSection && (
                  <div className="text-center py-8 text-gray-500">
                    <div className="text-4xl mb-3">🎯</div>
                    <p>Sélectionnez une section ci-dessus, en développement</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const navbarStyles = `
  @keyframes shine-slow {
    0% {
      transform: translateX(-100%) skewX(12deg);
    }
    100% {
      transform: translateX(300%) skewX(12deg);
    }
  }
  
  .animate-shine-slow {
    animation: shine-slow 4s ease-in-out infinite;
    animation-delay: 3s;
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('navbar-styles')) {
  const style = document.createElement('style');
  style.id = 'navbar-styles';
  style.textContent = navbarStyles;
  document.head.appendChild(style);
}

export default Navbar;