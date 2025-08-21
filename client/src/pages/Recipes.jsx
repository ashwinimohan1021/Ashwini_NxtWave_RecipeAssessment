import { useState } from "react";
import axios from "axios";
import SearchFilters from "../components/SearchFilters";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (filters) => {
    let query = [];
    if (filters.title) query.push(`title=${filters.title}`);
    if (filters.cuisine) query.push(`cuisine=${filters.cuisine}`);
    if (filters.rating) query.push(`rating=${filters.rating}`);
    if (filters.time) query.push(`total_time=${filters.time}`);
    if (filters.calories) query.push(`calories=${filters.calories}`);

    const url = `http://localhost:5000/api/recipes/search?${query.join("&")}`;

    try {
      const res = await axios.get(url);
      setRecipes(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <SearchFilters onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {recipes.length > 0 ? (
          recipes.map((r) => <RecipeCard key={r.id} recipe={r} />)
        ) : (
          <p className="text-gray-500">No recipes found. Try searching!</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
