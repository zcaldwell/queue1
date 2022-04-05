class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return -1;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  get size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push("fox");
stack.push("goose");
stack.push("lizard");
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push("llama");
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null

class Queue {
  #list = [];
  #index = 0;

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    const item = this.#list[this.#index];
    if (!this.hasNext()) return null;
    this.#index++;
    return item;
  }

  hasNext() {
    return !!(this.#list.length - this.#index);
  }
}

const queue = new Queue();
queue.enqueue("fox");
queue.enqueue("goose");
queue.enqueue("lizard");
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue("llama");
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
