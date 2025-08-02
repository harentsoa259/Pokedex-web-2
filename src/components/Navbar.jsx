function Navbar() {
  return (
    <nav className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white py-6 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine-slow"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="absolute top-2 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-4 right-20 w-1 h-1 bg-white/40 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-3 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
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
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600/50 via-red-500/30 to-red-600/50 blur-sm"></div>
    </nav>
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