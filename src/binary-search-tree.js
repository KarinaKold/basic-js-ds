const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() { 
    this.treeRoot = null; 
  }
  root() {
    // throw new NotImplementedError('Not implemented');
    return this.treeRoot;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    this.treeRoot = addWithin(this.treeRoot, data); 
    function addWithin(node, data) { 
      if (!node) return new Node(data); 
      if (node.data === data) return node; 
      if (data < node.data) { 
        node.left = addWithin(node.left, data); 
      } else { 
        node.right = addWithin(node.right, data); 
      } 
      return node; 
    } 
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return searchWithin(this.treeRoot, data); 
    function searchWithin(node, data) { 
      if (!node) { 
        return false; 
      } 
      if (node.data === data) { 
        return true; 
      } 
      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data); 
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    return searchWithin(this.treeRoot, data); 
    function searchWithin(node, data) { 
      if (!node) { 
        return null; 
      } 
      if (node.data === data) { 
        return node; 
      } 
      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data); 
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this.treeRoot = removeNode(this.treeRoot, data); 
    function removeNode(node, data) { 
      if (!node) return null; 
      if (data < node.data) { 
        node.left = removeNode(node.left, data); 
        return node; 
      } else if (node.data < data) { 
        node.right = removeNode(node.right, data); 
        return node; 
      } else { 
        if (!node.left && !node.right) { 
          return null; 
        } if (!node.left) { 
          node = node.right; 
          return node; 
        } if (!node.right) { 
          node = node.left; 
          return node; 
        } 
        let minFromRight = node.right; 
        while (minFromRight.left) { 
          minFromRight = minFromRight.left; 
        } 
        node.data = minFromRight.data; 
        node.right = removeNode(node.right, minFromRight.data); 
        return node; 
      } 
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if (!this.treeRoot) {
      return;
    }
    let minNode = this.treeRoot;
    while (minNode.left) {
      minNode = minNode.left
    }
    return minNode.data
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    if (!this.treeRoot) {
      return;
    }
    let maxNode = this.treeRoot;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};