import { useGlobalContext } from "../context";

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();

  return (
    <section className="favorites">
      <div className=""></div>
    </section>
  );
};

export default Favorites;
