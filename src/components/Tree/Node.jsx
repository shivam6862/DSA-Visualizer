import React from "react";
import "./Node.css";

const Node = ({ col, row, element }) => {
  return (
    <div id={`${row}-${col}`} className={`common row_each_Element`}>
      {element}
    </div>
  );
};
export default Node;
