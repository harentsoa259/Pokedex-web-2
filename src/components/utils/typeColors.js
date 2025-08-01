export const getTypeGradient = (type) => {
  const gradients = {
    fire: 'linear-gradient(135deg, #F08030, #F8D030)',
    water: 'linear-gradient(135deg, #6890F0, #98D8D8)',
    grass: 'linear-gradient(135deg, #78C850, #A8E060)',
    electric: 'linear-gradient(135deg, #F8D030, #FFFACD)',
    psychic: 'linear-gradient(135deg, #F85888, #FFB6C1)',
    ice: 'linear-gradient(135deg, #98D8D8, #D0F0FF)',
    dragon: 'linear-gradient(135deg, #7038F8, #A890F0)',
    dark: 'linear-gradient(135deg, #705848, #A8A878)',
    fairy: 'linear-gradient(135deg, #EE99AC, #FFDEE9)',
    normal: 'linear-gradient(135deg, #A8A878, #D3D3D3)',
    fighting: 'linear-gradient(135deg, #C03028, #FF7F7F)',
    flying: 'linear-gradient(135deg, #A890F0, #D0E0FF)',
    poison: 'linear-gradient(135deg, #A040A0, #DDA0DD)',
    ground: 'linear-gradient(135deg, #E0C068, #F0E68C)',
    rock: 'linear-gradient(135deg, #B8A038, #D2B48C)',
    bug: 'linear-gradient(135deg, #A8B820, #C0D860)',
    ghost: 'linear-gradient(135deg, #705898, #A890F0)',
    steel: 'linear-gradient(135deg, #B8B8D0, #D3D3D3)',
  };
  return gradients[type] || 'linear-gradient(135deg, #68A090, #A0D0C0)';
};
