const Node = require('./src/node');
const Stack = require('./src/stack');

const st1 = new Stack();
const st2 = new Stack();

st1.append('node1');
st1.append('node2');
st1.append('node3');



console.log(st1.pop().data);
console.log('----------------------------------------');
console.log(st1);
