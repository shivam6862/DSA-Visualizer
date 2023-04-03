import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.heading}>Sorting Visualizer</div>
      <div className={classes.navbar}>
        <div className={classes.nav}>
          <Link to="/mergesort" className={classes.navItem}>
            mergesort
          </Link>
          <Link to="/selectionsort" className={classes.navItem}>
            selectionsort
          </Link>

          <Link to="/bubblesort" className={classes.navItem}>
            bubblesort
          </Link>
          <Link to="/insertionsort" className={classes.navItem}>
            insertionsort
          </Link>
          <Link to="/quicksort" className={classes.navItem}>
            quicksort
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
