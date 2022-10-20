import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites-context";

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.isItemFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        address: props.address,
        title: props.title,
        description: props.description,
        image: props.image,
      });
    }
  };

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove From Favorites" : "To Favorite"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
