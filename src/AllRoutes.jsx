import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

import MergeSort from "./components/sorting/MergeSort/MergeSort";
import SelectionSort from "./components/sorting/SelectionSort/SelectionSort";
import BubbleSort from "./components/sorting/BubbleSort/BubbleSort";
import InsertionSort from "./components/sorting/InsertionSort/InsertionSort";
import QuickSort from "./components/sorting/QuickSort/QuickSort";

import BreadthFirstSearch from "./components/graph/BreadthFirstSearch/BreadthFirstSearch";
import DepthFirstSearch from "./components/graph/DepthFirstSearch/DepthFirstSearch";
import MinimumCostPath from "./components/graph/MinimumCostPath/MinimumCostPath";

import EquationSolve from "./components/EquationSolve/EquationSolve";

import PreorderTraversal from "./components/Tree/Preorder/PreorderTraversal";
import PostorderTraversal from "./components/Tree/Postorder/PostorderTraversal";
import InorderTranversal from "./components/Tree/Inorder/InorderTranversal";

import NQueen from "./components/N-Queens-Problem/NQueens";

import Minesweeper from "./components/Minesweeper/Minesweeper";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/mergesort",
    Component: MergeSort,
  },
  {
    path: "/selectionsort",
    Component: SelectionSort,
  },
  {
    path: "/bubblesort",
    Component: BubbleSort,
  },
  {
    path: "/insertionsort",
    Component: InsertionSort,
  },
  {
    path: "/quicksort",
    Component: QuickSort,
  },
  {
    path: "/breadthfirstsearch",
    Component: BreadthFirstSearch,
  },
  {
    path: "/depthfirstsearch",
    Component: DepthFirstSearch,
  },
  {
    path: "/minimumcostpath",
    Component: MinimumCostPath,
  },
  {
    path: "/equationsolve",
    Component: EquationSolve,
  },
  {
    path: "/preordertraversal",
    Component: PreorderTraversal,
  },
  {
    path: "/postordertraversal",
    Component: PostorderTraversal,
  },
  {
    path: "/inordertranversal",
    Component: InorderTranversal,
  },
  {
    path: "/nqueen",
    Component: NQueen,
  },
  {
    path: "/minesweeper",
    Component: Minesweeper,
  },
];

export const AllRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={<route.Component />}
      ></Route>
    ))}
  </Routes>
);
