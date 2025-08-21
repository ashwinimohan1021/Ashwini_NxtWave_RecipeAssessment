const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Welcome to Recipe Finder
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl">
        Discover thousands of recipes from different cuisines, filter by
        ingredients, calories, cooking time, and ratings. Start exploring
        delicious recipes today!
      </p>
      <a
        href="/recipes"
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
      >
        Explore Recipes
      </a>
    </div>
  );
};

export default Home;
