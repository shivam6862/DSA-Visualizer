import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import MergeSort from "./components/sorting/MergeSort";
import SelectionSort from "./components/sorting/SelectionSort";
import BubbleSort from "./components/sorting/BubbleSort";
import InsertionSort from "./components/sorting/InsertionSort";
import QuickSort from "./components/sorting/QuickSort";

import PathFinder from "./components/graph/PathFinder";

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
    path: "/pathfinder",
    Component: PathFinder,
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
