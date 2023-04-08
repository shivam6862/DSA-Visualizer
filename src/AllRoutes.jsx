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
