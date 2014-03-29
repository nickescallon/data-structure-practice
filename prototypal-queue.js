var List = require('./linkedList'); //imports my linked list to use as storage;

var makeQueue = function() {
  var queue = Object.create(queueMethods);
  queue.size = 0;
  queue.storage = new List();
  return queue;
};

queueMethods = {};

queueMethods.enqueue = function(v) {
  this.storage.addToTail(v);
  this.size++;
};

queueMethods.dequeue = function() {
  this.size = this.size > 0 ? --this.size : 0;
  return this.storage.popHead();
}

//TESTS//
// var a = makeQueue();

// a.enqueue(1);
// a.enqueue(2);
// a.enqueue(3);
// console.log("size: ", a.size);
// console.log(a.dequeue());
// console.log(a.dequeue());
// console.log(a.dequeue());
// console.log(a.dequeue());
// console.log("size: ", a.size);

