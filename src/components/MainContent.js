import React from "react";
import classes from "./MainContent.module.css";
const MainContent = () => {
  return (
    <main className={classes.mainWrapper}>
      <div className={classes.mainHead}>
        <form className={classes.searchBox}>
          <input type="search" placeholder="search for an anime ..." required />
        </form>
      </div>
    </main>
  );
};

export default MainContent;
