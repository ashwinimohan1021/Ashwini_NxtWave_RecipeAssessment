import { useState } from "react";

const SearchFilters = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("");
  const [time, setTime] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ title, cuisine, rating, time, calories });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md flex gap-4 flex-wrap">
      <input type="text" placeholder="Search by title..." value={title} onChange={(e) => setTitle(e.target.value)} className="p-2 rounded border" />
      <input type="text" placeholder="Cuisine..." value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="p-2 rounded border" />
      <input type="text" placeholder="Rating >= ..." value={rating} onChange={(e) => setRating(e.target.value)} className="p-2 rounded border" />
      <input type="text" placeholder="Time <= ..." value={time} onChange={(e) => setTime(e.target.value)} className="p-2 rounded border" />
      <input type="text" placeholder="Calories <= ..." value={calories} onChange={(e) => setCalories(e.target.value)} className="p-2 rounded border" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Search</button>
    </form>
  );
};

export default SearchFilters;
