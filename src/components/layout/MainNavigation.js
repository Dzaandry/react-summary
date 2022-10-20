import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/" exact>
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-meetup">
              New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/favorites">
              Favorites
            </NavLink>
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
