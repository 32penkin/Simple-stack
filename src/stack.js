const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  append(data) {
    const node = new Node(data);

    if(this.size == 0) {
      this.top = node;
      this.size++;
    } else {
      node.prev = this.top;
      this.top = node;
      this.size++;
    }
  }

  pop() {

  }

  getSize() {

  }

}

module.exports = Stack;
