const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.mainRoot = null;
  }
  root() {
    return this.mainRoot;
  }

  add(data) {
    this.mainRoot = addNode(this.mainRoot, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data, node = this.mainRoot) {
    if (!node) {
      return false;
    }

    if (node.data === data) {
      return true;
    }

    if (data < node.data) {
      return this.has(data, node.left);
    } else {
      return this.has(data, node.right);
    }
  }

  find(data, node = this.mainRoot) {
    if (!node) {
      return null;
    }
    if (node.data < data) {
      if (node.right === null) return null;
      else return this.find(data, node.right);
    } else if (node.data > data) {
      if (node.left === null) return null;
      else return this.find(data, node.left);
    } else if (node.data == data) return node;
    else return null;
  }

  remove(data) {
    this.mainRoot = removeNode(this.mainRoot, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
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

  min() {
    if (!this.mainRoot) {
      return;
    }

    let node = this.mainRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.mainRoot) {
      return;
    }

    let node = this.mainRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
