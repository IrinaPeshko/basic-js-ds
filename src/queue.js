const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }

    this.length++;
  }

  dequeue() {
    let returnHead = this.head.value;
    this.head = this.head.next;
    this.length--;
    return returnHead;
  }
}

module.exports = {
  Queue,
};

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7); // returns the top element from queue and deletes it, returns 1
// returns { value: 3, next: null }
console.log(queue.dequeue());
// console.log(queue.dequeue());

console.log(queue.getUnderlyingList());
