import React from "react";
import classes from "./MainContent.module.css";

const MainContent = (props) => {
  return (
    <main className={classes.mainWrapper}>
      <div className={classes.mainHead}>
        <form className={classes.searchBox} onSubmit={props.handleSearch}>
          <input
            type="search"
            placeholder="search for an anime ..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className={classes.animeList}>
        {props.animeList.map((anime) => (
          <div className={classes.animeCard} key={anime.mal_id}>
            {anime.title}
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
