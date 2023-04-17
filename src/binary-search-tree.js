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
    // return findNode(this.mainRoot, data);
    // function findNode(node, data) {
    //   if (!node) {
    //     return null;
    //   }
    //   if (node.data === data) {
    //     return node;
    //   }
    //   if (data < node.data) {
    //     node.left = findNode(node.left, data);
    //   } else {
    //     node.right = findNode(node.right, data);
    //   }
    // }
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

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(2));
