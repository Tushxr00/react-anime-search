import React from "react";
import classes from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <aside className={classes.sidebar}>
      <nav>
        <h3>Top Anime</h3>
        {props.topAnime.map((anime) => (
          <a key={anime.mal_id} href="#" target="_blank" rel="noreferrer">
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
