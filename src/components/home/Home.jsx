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
            Mergesort
          </Link>
          <Link to="/selectionsort" className={classes.navItem}>
            Selectionsort
          </Link>
          <Link to="/bubblesort" className={classes.navItem}>
            Bubblesort
          </Link>
          <Link to="/insertionsort" className={classes.navItem}>
            Insertionsort
          </Link>
          <Link to="/quicksort" className={classes.navItem}>
            Quicksort
          </Link>
        </div>
      </div>
      <div className={classes.heading}>Graph Visualizer</div>
      <div className={classes.navbar}>
        <div className={classes.nav}>
          <Link to="/breadthfirstsearch" className={classes.navItem}>
            Breadth First Search
          </Link>
          <Link to="/depthfirstsearch" className={classes.navItem}>
            Depth First Search
          </Link>
          <Link to="/minimumcostpath" className={classes.navItem}>
            Minimum Cost Path
          </Link>
        </div>
      </div>
      <div className={classes.heading}>General Problems</div>
      <div className={classes.navbar}>
        <div className={classes.nav}>
          <Link to="/equationsolve" className={classes.navItem}>
            Equation Solver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
