## Stack
 ###  Stack
 is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a stack gives rise to its alternative name, LIFO (for last in, first out).

 You can use methods of Stack such as:
 * append(data) - for adding new node to your List (to the its end)
 * pop() - for removing the top of the Stack and returning it
 * also u can use next methods: getSize(), getTop().

 ###  Example:

 To create a new Stack:
 ```sh
  const stack = new Stack();
  ```
  Now Stack looks like:
  ```sh
  Stack { top: null, size: 0 }
  ```
  To add some data to the end of Stack:
  ```sh
  stack.append('node1');
  stack.append('node2');;
  ```
  Now Stack looks like:
  ```sh
  Stack {
  top: Node { data: 'node2', prev: Node { data: 'node1', prev: null } },
  size: 2 }
  ```
  To "pop" this Stack:
  ```sh
  stack.pop();
  ```
  Now Stack looks like:
  ```sh
  Stack { top: Node { data: 'node1', prev: null }, size: 1 }
  ```
  And pop() method will return:
  ```sh
  Node { data: 'node2', prev: Node { data: 'node1', prev: null } }
  ```
 ---