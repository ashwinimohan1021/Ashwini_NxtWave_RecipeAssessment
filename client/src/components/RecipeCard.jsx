const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition p-4">
      <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
      <p className="text-gray-600">Cuisine: {recipe.cuisine}</p>
      <p className="text-gray-600">Rating: {recipe.rating}</p>
      <p className="text-gray-600">Time: {recipe.total_time} mins</p>
      <p className="text-gray-600">Calories: {recipe.calories}</p>
    </div>
  );
};

export default RecipeCard;
