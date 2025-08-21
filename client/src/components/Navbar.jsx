import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Recipe Finder</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/recipes" className="hover:text-yellow-300">Recipes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
