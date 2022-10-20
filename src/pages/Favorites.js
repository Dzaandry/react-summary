import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { FavoritesContext } from "../store/favorites-context";

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h2>My Favorites</h2>
      {content}
    </section>
  );
};

export default FavoritesPage;
