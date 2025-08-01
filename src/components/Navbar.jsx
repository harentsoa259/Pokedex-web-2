function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <nav className="bg-red-500 text-white py-4 shadow-md">
      <div>
        <img src="/src/assets/logo-pokedex.png" alt="" className="ml-7" />
        </div>
    </nav>
  );
}

export default Navbar;
