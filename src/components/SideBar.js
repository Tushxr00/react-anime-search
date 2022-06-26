import React from "react";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <aside className={classes.sidebar}>
      <nav>
        <h3>Top Anime</h3>
        <a href="#" target="_blank" rel="noreferrer">
          Attack on titan
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;