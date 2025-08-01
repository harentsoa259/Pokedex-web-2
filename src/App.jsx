import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonList from './components/Pokemonlist';
import SearchBar from './components/Searchbar';
import Navbar from './components/NavBar';
import PokemonDetail from './components/pages/PokemonDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="p-4">
              <SearchBar onSearch={setSearchTerm} />
              <PokemonList searchTerm={searchTerm} />
            </div>
          }
        />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
