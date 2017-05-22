const Node = require('./src/node');
const Stack = require('./src/stack');

const stack = new Stack();

stack.append('node1');
stack.append('node2');



console.log(stack.pop());
