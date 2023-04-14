import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const data = {
    "Sorting Visualizer": [
      ["/mergesort", "Mergesort"],
      ["/selectionsort", "Selectionsort"],
      ["/bubblesort", "Bubblesort"],
      ["/insertionsort", "Insertionsort"],
      ["/quicksort", "Quicksort"],
    ],
    "Graph Visualizer": [
      ["/breadthfirstsearch", "Breadth First Search"],
      ["/depthfirstsearch", "Depth First Search"],
      ["/minimumcostpath", "Minimum Cost Path"],
    ],
    "General Problems": [
      ["/equationsolve", "Equation Solver"],
      ["/nqueen", "N-Queen Problem"],
      ["/minesweeper", "Minesweeper Game"],
    ],
    "Tree Visualizer": [
      ["/preordertraversal", "Preorder Traversal"],
      ["/inordertranversal", "Inorder Traversal"],
      ["/postordertraversal", "PostOrder Traversal"],
    ],
  };
  return (
    <div className={classes.home}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={classes.each_object}>
          <div className={classes.heading}>{key}</div>
          <div className={classes.navbar}>
            <div className={classes.nav}>
              {value.map((navitem, index) => (
                <Link to={navitem[0]} className={classes.navItem} key={index}>
                  {navitem[1]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
