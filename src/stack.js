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
    let temp = this.top;

    if(this.size == 0) {
      return null;
    } else {
      temp = this.top;
      this.top = this.top.prev;
      this.size--;
      return temp;
    }
  }

  getSize() {
    return this.size;
  }

  getTop() {
    return this.top;
  }

}

module.exports = Stack;
