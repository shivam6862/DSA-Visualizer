const dir = [-1, 0, 1, 0, -1];

const check = (row, col, grid) => {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length)
    return false;
  if (grid[row][col].isVisited || grid[row][col].isWall) return false;
  return true;
};

const setDistanceAndPreviousNode = (grid, top, next_X, next_Y) => {
  if (grid[next_X][next_Y].distance > top.distance + 1) {
    grid[next_X][next_Y].distance = top.distance + 1;
    grid[next_X][next_Y].previousNode = top;
  }
};

const shortestPath = (grid, startNode, finishNode) => {
  const visitedNodesInOrder = [];
  var stack = [];
  stack.push(startNode);
  startNode.distance = 0;
  while (stack.length > 0) {
    var top = stack.pop();
    top.isVisited = true;
    visitedNodesInOrder.push(top);
    // console.log(top);
    for (var i = 0; i < 4; i++) {
      var next_X = top.row + dir[i];
      var next_Y = top.col + dir[i + 1];

      if (!check(next_X, next_Y, grid)) continue;

      setDistanceAndPreviousNode(grid, top, next_X, next_Y);

      if (grid[next_X][next_Y] == finishNode) {
        console.log("Happened!", grid[next_X][next_Y]);
        break;
      }
      stack.push(grid[next_X][next_Y]);
    }
  }
  return visitedNodesInOrder;
};

export const depthfirstsearch = (grid, startNode, finishNode) => {
  const visitedNodesInOrder = shortestPath(grid, startNode, finishNode);
  console.log(visitedNodesInOrder);
  return visitedNodesInOrder;
};

export const getNodesInShortestPathOrder = (finishNode) => {
  const nodesInShortestPathOrder = [];
  console.log(finishNode);
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  console.log(nodesInShortestPathOrder);
  return nodesInShortestPathOrder;
};
