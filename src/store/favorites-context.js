import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  isItemFavorite: (meetupId) => {},
});

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (meetup) => {
    setUserFavorites((prevUserFavorites) => prevUserFavorites.concat(meetup));
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const isItemFavoriteHandler = (id) => {
    return userFavorites.some((meetup) => meetup.id === id);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isItemFavorite: isItemFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
